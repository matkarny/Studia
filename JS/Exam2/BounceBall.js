let bounceBoard = require('./Boards/ExamInput2');
var emoji = require('node-emoji')
const getVectors = require('./Service/GetVectors');
const randomNumber = require('./Service/RandomNumber');
const nextStepPoint = require('./Service/NextStepPoint');

let board = bounceBoard.board;


const bouncingBall = (board) => {
	let destinationPoint = true;
	let move = 1;

	let	startPointX;
	let	startPointY;

	board[1][1] = "0";

	let randomStart = randomNumber(1, 10);
	switch (randomStart) {
		case 1:
			startPointX = 1;
			startPointY = 1;

			break;
		case 2:
			startPointX = 2;
			startPointY = 1;
			break;
		case 3:
			startPointX = 1;
			startPointY = 14;
			break;
		case 4:
			startPointX = 10;
			startPointY = 14;
			break;
		case 5:
			startPointX = 10;
			startPointY = 7;
			break;
		case 6:
			startPointX = 7;
			startPointY = 6;
			break;
		case 7:
			startPointX = 6;
			startPointY = 5;
			break;
		case 8:
			startPointX = 5;
			startPointY = 4;
			break;
		case 9:
			startPointX = 4;
			startPointY = 3;
			break;
		case 10:
			startPointX = 3;
			startPointY = 2;
			break;
		default:
			console.log('Out of range');
	}

	board[startPointY][startPointX] = emoji.get(':red_circle:');

getVectors(board,startPointX,startPointY);
let currentPositionX = startPointX;
let currentPositionY = startPointY;
const endingPointX = nextStepPoint(startPointX, !vectorXAdd);
const endingPointY = nextStepPoint(startPointY, !vectorYAdd);

while (destinationPoint && move< 101) {
    console.log( emoji.emojify(`:cloud::cloud::cloud::cloud::cloud::cloud::cloud::cloud::cloud::cloud::cloud::cloud::cloud: Move number ${move} :cloud::cloud::cloud::cloud::cloud::cloud::cloud::cloud::cloud::cloud::cloud::cloud::cloud::cloud::cloud::cloud:`));
	console.log(board);
    console.log( emoji.emojify(` :cloud::cloud::cloud::cloud::cloud::cloud::cloud::cloud::cloud::cloud::cloud::cloud::cloud::cloud::cloud::cloud::cloud::cloud::cloud::cloud::cloud::cloud::cloud::cloud::cloud::cloud::cloud::cloud::cloud::cloud::cloud::cloud::cloud::cloud::cloud::cloud::cloud:`));

	let nextStepX = nextStepPoint(currentPositionX, vectorXAdd);
	let	nextStepY = nextStepPoint(currentPositionY, vectorYAdd);

	if (nextStepX === endingPointX && nextStepY === endingPointY) {
			destinationPoint = false;
			console.log("Ball comes to their destination")
		} else if (board[nextStepY][nextStepX] === '0') {
			board[currentPositionY][currentPositionX] = '0';
			board[nextStepY][nextStepX] = emoji.get(':red_circle:');
			currentPositionX = nextStepX;
			currentPositionY = nextStepY;
		} else if (board[nextStepY][currentPositionX] === 'X' && board[currentPositionY][nextStepX] === 'X' || board[nextStepY][nextStepX] === 'X' && board[nextStepY][currentPositionX] === '0' && board[currentPositionY][nextStepX] === '0') {
			vectorXAdd = (vectorXAdd !== true);
			vectorYAdd = (vectorYAdd !== true);

		} else if (board[nextStepY][nextStepX] === 'Y') {
			board[currentPositionY][currentPositionX] = '0';
			board[nextStepY][nextStepX] = '0';
			let theOption = randomNumber(1, 3);
			switch (theOption) {
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
			board[nextStepY][nextStepX] = emoji.get(':red_circle:');
			currentPositionX = nextStepX;
			currentPositionY = nextStepY;
		} else if (board[nextStepY][currentPositionX] === 'X') {
			vectorYAdd = (vectorYAdd !== true);
			board[currentPositionY][currentPositionX] = '0';

			if (vectorYAdd) {
				currentPositionY++
			} else {
				currentPositionY--
			}
			board[currentPositionY][nextStepX] = emoji.get(':red_circle:');
			currentPositionX = nextStepX;
			currentPositionY;
		} else if (board[currentPositionY][nextStepX] === 'X') {
			vectorXAdd = (vectorXAdd !== true);
			board[currentPositionY][currentPositionX] = '0';
			if (vectorXAdd) {
				currentPositionX++
			} else {
				currentPositionX--
			}
			board[nextStepY][currentPositionX] = emoji.get(':red_circle:');
			currentPositionX;
			currentPositionY = nextStepY;
		}
		move++
}

if(move===101 && destinationPoint){
	console.log('Cannot solve it')
}
};


bouncingBall(board)
