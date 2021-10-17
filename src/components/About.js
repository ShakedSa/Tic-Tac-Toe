import React from 'react';
import { Link } from 'react-router-dom';
const About = () => {
    return (
        <div className="home-container">
            <div className="home-title">
                About The Game
            </div>
            <p>
                Tic Tac Toe game implemented with minimax algorithem.<br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;How to play:<br />
                At the beginning press the 'Start A New Game'
                button at the top of the board.<br />
                For single player: wait for the computer to make
                its first move.
            </p>
            <Link to="/" className="btn">
                return to selecting screen
            </Link>
        </div>
    )
}

export default About
