# Mission-1
Buying Experience Re-design at Turners Car Insurance

Tasks for Professional Software Developers

​​​​​In this Mission, you will be working on the backend and apply an Agile practice of Test-Driven Development (TDD).  As part of the project, there are 3 RESTful APIs that are required as part of the insurance purchasing process. 

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

API 2. Convert "Claim History" to a "Risk Rating"

This API takes 1 parameters as input in JSON format that has a text field describing the claim history in the last 3 years of a driver requesting for a quote.  The output is a JSON format with the suggested rating of the driver from 1 to 5, 5 being a high risk driver and 1 being a low risk driver.  Here are the example specifications and business rules of conversion:
 

| INPUT | OUTPUT | ERROR OUTPUT |
| ---      | ---       |  ---      |
{ claim_history: "My only claim was a crash into my house's garage door that left a scratch on my car.  There are no other crashes." }	{ risk_rating: 3 }	{ error: "there is an error"}
<br>

BUSINESS RULES

Risk rating is calculated by counting the number of occurrences of a list of keywords.  Each occurrence (regardless of whether they are repeats) will add 1 to the risk rating.  The keyword list is "collide", "crash", "scratch", "bump", "", and "smash".  For example, "My only claim was a crash into my house's garage door that left a scratch on my car. There are no other crashes." returns a rating of 3 (counting the underlined letters).  If input value is not valid, return an error.
<br>

API 3. Convert "Car Value" and "Risk Rating" to a "Quote"

This API takes 2 parameters as input in JSON format that includes - the "car value" (e.g. $6,614) and "risk rating" of the driver between 1 to 5 (e.g. 5 meaning high risk).  And the output is a JSON format with the suggested monthly and yearly premium for the insurance policy, such as "$50", "$614,".  Here are the example specifications and business rules of conversion:
<br>

| INPUT | OUTPUT | ERROR OUTPUT |
| ---      | ---       |  ---      |
{ car_value: 6614; risk_rating: 5}	{ monthly_premium: 27.5; yearly_premium: 330}	{ error: "there is an error"}
<br>
 
BUSINESS RULES

Yearly premium is calculated by car_value multiplied by driver rating divided by 100.   For example, car value of $6,614 and driver rating of 5, the yearly premium will be $6,614 * 5 / 100 = $330.  The monthly premium is the yearly premium divided by 12.  So the monthly premium in this example will be $300 /12 = $27.5.  If input values are not valid, return an error.
<br>

Task 4. Learn about Test-Driven Development 
Let's start by understanding the principles of test-driven development.  Watch this video about TDD (12 mins)
<br>

Task 5. Create test cases
For your chosen API, write test cases to cover all the scenarios.  Remember to write test cases for boundaries and negative cases.  The end result will be a table that looks like the following API 1 example but with more test cases:
<br>

| Test Case Number | Input (model, year) | Expected Output ($ value) | Test Description |  
| ---      | ---       |  ---      |  ---      |
| 1 | "Civic", 2020 | 6600 | Sunny day scenario | 
| 2 | "911", 2020 | 2020 | Numbers only is ok | 
| 3 | "Task-Force", -987 | error message | Negative year | 
| 4 | "C200", "twenty twenty" | error message | Negative year | 
<br>

The following resources may help:
​​​​​​​​​​​​​​REQUIRED Designing Test Cases http://sqa.fyicenter.com/art/Designing_Unit_Test_Cases.html (1 hour)
<br>

Task 6. Create unit tests
Choose at least 5 of the test cases you designed, implement them as a set of automated unit test using one of the unit testing frameworks.

The following resources may help:
<li>RECOMMENDED API Unit testing in JavaScript https://www.digitalonus.com/getting-started-with-api-test-automation-using-javascript/ (2 hours)</li>
<li>RECOMMENDED API Unit testing with Python: https://blog.eduonix.com/software-development/go-guide-api-testing-using-pytest/ (2 hours)</li>
<li>RECOMMENDED API Unit testing in .NET https://medium.com/@mourya.vikas/api-automation-using-c-f93c8dc0daaf (2 hours)</li>
<br>

Task 7. Create API
Now that you created the unit tests, build your chosen API.  Test your API against your unit tests as you go, until you pass all the tests.

The following resources may help:
<li>RECOMMENDED Building an API in Node.js https://www.youtube.com/watch?v=TcvOgwQPsSo (30 mins)</li>
<li>RECOMMENDED Building an API in Python https://towardsdatascience.com/the-right-way-to-build-an-api-with-python-cd08ab285f8f (30 mins)</li>
<li>RECOMMENDED Building an API in .NET https://learn.microsoft.com/en-us/aspnet/web-api/overview/older-versions/build-restful-apis-with-aspnet-web-api (30mins)</li>
<br>

Task 8. Code Review
Obtain feedback on your code from your team member by allowing them to review your code. Make any necessary changes to the code after the feedback. Similarly, review their code by pointing out the code smells and offering a solution.
<br>

The following resources may help:
​​​​​​​​​​​​​​RECOMMENDED Code smells https://blog.codinghorror.com/code-smells/

Task 9. Present at Show and Tell
At the Show and Tell next week, your team will jointly present the tasks it has completed.  This presentation should be designed to take around 5 minutes for each team member – so, if you are in a 4-people team you have up 20 minutes in total.  The time limit will be strictly enforced.  You can use PowerPoint slides, Sway or Prezi to help with your presentation. You are encouraged to demonstrate the live API and tests.
<br>

Task 10. Submit your work
By the end of Thursday, upload all of your work (screenshots, presentation slides, documents or other files) using the mission submission form.
<br>

### Built With
<li>Javascript</li>
<li>Postman API</li>
<br>

## Usage
API Project using Postman API.
<br>

## License
Distributed under the MIT License.
<br>

## Contact
Daryl Brian Bonilla - darylb@missionreadyhq.com

Project Link: https://github.com/db1340/Mission-0.git
