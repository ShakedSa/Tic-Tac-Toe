import React, { useContext, useReducer } from 'react';
import reducer from './assests/reducer';
import { minimax, emptySpots, checkWin, winningCombinations, humanPlayer, aiPlayer } from './assests/minimax';
const AppContext = React.createContext();

const initialState = {
    players: '',
    turn: true,
    cells: []
}
export const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    // Single Player Logic: 

    let originBoard;
    // Sets of winning combinations

    function startGameSinglePlayer() {
        const bestMove = bestSpot();
        dispatch({ type: 'TURN', payload: { id: bestMove, player: aiPlayer, originBoard, checkTie, checkWin, gameOver } });
    }

    function startGame(participants) {
        dispatch({ type: 'START_GAME', payload: participants });
        console.log(`board: ${state.cells} players: ${state.players}`);
        document.querySelector('.endgame').style.display = 'none';
        originBoard = Array.from(Array(9).keys());
        for (let i = 0; i < state.cells.length; i++) {
            state.cells[i].innerText = '';
            state.cells[i].style.removeProperty('background-color'); //Removing background from winning / tie 
            state.cells[i].addEventListener('click', turnClick); //Adding a click event to select a spot
        }
        if (state.players === "1") {
            startGameSinglePlayer();
        }
    }

    // Onclick event for each spot in the game board.
    function turnClick(e) {
        if (typeof originBoard[e.target.id] === 'number') {
            if (state.players === "2") {
                // 2 Players 
                // const currentTurn = state.turn ? 'X' : 'O';
                dispatch({ type: 'TURN', payload: { id: e.target.id, originBoard, checkTie, checkWin, gameOver } })
            } else {
                // Single player and AI
                dispatch({ type: 'TURN', payload: { id: e.target.id, player: humanPlayer, originBoard, checkTie, checkWin, gameOver } });
                if (checkWin(originBoard, humanPlayer) === null && !checkTie()) {
                    const bestMove = bestSpot();
                    dispatch({ type: 'TURN', payload: { id: bestMove, player: aiPlayer, originBoard, checkTie, checkWin, gameOver } });
                }
            }
        }
    }

    function gameOver(gameWon) {
        for (let index of winningCombinations[gameWon.index]) {
            document.getElementById(index).style.backgroundColor = gameWon.player === humanPlayer ? 'blue' : 'red';
        }
        for (let i = 0; i < state.cells.length; i++) {
            state.cells[i].removeEventListener('click', turnClick);
        }
        if (state.players === '2') {
            declareWinner(gameWon.player === 'X' ? 'X Wins' : 'O Wins');
        } else {
            declareWinner(gameWon.player === humanPlayer ? 'You Win!' : "You Lose!");
        }
    }

    function checkTie() {
        if (emptySpots(originBoard).length === 0) {
            for (let i = 0; i < state.cells.length; i++) {
                state.cells[i].style.backgroundColor = "green";
                state.cells[i].removeEventListener('click', turnClick, false);
            }
            declareWinner('Tie Game!');
            return true;
        }
        return false;
    }

    function declareWinner(who) {
        document.querySelector('.endgame').style.display = 'block';
        document.querySelector('.endgame .text').innerText = who;
    }

    function bestSpot() {
        return minimax(originBoard, aiPlayer).index;
    }

    return <AppContext.Provider value={
        {
            startGame,
            ...state,
        }
    }>{children}</AppContext.Provider>
}

export const useGlobalContext = () => {
    return useContext(AppContext);
}
