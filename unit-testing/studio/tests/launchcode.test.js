// launchcode.test.js code:
const launchcode = require('../index.js');

describe("Testing launchcode", function(){
  test("type of organization should be non profit", function(){
    expect(launchcode.oragnization).toBe("nonprofit");
  })
  test("the director should be Jeff", function(){
    expect(launchcode.executiveDirector).toBe("Jeff");
  })
  test("The percentage of cool employees should be 100", function(){
    expect(launchcode.percentageCoolEmployees).toBe(100);
  })
  test("programs Array testing", function(){
    expect(launchcode.programsOffered[0]).toBe("Web Development");
    expect(launchcode.programsOffered[1]).toBe("Data Analysis");
    expect(launchcode.programsOffered[2]).toBe("Liftoff");
    expect(launchcode.programsOffered.length).toBe(3);
  })
});

  describe("testing Launchoutput", function(){
  test("divisible by 2", function(){
    expect(launchcode.launchOutput(2)).toBe("Launch!");
  })
  test("only divisible by 3", function(){
    expect(launchcode.launchOutput(9)).toBe("Code!");
    expect(launchcode.launchOutput(15)).toBe("Code!");
  })
  test("only divisible by 5", function(){
    expect(launchcode.launchOutput(5)).toBe("Rocks!");
    expect(launchcode.launchOutput(15)).toBe("Rocks!");
  })
  // Write your unit tests here!
  
});