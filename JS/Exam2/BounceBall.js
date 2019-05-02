let bounceBoard = require('./Boards/ExamInput');
let gameBoard = bounceBoard.board;

function getRandomIntInclusive(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(gameBoard);
let destinationPoint = true;
let move = 0;

let currentPositionX = 1;
let currentPositionY = 1;
let nextStepX = 1;
let nextStepY = 1;

let vectorXAdd = true;
let vectorYAdd = true;

while (destinationPoint) {
	if (nextStepX === 0 && nextStepY === 0) {

	} else if (vectorXAdd) {
		nextStepX = currentPositionX + 1;
	} else {
		nextStepX = currentPositionX - 1;
	}
	if (vectorYAdd) {
		nextStepY = currentPositionY + 1;
	} else {
		nextStepY = currentPositionY - 1;
	}

	if (nextStepX === 0 && nextStepY === 0) {
		destinationPoint = false;
		console.log("Ball comes to their destination")
	} else if (gameBoard[nextStepX][nextStepY] === '0') {
		gameBoard[currentPositionX][currentPositionY] = '0';
		gameBoard[nextStepX][nextStepY] = '1';
		console.log(gameBoard);
		currentPositionX = nextStepX;
		currentPositionY = nextStepY;
	} else if (gameBoard[currentPositionX][nextStepY] === 'X' && gameBoard[nextStepX][currentPositionY] === 'X') {
		vectorXAdd = (vectorXAdd !== true);
		vectorYAdd = (vectorYAdd !== true);

	}
	else if (gameBoard[nextStepX][nextStepY] === 'Y') {
		gameBoard[currentPositionX][currentPositionY] = '0';
		gameBoard[nextStepX][nextStepY] = '0';
		let theOption = getRandomIntInclusive(1,3);
		switch (2) {
			case 1:
				vectorXAdd = (vectorXAdd !== true);
				if (vectorXAdd) {
					nextStepX++;
					nextStepY--;
				} else {
					nextStepX--;
					nextStepY++;
				}
				break;
			case 2:
				vectorYAdd = (vectorYAdd !== true);
				if (vectorYAdd) {
					nextStepY++;
					nextStepX--;
				} else {
					nextStepY--;
					nextStepX++;
				}
				break;
			case 3:
				if (vectorXAdd) {
					nextStepX++
				} else {
					nextStepX--
				}
				if (vectorYAdd) {
					nextStepY++
				} else {
					nextStepY--
				}
				break;
			default:
				console.log('Out of range');
		}
		gameBoard[nextStepX][nextStepY] = '1';
		console.log(gameBoard);
		currentPositionX = nextStepX;
		currentPositionY = nextStepY;
	}
	else if (gameBoard[currentPositionX][nextStepY] === 'X') {
		vectorYAdd = (vectorYAdd !== true);
		gameBoard[currentPositionX][currentPositionY] = '0';

		if (vectorYAdd) {
			currentPositionY++
		} else {
			currentPositionY--
		}
		gameBoard[nextStepX][currentPositionY] = '1';
		console.log(gameBoard);
		currentPositionX = nextStepX;
		currentPositionY;
	} else if (gameBoard[nextStepX][currentPositionY] === 'X') {
		vectorXAdd = (vectorXAdd !== true);
		gameBoard[currentPositionX][currentPositionY] = '0';
		if (vectorXAdd) {
			currentPositionX++
		} else {
			currentPositionX--
		}
		gameBoard[currentPositionX][nextStepY] = '1';
		console.log(gameBoard);
		currentPositionX;
		currentPositionY = nextStepY;
	}
move++
}

