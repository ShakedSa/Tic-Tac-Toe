import React from 'react';
import { Link } from 'react-router-dom';
const Error = () => {
    return (
        <div className="home-container">
            <div className="home-title">
                Page not found!
            </div>
            <Link to="/" className="btn">
                return to selecting screen
            </Link>
        </div>
    )
}

export default Error
