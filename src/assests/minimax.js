const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
const humanPlayer = 'O';
const aiPlayer = 'X';
function minimax(newBoard, player) {
    let availableSpots = emptySpots(newBoard);
    // Checking if the game is over and scoring accordingly.
    if (checkWin(newBoard, player)) {
        return { score: -10 };
    } else {
        if (checkWin(newBoard, aiPlayer)) {
            return { score: 10 };
        } else {
            if (availableSpots.length === 0) {
                return { score: 0 };
            }
        }
    }
    let moves = [];
    for (let i = 0; i < availableSpots.length; i++) {
        // Searching for the next empty spot to calculate the score of the spot.
        let move = {};
        move.index = newBoard[availableSpots[i]];
        newBoard[availableSpots[i]] = player;
        // Recursively calling the minimax function with the new board and the next player's turn.
        if (player === aiPlayer) {
            let result = minimax(newBoard, humanPlayer);
            move.score = result.score;
        } else {
            let result = minimax(newBoard, aiPlayer);
            move.score = result.score;
        }
        // Reseting the board.
        newBoard[availableSpots[i]] = move.index;
        moves.push(move);
    }
    // Finding the best move based on the scores.
    let bestMove;
    if (player === aiPlayer) {
        let bestScore = Number.NEGATIVE_INFINITY;
        for (let i = 0; i < moves.length; i++) {
            if (moves[i].score > bestScore) {
                bestScore = moves[i].score;
                bestMove = i;
            }
        }
    } else {
        let bestScore = Number.POSITIVE_INFINITY;
        for (let i = 0; i < moves.length; i++) {
            if (moves[i].score < bestScore) {
                bestScore = moves[i].score;
                bestMove = i;
            }
        }
    }
    return moves[bestMove];
}

function emptySpots(board) {
    // Searching for empty spots in the board, returning new array of empty spots.
    return board.filter(spot => typeof spot === 'number');
}

function checkWin(board, player) {
    // Finding any index that the player 'player' played in
    const plays = board.reduce((a, e, i) => (e === player) ? a.concat(i) : a, []);
    let gameWon = null;
    for (let [index, win] of winningCombinations.entries()) {
        // Has the player played in all the spot of a winning combo.
        if (win.every(elem => plays.indexOf(elem) > -1)) {
            gameWon = { index, player };
            break;
        }
    }
    return gameWon;
}

export { winningCombinations, humanPlayer, aiPlayer, minimax, emptySpots, checkWin };