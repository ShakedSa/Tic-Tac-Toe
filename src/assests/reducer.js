const reducer = (state, action) => {
    switch (action.type) {
        case 'START_GAME':
            // Getting the board, and setting the state.
            const cells = document.querySelectorAll('.cell');
            return { ...state, players: action.payload, cells, turn: true };
        case 'TURN':
            const { id, player, originBoard, checkTie, checkWin, gameOver } = action.payload;
            let newPlayer = player;
            if (newPlayer === undefined) {
                newPlayer = state.turn ? 'X' : 'O';
            }
            originBoard[id] = newPlayer;
            document.getElementById(id).innerText = newPlayer;
            let gameWon = checkWin(originBoard, newPlayer);
            if (gameWon) {
                gameOver(gameWon);
            } else {
                checkTie();
            }
            return { ...state, turn: !state.turn };
    }
    return state;
}

export default reducer;

