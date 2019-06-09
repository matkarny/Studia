module.exports = getVectors = (board, pointX, pointY) => {
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
