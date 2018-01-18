const getPokerRanking = cardArray => {
  if (cardArray.length !== 5) {
    return "Poker hand must have 5 cards";
  };
  checkIndividualCardValidity(cardArray);
};

// use regExpr to check that cards are in valid format
// const checkIndividualCardValidity = cardArray => {
//   var validCount = 0;
//   for (var i=0; i<cardArray.length; i++) {
//     if (cardArray[i].charAt(0) !== || cardArray[i].charAt(1) !== ) {
//       return 'One or more cards passed in the array is not in the valid format ex: Ah or Qd';
//     };
//   };
// };

const addCardsToObject = cardArray => {
  var cardObject = {};

  return cardObject;
};

const checkMatching = cardObject => {};

module.exports.getPokerRanking = getPokerRanking;
