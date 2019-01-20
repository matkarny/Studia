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
let twoCount = ourHand.filter(p => p.name == "2");
let threeCount = ourHand.filter(p => p.name == "3");
let fourCount = ourHand.filter(p => p.name == "4");
let fiveCount = ourHand.filter(p => p.name == "5");
let sixCount = ourHand.filter(p => p.name == "6");
let sevenCount = ourHand.filter(p => p.name == "7");
let eightCount = ourHand.filter(p => p.name == "8");
let nineCount = ourHand.filter(p => p.name == "9");
let tenCount = ourHand.filter(p => p.name == "10");
let jCount = ourHand.filter(p => p.name == "J");
let qCount = ourHand.filter(p => p.name == "Q");
let kCount = ourHand.filter(p => p.name == "K");

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
//*TESTING GROUND*//
// let agregatorSuits = {
//     hearts: 0,
//     diamonds: 5,
//     spadesCount: 0,
//     clubs: 0
// };
// let agregatorElem = {
//     ace: 1,
//     one: 1,
//     two: 1,
//     three: 1,
//     four: 1
// };
let royalFlush = Object.values(agregatorSuits).map((x) => x > 4 ).some((x) => x === true)
let isRoyalStraight = Boolean(agregatorElem.ace === 1 && agregatorElem.k === 1 && agregatorElem.q === 1, agregatorElem.j === 1, agregatorElem.ten ===1)
let isStraight = [Boolean(agregatorElem.ace === 1 && agregatorElem.k === 1 && agregatorElem.q === 1, agregatorElem.j === 1, agregatorElem.ten ===1),
    Boolean(agregatorElem.nine === 1 && agregatorElem.k === 1 && agregatorElem.q === 1, agregatorElem.j === 1, agregatorElem.ten ===1),
    Boolean(agregatorElem.nine === 1 && agregatorElem.eight === 1 && agregatorElem.q === 1, agregatorElem.j === 1, agregatorElem.ten ===1),
    Boolean(agregatorElem.nine === 1 && agregatorElem.eight === 1 && agregatorElem.seven === 1, agregatorElem.j === 1, agregatorElem.ten ===1),
    Boolean(agregatorElem.nine === 1 && agregatorElem.eight === 1 && agregatorElem.seven === 1, agregatorElem.six === 1, agregatorElem.ten ===1),
    Boolean(agregatorElem.nine === 1 && agregatorElem.eight === 1 && agregatorElem.seven === 1, agregatorElem.six === 1, agregatorElem.five ===1),
    Boolean(agregatorElem.four === 1 && agregatorElem.eight === 1 && agregatorElem.seven === 1, agregatorElem.six === 1, agregatorElem.five ===1),
    Boolean(agregatorElem.four === 1 && agregatorElem.three === 1 && agregatorElem.seven === 1, agregatorElem.six === 1, agregatorElem.five ===1),
    Boolean(agregatorElem.four === 1 && agregatorElem.three === 1 && agregatorElem.two === 1, agregatorElem.six === 1, agregatorElem.five ===1),
    Boolean(agregatorElem.four === 1 && agregatorElem.three === 1 && agregatorElem.two === 1, agregatorElem.ace === 1, agregatorElem.five ===1),
        Boolean(agregatorElem.ace === 1 && agregatorElem.k === 1 && agregatorElem.q === 1, agregatorElem.j === 1, agregatorElem.ten ===1)].some(x => x === true)

if(royalFlush && isRoyalStraight) {
    console.log(`You have a Royal Poker!`)
} else if (royalFlush && isStraight) {
    console.log(`You have a Poker!`)
} else if (Object.values(agregatorElem).map((x) => x === 4 ).some((x) => x === true)) {
    console.log(`You have a Four of a Kind!`)
} else if (Object.values(agregatorElem).map((x) => x === 3 ).some((x) => x === true) && Object.values(agregatorElem).map((x) => x === 2 ).some((x) => x === true)) {
    console.log(`You have a Full House!`)
} else if (royalFlush){
    console.log(`You have a Flush!`)
} else if (isStraight){
    console.log(`You have a Straight!`)
} else if (Object.values(agregatorElem).map((x) => x === 3 ).some((x) => x === true)) {
    console.log(`You have a Three of a Kind!`)
} else if (Object.values(agregatorElem).map((x) => x === 2 ).filter((x) => x == true).length === 2) {
    console.log(`You have a Two Pairs!`)
} else if (Object.values(agregatorElem).map((x) => x === 2 ).some((x) => x === true)) {
    console.log(`You have a One Pair!`)
} else {
    console.log(`You have a High Card!`)
}



