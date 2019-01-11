function card(name, suit){
    this.name = name;
    this.suit = suit;
}

function deck(){
    this.names = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
    this.suits = ['Hearts','Diamonds','Spades','Clubs'];
    var cards = [];

    for( var s = 0; s < this.suits.length; s++ ) {
        for( var n = 0; n < this.names.length; n++ ) {
            cards.push( new card( this.names[n], this.suits[s] ) );
        }
    }

    return cards;
}
function getRandom(arr, n) {
    var result = new Array(n),
        len = arr.length,
        taken = new Array(len);
    if (n > len)
        throw new RangeError("getRandom: more elements taken than available");
    while (n--) {
        var x = Math.floor(Math.random() * len);
        result[n] = arr[x in taken ? taken[x] : x];
        taken[x] = --len in taken ? taken[len] : len;
    }
    return result;
}

let ourHand = getRandom(deck(),5);
let howMany = (a) => a.length;
console.log(ourHand);
let heartCount = ourHand.filter(p => p.suit == "Hearts");
let diamondsCount = ourHand.filter(e => e.suit == "Diamonds");
let spadesCount = ourHand.filter(e => e.suit == "Spades");
let clubsCount = ourHand.filter(e => e.suit == "Clubs");
let aceCount = ourHand.filter(p => p.name == "A");
let twoCount = ourHand.filter(p => p.name == 2);
let threeCount = ourHand.filter(p => p.name == 3);
let fourCount = ourHand.filter(p => p.name == 4);
let fiveCount = ourHand.filter(p => p.name == "5");
let sixCount = ourHand.filter(p => p.name == "6");
let sevenCount = ourHand.filter(p => p.name == "7");
let eightCount = ourHand.filter(p => p.name == "8");
let nineCount = ourHand.filter(p => p.name == "9");
let tenCount = ourHand.filter(p => p.name == "10");
let jCount = ourHand.filter(p => p.name == "J");
let qCount = ourHand.filter(p => p.name == "Q");
let kCount = ourHand.filter(p => p.name == "K");



//    this.names = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
let agregatorSuits = {
    hearts: howMany(heartCount),
    diamonds: howMany(diamondsCount),
    spadesCount: howMany(spadesCount),
    clubs: howMany(clubsCount)
};

let agregatorElem = {
    ace: howMany(aceCount),
    two: howMany(twoCount),
    three: howMany(threeCount),
    four: howMany(fourCount),
    five: howMany(fiveCount),
    six: howMany(sixCount),
    seven: howMany(sevenCount),
    eight: howMany(eightCount),
    nine: howMany(nineCount),
    ten: howMany(tenCount),
    j: howMany(jCount),
    q: howMany(qCount),
    k: howMany(kCount)
};
console.log(Object.values(agregatorSuits).map((e) => e > 1));
console.log(Object.values(agregatorElem).map((e) => e > 0));


//function highestSet ()
