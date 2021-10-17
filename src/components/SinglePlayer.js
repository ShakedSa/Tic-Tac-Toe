import React from 'react';
import Board from './Board';
import { Link } from 'react-router-dom';
const SinglePlayer = () => {
    return (
        <div className="home-container">
            <Board participants='1' />
            <Link to="/" className="btn">
                return to selecting screen
            </Link>
        </div>
    );
}

export default SinglePlayer;
