import React from 'react'
import Board from './Board'
import { Link } from 'react-router-dom';
const TwoPlayers = () => {
    return (
        <div className="home-container">
            <Board participants='2' />
            <Link to="/" className="btn">
                return to selecting screen
            </Link>
        </div>
    )
}

export default TwoPlayers
