const chai = require('chai');
const axios = require('axios');
const app = require('../Mission 1 Project/index');
const expect = chai.expect;

// API 1 - Testing No.1
describe("Car Value API", () => {
    const apiUrl = "http://localhost:4001";

    it("should output the car value based on model and year", async () => {
        const inputData = {
            model: "Civic",
            year: 2014,
        }

       
            const response = await axios.post(
            `${apiUrl}/carvalue`,
            inputData,
            
            {
              validateStatus: function (status) {
                return status >= 200 && status < 500; 
              },
            }
          );
    
    expect(response.status).to.equal(200);
    expect(response.data).to.have.property("car_value");
    expect(response.data.car_value).to.equal('6614');

    })
})


// API 1 - Testing No.2
describe("Car Value API", () => {
    const apiUrl = "http://localhost:4001";

    it("should output the car value based on model and year", async () => {
        const inputData = {
            model: "911",
            year: 2020,
        }
       
            const response = await axios.post(
            `${apiUrl}/carvalue`,
            inputData,
            
            {
              validateStatus: function (status) {
                return status >= 200 && status < 500; 
              },
            }
          );
    
    expect(response.status).to.equal(200);
    expect(response.data).to.have.property("car_value");
    expect(response.data.car_value).to.equal('2020');

    })
})


// API 1 - Testing No.3
describe("Car Value API", () => {
    const apiUrl = "http://localhost:4001";

    it("should output an error due to a negative year", async () => {
        const inputData = {
            model: "Task-Force",
            year:-987,
        }
       
            const response = await axios.post(
            `${apiUrl}/carvalue`,
            inputData,
            
            {
              validateStatus: function (status) {
                return status >= 200 && status < 500; 
              },
            }
          );
    
    expect(response.status).to.equal(400);
    expect(response.data).to.have.property("error");

    })
})


// API 1 - Testing No.4
describe("Car Value API", () => {
    const apiUrl = "http://localhost:4001";

    it("should output an error due to wrong data type", async () => {
        const inputData = {
            model: "C200",
            year: "twenty twenty",
        }
       
            const response = await axios.post(
            `${apiUrl}/carvalue`,
            inputData,
            
            {
              validateStatus: function (status) {
                return status >= 200 && status < 500; 
              },
            }
          );
    
    expect(response.status).to.equal(400);
    expect(response.data).to.have.property("error");

    })
})


// API 1 - Testing No.5
describe("Car Value API", () => {
  const apiUrl = "http://localhost:4001";

  it("should output an error due to an empty field", async () => {
      const inputData = {
          model: "Skyline",
          year: "",
      }
     
          const response = await axios.post(
          `${apiUrl}/carvalue`,
          inputData,
          
          {
            validateStatus: function (status) {
              return status >= 200 && status < 500; 
            },
          }
        );
  
    expect(response.status).to.equal(400);
    expect(response.data).to.have.property("error");

  })
})


// API 2 - Testing No.1
describe("Risk Rating API", () => {
  const apiUrl = "http://localhost:4001";

  it("should output the risk rating of 3", async () => {
      const inputData = {
          history: "My only claim was a crash into my house's garage door that left a scratch on my car.  There are no other crashes."
      }
     
          const response = await axios.post(
          `${apiUrl}/riskrating`,
          inputData,
          
          {
            validateStatus: function (status) {
              return status >= 200 && status < 500; 
            },
          }
        );
  
    expect(response.status).to.equal(200);
    expect(response.data).to.have.property("risk_rating");
    expect(response.data.risk_rating).to.equal(3);

  })
})

// API 2 - Testing No.2
describe("Risk Rating API", () => {
  const apiUrl = "http://localhost:4001";

  it("should output an error due to an empty field", async () => {
      const inputData = {
          history: ""
      }
     
          const response = await axios.post(
          `${apiUrl}/riskrating`,
          inputData,
          
          {
            validateStatus: function (status) {
              return status >= 200 && status < 500; 
            },
          }
        );
  
    expect(response.status).to.equal(200);

  })
})


// API 2 - Testing No.3
describe("Risk Rating API", () => {
  const apiUrl = "http://localhost:4001";

  it("should output an error as the type of string is not correct", async () => {
      const inputData = {
          history: "!@#^&*"
      }
     
          const response = await axios.post(
          `${apiUrl}/riskrating`,
          inputData,
          
          {
            validateStatus: function (status) {
              return status >= 200 && status < 500; 
            },
          }
        );
  
      expect(response.status).to.equal(200);

  })
})


// API 2 - Testing No.4
describe("Risk Rating API", () => {
  const apiUrl = "http://localhost:4001";

  it("should output a maximum risk rating of 5 despite having more than 5 occurances of the keywords", async () => {
      const inputData = {
          history: "My car crashed"
      }
     
          const response = await axios.post(
          `${apiUrl}/riskrating`,
          inputData,
          
          {
            validateStatus: function (status) {
              return status >= 200 && status < 500; 
            },
          }
        );
  
      expect(response.status).to.equal(200);
  })
})


// API 2 - Testing No.5
describe("Risk Rating API", () => {
  const apiUrl = "http://localhost:4001";

  it("should output an error as the sentence was not comprehensive enough", async () => {
      const inputData = {
          history: "This is just a sample sentence containing all 5 keywords with an extra 2 repetitions: collide, crash, scratch, bump, smash, smash, collide."
      }
     
          const response = await axios.post(
          `${apiUrl}/riskrating`,
          inputData,
          
          {
            validateStatus: function (status) {
              return status >= 200 && status < 500; 
            },
          }
        );
  
    expect(response.status).to.equal(200);
    expect(response.data).to.have.property("risk_rating");

  })
})


