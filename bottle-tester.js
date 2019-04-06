var bottleCalculator = require('./bottle-calculator')
var assert = require('chai').assert;

describe("Expected values for different buyin amounts", function() {
  it("for 10$ should return 15 bottles", function(){
    var buyIn = 10
    var result = bottleCalculator(buyIn)
    assert.equal(result[0], 15)
  });

  it("for 20$ should return 35 bottles", function(){
    var buyIn = 20
    var result = bottleCalculator(buyIn)
    assert.equal(result[0], 35)
  });

  it("for 30$ should return 55 bottles", function(){
    var buyIn = 30
    var result = bottleCalculator(buyIn)
    assert.equal(result[0], 55)
  });

  it("for 40$ should return 75 bottles", function(){
    var buyIn = 40
    var result = bottleCalculator(buyIn)
    assert.equal(result[0], 75)
  });
})