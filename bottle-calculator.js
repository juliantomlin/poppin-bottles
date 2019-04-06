  var bottlePrice = 2

var buyBottles = function(buyIn){
  var bottleCaps = 0
  var emptyBottles = 0
  var fromEmpties = 0
  var fromCaps = 0
  var fullBottles = Math.floor(buyIn/bottlePrice)
  var fromMoney = fullBottles
  var bottlesRedeemed = fullBottles
  while (true){
    bottleCaps += fullBottles
    emptyBottles += fullBottles
    fullBottles = 0
    if ((emptyBottles < 2) && (bottleCaps < 4))
      break
    if (emptyBottles > 1){
      fullBottles += Math.floor(emptyBottles/2)
      fromEmpties += Math.floor(emptyBottles/2)
      emptyBottles = emptyBottles % 2
    }
    if (bottleCaps > 3){
      fullBottles += Math.floor(bottleCaps/4)
      fromCaps += Math.floor(bottleCaps/4)
      bottleCaps = bottleCaps % 4
    }
    bottlesRedeemed += fullBottles
  }
  return [bottlesRedeemed, fromMoney, fromEmpties, fromCaps, emptyBottles, bottleCaps]
}

module.exports = buyBottles