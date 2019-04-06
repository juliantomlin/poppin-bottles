var myArgs = process.argv.slice(2)
var buyBottles = require('./bottle-calculator')
var output = buyBottles(myArgs)


console.log('TOTAL BOTTLES: ' + output[0] + '\nTOTAL EARNED:\n  BOTTLES: ' + output[2] + '\n  CAPS:    ' + output[3])
// console.log('you spent ' + (Math.floor(myArgs/2)*2) + '$ to buy ' + output[1] + ' bottles and got ' + output[2] + ' free bottles from empties and ' + output[3] + ' free bottles from caps for a total of ' + output[0] + ' total bottles of pop.')