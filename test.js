var expect = chai.expect;

describe('create deck', function() {
    describe("#createDeck", function() {
        let thisDeck = new Deck()
        expect(thisDeck.cards.length).to.equal(52);
    });
});