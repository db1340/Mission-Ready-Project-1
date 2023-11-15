# Mission-1
Buying Experience Re-design at Turners Car Insurance

​​​​​For this Mission, you will be working on the backend and apply an Agile practice of Test-Driven Development (TDD).  As part of the project, there are 3 RESTful APIs that are required as part of the insurance purchasing process. 

API 1. Convert "Model" and "Year" of a car to a suggested "Car Value"

This API takes 2 parameters as input in JSON format that includes - the "model" (e.g. "Civic") and a numeric "year" of a car (e.g. 2014).  And the output is a JSON format with the suggested value for the car, such as "$6,614".  Here are the example specifications and business rules of conversion:
<br>

| INPUT | OUTPUT | ERROR OUTPUT |
| ---      | ---       |  ---      |
|{ model: "Civic"; year: 2014 }  | { car_value: 6614 }  |{ error: "there is an error"}  |
<br>

BUSINESS RULES

Car_value is calculated by adding up the positions of alphabets of the letters in the name, times a hundred, and add the year value.  Position of alphabet means the letter in the order of alphabets (e.g. A is the first letter, so it is 1.  Z is the last letter, so it is 26).  Space and any other signs are ignored.   For example, a "Civic" in year 2014 will be worth (3 + 9 + 22 + 9 + 3) * 100 + 2014 = $6,614.  If input values are not valid, return an error.
<br>
<br>

API 2. Convert "Claim History" to a "Risk Rating"

This API takes 1 parameters as input in JSON format that has a text field describing the claim history in the last 3 years of a driver requesting for a quote.  The output is a JSON format with the suggested rating of the driver from 1 to 5, 5 being a high risk driver and 1 being a low risk driver.  Here are the example specifications and business rules of conversion:
 
| INPUT | OUTPUT | ERROR OUTPUT |
| ---      | ---       |  ---      |
|{ claim_history: "My only claim was a crash into my house's garage door that left a scratch on my car.  There are no other crashes." } |	{ risk_rating: 3 } |	{ error: "there is an error"} |
<br>

BUSINESS RULES

Risk rating is calculated by counting the number of occurrences of a list of keywords.  Each occurrence (regardless of whether they are repeats) will add 1 to the risk rating.  The keyword list is "collide", "crash", "scratch", "bump", "", and "smash".  For example, "My only claim was a crash into my house's garage door that left a scratch on my car. There are no other crashes." returns a rating of 3 (counting the underlined letters).  If input value is not valid, return an error.
<br>
<br>

API 3. Convert "Car Value" and "Risk Rating" to a "Quote"

This API takes 2 parameters as input in JSON format that includes - the "car value" (e.g. $6,614) and "risk rating" of the driver between 1 to 5 (e.g. 5 meaning high risk).  And the output is a JSON format with the suggested monthly and yearly premium for the insurance policy, such as "$50", "$614,".  Here are the example specifications and business rules of conversion:
<br>

| INPUT | OUTPUT | ERROR OUTPUT |
| ---      | ---       |  ---      |
{ car_value: 6614; risk_rating: 5}	| { monthly_premium: 27.5; yearly_premium: 330}	| { error: "there is an error"} |
<br>
 
BUSINESS RULES

Yearly premium is calculated by car_value multiplied by driver rating divided by 100.   For example, car value of $6,614 and driver rating of 5, the yearly premium will be $6,614 * 5 / 100 = $330.  The monthly premium is the yearly premium divided by 12.  So the monthly premium in this example will be $300 /12 = $27.5.  If input values are not valid, return an error.
<br>
<br>

Task 4. Learn about Test-Driven Development 
Let's start by understanding the principles of test-driven development.  Watch this video about TDD (12 mins)
<br>
<br>

Task 5. Create test cases
For your chosen API, write test cases to cover all the scenarios.  Remember to write test cases for boundaries and negative cases.  The end result will be a table that looks like the following API 1 example but with more test cases:
<br>
<br>

| Test Case Number | Input (model, year) | Expected Output ($ value) | Test Description |  
| ---      | ---       |  ---      |  ---      |
| 1 | "Civic", 2020 | 6600 | Sunny day scenario | 
| 2 | "911", 2020 | 2020 | Numbers only is ok | 
| 3 | "Task-Force", -987 | error message | Negative year | 
| 4 | "C200", "twenty twenty" | error message | Negative year | 
<br>



### Built With
<li>Javascript</li>
<li>Postman API</li>
<br>

## Setup

To get started, follow these steps:

1. Install Node.js

2. Clone this repository to your local machine:

   ```
   git clone <repository_url>
   ```

3. Install project dependencies:

   ```
   npm install
   ```

5. Start the server:
   
   ```
   npm start
   ```

By default, the server runs on port 4001, but you can modify the `port` variable in `server.js` to change it.


## Contact
Daryl Brian Bonilla - darylb@missionreadyhq.com

Project Link: https://github.com/db1340/Mission-Ready-Task-1.git
