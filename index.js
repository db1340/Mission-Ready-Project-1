const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const axios = require('axios');
const chai = require('chai');
const port = 4001;

app.use(bodyParser.json());


// API 1 - Car Value Calculation
// This whole function processes the request and calculates the suggested value based on the given name and year of a vehicle
function calculateCarValue(model, year) {
  // This function converts the letter to lowercase to ensure case insensitivity
  function calculateAlphabetValue(letter) {
      const lowercaseLetter = letter.toLowerCase(); 
        if (/^[a-z]$/.test(lowercaseLetter)) {
          return lowercaseLetter.charCodeAt(0) - 96; // This gets the ASCII code of the letter and subtract 96 to get the letter's position in the alphabet
        }
         // If the character is not a letter, return 0
        return 0;
      }
      
    // This is to calculate the total value of all the letters in a sentence
    function calculatePositionValue(sentence) {
      const cleanedSentence = sentence.replace(/[^a-zA-Z]/g, '').toLowerCase();
      let modelValue = 0;
      for (let i = 0; i < cleanedSentence.length; i++) {
        const letter = cleanedSentence.charAt(i);
        modelValue += calculateAlphabetValue(letter);
      }
        
      return modelValue;
    }

  // Formula for the Business Rules
  const carModelValue = calculatePositionValue(model);
  carValue = (carModelValue * 100) + year;  
  
    return carValue;
  }



// API 1 Post endpoint 
app.post('/carvalue', (req, res) => {
    const data = req.body;
    const model = data.model;
    const year = data.year;

  if (!model || !year) {
    return res.status(400).json({ error: 'There is an error' }); // Empty fields
  }

  if (year < 0){
    return res.status(400).json({ error: 'Negative Year' }); // The given year is negative
  }

  if (/[a-zA-Z]/.test(year)) {
    return res.status(400).json({ error: 'Wrong data type' }); // Letters are used within the field
  }

  const carValue = calculateCarValue(model, year);
  const carValueFormat = `${carValue}`;
  res.json({ car_value: carValueFormat });
});



// API 2 - Risk Counter
// The entire function is used to process the given keyword repetitions present within the history of a car and converts it into a Risk Rating
function countRisks(history) {
  const lowercaseSentence = history.toLowerCase(); 
    if (typeof history !== "string") {
      return { error: "Input must be a string" };
      }

    const trimmedSentence = history.trim(); // Remove leading and trailing whitespaces
    
    if (trimmedSentence.length === 0) {
      return { error: "Sentence cannot be empty" }; // Check if the sentence is empty
      }

    
    const words = trimmedSentence.split(/\s+/); // Split the sentence into words
    
    if (words.length <= 3) {
      return { error: "Sentence must have at more 3 words" }; // Checks if the number of words is less than 3
      }
    
    
  const wordCounts = {}; // Stores word counts
  const keywords = ["collide", "crash", "scratch", "bump", "smash"]; 
  
    // Loops through each word to track the given keywords
    keywords.forEach(word => {
      const regex = new RegExp(`${word}`, 'gi'); 
      const matches = lowercaseSentence.match(regex); // Finds all matching keywords in the sentence

      if (matches) {
        wordCounts[word] = matches.length; // Counts the number of occurances
      } else {
        wordCounts[word] = 0; // If there are no occurances within the code, output is 0
      }
    });
  

    // Calculates the total count by summing the values in wordCounts
    let total = Object.values(wordCounts).reduce((acc, count) => acc + count, 0);
    if (total >= 5) {
      total = 5;
    }

    return total;

}


// API 2 Post endpoint
app.post('/riskrating', (req, res) => {
  try {
    const data = req.body;
    const history = data.history;

    const claim_history = countRisks(history);

    if ("error" in data) {
      return res.status(400).json(claim_history); // Check if there is an error in the data object
    }
    
    res.json({risk_rating: claim_history});
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});



//API 3 - Converting the "Car Value" and "Risk Rating" to a "Quote"
function calculateQuote(car_value, risk_rating) {
  try {
      // Parse the input JSON
      const inputData = JSON.parse(car_value, risk_rating);

      // Extract car value and risk rating from the input data
      const carValue = parseFloat(inputData.car_value) || 0;
      const riskRating = parseInt(inputData.risk_rating) || 0;

      // Validate the input values
      if (carValue <= 0 || riskRating < 1 || riskRating > 5) {
        return { error: "There is an error" };
      }

      // The premium is calculated based on the given Business Rules
      const yearlyPremium = (carValue * riskRating)/100;
      const monthlyPremium = yearlyPremium / 12;
      

      // Formats the output JSON
      const outputData = {
          monthly_premium: `$${monthlyPremium.toFixed(2)}`,
          yearly_premium: `$${yearlyPremium.toFixed(2)}`
      };

      // Converts the output data to JSON format
      return JSON.stringify(outputData);

    

  } catch (error) {
      return `{"error": "${error.message}"}`;
  }
}

//API 3 endpoint
app.post('/carquote', (req, res) => {
  try {
      const inputJson = JSON.stringify(req.body);
      const result = calculateQuote(inputJson);
      res.json(result);
  } catch (error) {
      res.status(400).json({ error: error.message });
  }
});



app.listen(port, () => {
    console.log(`API server is running on port ${port}`);
  });

