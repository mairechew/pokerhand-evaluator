const assert = require('chai').assert;
const getPokerRanking = require('../app.js').getPokerRanking;

describe('getPokerRanking', function() {
  it('Should only process arrays with 5 items', function() {
    assert.equal(getPokerRanking(['Ah','As','10c','7d','6s','8d']), 'Poker hand must have 5 cards');
    assert.equal(getPokerRanking([]), 'Poker hand must have 5 cards');
    assert.equal(getPokerRanking(['Ah','As']), 'Poker hand must have 5 cards');

  });
});
