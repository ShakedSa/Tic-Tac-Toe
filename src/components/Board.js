import React, { useState, useEffect } from 'react'
import { useGlobalContext } from '../context';

const Board = ({ participants }) => {
    const { turn, startGame } = useGlobalContext();
    const [times, setTimes] = useState(0);
    useEffect(() => {
        startGame(participants);
    }, []);
    return (
        <div className="container">
            <button className="btn" onClick={() => {
                startGame(participants);
                setTimes(times + 1);
            }}>Start A New Game{times === 0 && <span>(first time click here)</span>}</button>
            <div className="title">
                {participants === "2" ? '2 Players' : 'Player vs Computer'}
                {participants === "2" && <span className="turn">
                    {turn ? 'X turn' : 'O turn'}
                </span>}
            </div>
            <table>
                <thead>
                    <tr>
                        <td className="cell" id="0"></td>
                        <td className="cell" id="1"></td>
                        <td className="cell" id="2"></td>
                    </tr>
                    <tr>
                        <td className="cell" id="3"></td>
                        <td className="cell" id="4"></td>
                        <td className="cell" id="5"></td>
                    </tr>
                    <tr>
                        <td className="cell" id="6"></td>
                        <td className="cell" id="7"></td>
                        <td className="cell" id="8"></td>
                    </tr>
                </thead>
            </table>
            <div className="endgame">
                <div className="text"></div>
            </div>
        </div>
    )
}

export default Board
