import React from 'react'
import { Link } from 'react-router-dom';
const Home = () => {
    return (
        <div className="home-container">
            <div className="home-title">
                Choose an option
            </div>
            <Link to="/single-player" className="btn">
                Single Player
            </Link>
            <Link to="two-players" className="btn">
                Two Players
            </Link>
            <Link to="/about" className="btn">
                About The Game
            </Link>
        </div>
    )
}

export default Home
