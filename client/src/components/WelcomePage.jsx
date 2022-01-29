import React from 'react';
import { Link } from 'react-router-dom'

class WelcomePage extends React.Component {
    render() {
        return (
            <div >
            <h1 >login / register page</h1>
            <p >join us now and don't waste time</p>
            <div >
                <Link to="/login">
                    <button >log in</button>
                </Link>
                <Link to="/register">
                    <button  id="btn2"><span>register </span></button>
                </Link>
            </div>
        

            </div>
        );
    }
}

export default WelcomePage;
