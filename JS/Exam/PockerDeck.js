function card(name, suit){
    this.name = name;
    this.suit = suit;
}

function deck(){
    this.names = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
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

let ourHand = getRandom(deck(),5)

let heartCount = ourHand.every( n === "Hearts");

console.log(heartCount)
