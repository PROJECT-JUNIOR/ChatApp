import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LogIn from './components/LogIn.jsx';
import SignUp from './components/SignUp.jsx';
import WelcomePage from './components/WelcomePage.jsx'
import Home from './components/home.jsx'
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    
    }
  }
   render () {
     console.log("")
    return ( 
    <Router>
            <div>
                <Routes>
                    <Route path="/" element= {<WelcomePage /> } />
                    <Route path="/register" element={ <SignUp /> } />
                    <Route path="/login" element={ <LogIn /> } />
                    <Route path="/home" element={ <Home /> } />

                </Routes>
            </div>
        </Router>
    )
  }
}
ReactDOM.render(<App />, document.getElementById('app'));