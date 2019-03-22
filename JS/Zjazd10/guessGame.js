class NewGuessGame {
constructor(attempts,arraySize){

	this.attempts = attempts;
	this.secretNumber = parseInt(arraySize*Math.random());
	this.arrayOfChoosenNumbers = [];
}

	showSecretNumber(){
		return `Your secret number is ${this.secretNumber}`
	}
	makeGuess(number){
		if (this.attempts > 0) {
			if (this.arrayOfChoosenNumbers.indexOf(number) === -1) {
				if (number < this.secretNumber) {
					this.arrayOfChoosenNumbers.push(number);
					this.attempts--;
					return	`Secret number is lower than your number. You have left ${this.attempts} attempts`;
				} else if (number > this.secretNumber) {
					this.arrayOfChoosenNumbers.push(number);
					this.attempts--;
					return	`Secret number is higher than your number. You have left ${this.attempts} attempts`;
				} else {
					return	`Congratulations you found secret numer ${this.secretNumber} with ${this.attempts} attempts left`;
				}
			} else {
				return	`You have choosen ${number} before`;
			}

		} else { return `You have any more attempts. Please try in new game with another number`}
	}
}
let newGame = new NewGuessGame(7,15);
console.log(newGame.showSecretNumber());
console.log(newGame.makeGuess(5));
console.log(newGame.makeGuess(2));
console.log(newGame.makeGuess(2));
console.log(newGame.makeGuess(4));
console.log(newGame.makeGuess(7));
console.log(newGame.makeGuess(9));
console.log(newGame.makeGuess(0));
console.log(newGame.makeGuess(1));
console.log(newGame.makeGuess(12));
console.log(newGame.makeGuess(13));

