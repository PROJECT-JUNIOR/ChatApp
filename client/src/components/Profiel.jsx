import React, { Component } from 'react';
import { Link } from 'react-router-dom'
class Profiel extends Component {
    render() {
        return (
            <div className="profiel">
            <h1>Profiel</h1>  
            <footer className="footer">
               
                  <p><Link to="/">LogOut</Link>.</p>
            </footer>  
            </div>
        );
    }
}

export default Profiel;
