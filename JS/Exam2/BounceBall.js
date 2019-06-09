let bounceBoard = require('./Boards/ExamInput2');
let board = bounceBoard.board;

function getRandomIntInclusive(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
const getVectors = (board, pointX, pointY) => {
	if (board[pointY][pointX - 1] === "X") {
		vectorXAdd = true


	} else if (board[pointY][pointX + 1] === "X") {
		vectorXAdd = false;

	}


	if (board[pointY - 1][pointX] === "X") {
		vectorYAdd = true;

	} else if (board[pointY + 1][pointX] === "X") {
		vectorYAdd = false;
	}

}

const endingPoint = (startingPoint, vector) =>{
	let endingPoint;
if(vector){
	endingPoint = startingPoint-1
	}	else {
	endingPoint = startingPoint+1
	}

	return endingPoint

}




const bouncingBall = (board) => {
	let	startPointX;
	let	startPointY;

	board[1][1] = "0";

	let theOption = getRandomIntInclusive(1, 10);
	switch (5) {
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


	board[startPointY][startPointX] = "1";

getVectors(board,startPointX,startPointY);


	let destinationPoint = true;
	let move = 1;

	let currentPositionX = startPointX;
	let currentPositionY = startPointY;


getVectors(board,startPointX,startPointY);

const endingPointX = endingPoint(startPointX, vectorXAdd);
const endingPointY = endingPoint(startPointY, vectorYAdd);
while (destinationPoint) {
	console.log(`############## Move number ${move} ################`)
	console.log(board);
	let nextStepX = endingPoint(currentPositionX, !vectorXAdd);
	let	nextStepY = endingPoint(currentPositionY, !vectorYAdd);
		if (nextStepX === endingPointX && nextStepY === endingPointY) {
			destinationPoint = false;
			console.log("Ball comes to their destination")
		} else if (board[nextStepY][nextStepX] === '0') {
			board[currentPositionY][currentPositionX] = '0';
			board[nextStepY][nextStepX] = '1';
			currentPositionX = nextStepX;
			currentPositionY = nextStepY;
		} else if (board[nextStepY][currentPositionX] === 'X' && board[currentPositionY][nextStepX] === 'X' || board[nextStepY][nextStepX] === 'X' && board[nextStepY][currentPositionX] === '0' && board[currentPositionY][nextStepX] === '0') {
			vectorXAdd = (vectorXAdd !== true);
			vectorYAdd = (vectorYAdd !== true);

		} else if (board[nextStepY][nextStepX] === 'Y') {
			board[currentPositionY][currentPositionX] = '0';
			board[nextStepY][nextStepX] = '0';
			let theOption = getRandomIntInclusive(1, 3);
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
			board[nextStepY][nextStepX] = '1';
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
			board[currentPositionY][nextStepX] = '1';
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
			board[nextStepY][currentPositionX] = '1';
			currentPositionX;
			currentPositionY = nextStepY;
		}
		move++
}
}
//
// const startingPointY = (board) => {
// 	let lengthOfY = board[1].length;
// 	let startingPointY = getRandomIntInclusive(1,lengthOfY-2);
// 	return startingPointY
// };
//
//
// const startingPointX = (board) => {
// 	let lengthOfX = board.length;
// 	let startingPointX = getRandomIntInclusive(1,lengthOfX-2);
// 	return startingPointX
// };
//
//
//
// const getStartingPoint = (board) => {
// 	let pointX = startingPointX(board);
// 	let pointY = startingPointY(board);
// 	let vectorXAdd;
// 	let vectorYAdd;
// 	let keepSearching = true
//
// 	let startingPoint = board[pointX][pointY];
//
// 	let newRandomStartingPoint = () => {
// 		let pointX = startingPointX(board);
// 		let pointY = startingPointY(board);
//
// 		while (startingPoint !== "0") {
// 			let newPointX = startingPointX(board);
// 			pointX = newPointX;
// 			let newPointY = startingPointY(board);
// 			pointY = newPointY;
// 			startingPoint = board[newPointX][newPointY];
//
// 		}
// 	};
//



bouncingBall(board)
