let suit = ["diamonds", "spades", "clubs", "hearts"];
let number = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

class Card {
  constructor(number, suit) {
    this.number = number;
    this.suit = suit;
  }

  describe() {
    return `${this.number} of ${this.suit}`;
  }
}

class Deck {
  constructor() {
    this.cards = [];
  }

  get getCards() {
    return this.cards;
  }

  createDeck() {
    for (let i = 0; i < suit.length; i++) {
      for (let a = 0; a < number.length; a++) {
        this.cards.push(new Card(number[a], suit[i]));
      }
    }
  }

  shuffle() {
    for (let i = this.cards.length - 1; i > 0; i--) {
      const newIndex = Math.floor(Math.random() * (i + 1));
      const oldValue = this.cards[newIndex];
      this.cards[newIndex] = this.cards[i];
      this.cards[i] = oldValue;
    }
  }
}

class Player {
  constructor(name) {
    this.name = name;
    this.score = 0;
    this.deck = [];
  }
}

class GameLogic {
  constructor() {
    this.players = [];
    this.deck = new Deck();
  }

  createGame() {
    this.players[0] = new Player(prompt("Enter your name to begin:"));
    this.players[1] = new Player("Computer");

    console.log(`Let's begin, ${this.players[0].name}!`);

    this.deck.createDeck();
    this.deck.shuffle();

    this.players[0].deck = this.deck.getCards.slice(0, 26);
    this.players[1].deck = this.deck.getCards.slice(26, 52);

    console.log("Time to play!");

    for (let i = 0; i < this.players[0].deck.length && i < this.players[1].deck.length; i++) {
      if (number.indexOf(this.players[0].deck[i].number) > number.indexOf(this.players[1].deck[i].number)) {
        this.players[0].score += 1;
        let winningHand = `${this.players[0].deck[i].number} of ${this.players[0].deck[i].suit}`;
        console.log(`${this.players[0].name} wins with the ${winningHand}`);
      } else {
        this.players[1].score += 1;
        let winningHand = `${this.players[1].deck[i].number} of ${this.players[1].deck[i].suit}`;
        console.log(`Computer wins with the ${winningHand}`);
      }
    }

    console.log("Game Over!");
    if (this.players[0].score > this.players[1].score) {
      console.log(`WINNER: ${this.players[0].name}\nSCORE: ${this.players[0].score}`);
        } else if (this.players[1].score > this.players[0].score) {
            console.log(`WINNER: Computer\nSCORE: ${this.players[1].score}`);
        } else {
            console.log("DRAW!");
        }
    }
}

const game = new GameLogic();
game.createGame();