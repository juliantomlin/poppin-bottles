var myArgs = process.argv.slice(2)
var buyBottles = require('./bottle-calculator')
var output = buyBottles(myArgs)

console.log("TOTAL BOTTLES: " + output[0] + "\n REMAINING BOTTLES: " + output[4] + "\n REMAINING CAPS:    " + output[5] + "\nTOTAL EARNED:\n  BOTTLES: " + output[2] +"\n  CAPS:    " + output[3])