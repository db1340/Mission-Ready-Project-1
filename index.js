const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 4001;

app.use(bodyParser.json());


// Car Value Calculation
function calculateCarValue(model, year) {
    function calculateAlphabetValue(letter) {
        const lowercaseLetter = letter.toLowerCase();
        if (/^[a-z]$/.test(lowercaseLetter)) {
          return lowercaseLetter.charCodeAt(0) - 96;
        }
        
        return 0;
      }
      
      function calculatePositionValue(sentence) {
        const cleanedSentence = sentence.replace(/[^a-zA-Z]/g, '').toLowerCase();
        let modelValue = 0;
        for (let i = 0; i < cleanedSentence.length; i++) {
          const letter = cleanedSentence.charAt(i);
          modelValue += calculateAlphabetValue(letter);
        }
        
        return modelValue;
      }

    const carModelValue = calculatePositionValue(model);
    carValue = (carModelValue * 100) + year;  
  
    return carValue;
  }



//Risk Counter
function countRisks(history) {
    const lowercaseSentence = history.toLowerCase();
    const wordCounts = {};
    const keywords = ["collide", "crash", "scratch", "bump", "smash"];
  
    keywords.forEach(word => {
      const regex = new RegExp(`${word}`, 'gi'); 
      const matches = lowercaseSentence.match(regex); 

      if (matches) {
        wordCounts[word] = matches.length;
      } else {
        wordCounts[word] = 0;
      }
    });
    
    //Summation of wordCounts
    const total = Object.values(wordCounts).reduce((acc, count) => acc + count, 0);
    return total;

}



//API get
app.get('/carmodel', (require, res) => {
    res.status(200). send({
        model: '',
        year: ''
    })
})



// API 1 endpoint 
app.post('/carvalue', (req, res) => {
    const data = req.body;
    const model = data.model;
    const year = data.year;

  if (!model || !year) {
    return res.status(400).json({ error: 'There is an error' });
  }

  const carValue = calculateCarValue(model, year);

  const carValueFormat = `$${carValue.toFixed(2)}`;

  res.json({ car_value: carValueFormat });
});



//API 2 endpoint
app.post('/claimhistory', (req,res) => {
    const data = req.body;
    const history = data.history;

    if (!history) {
        return res.status(400).json({ error: 'There is an error' });
    }

    const claim_history = countRisks(history);
    res.json({risk_rating: claim_history});

});



app.listen(port, () => {
    console.log(`API server is running on port ${port}`);
  });

