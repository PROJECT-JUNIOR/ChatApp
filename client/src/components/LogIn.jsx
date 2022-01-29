import React from 'react';
import { Link } from 'react-router-dom';
class LogIn extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            data:[],


        }    }
onclick(){
this.state.data.push(document.getElementById("first_name").value,document.getElementById("password").value);
console.log(this.state.data)
}
  render() {

    return <div>

      <div>
            <h2>Sign in to us</h2>
            <form action="/home">
                <div  >
                    <label>Username or email address</label><br/>
                    <input type="text" name="first_name" id="first_name" required />
                </div>
                <div>
                    <label>Password</label>
                    <Link to="/forget-password"><label >Forget password?</label></Link>
                    <br/>
                    <input type="password" name="password" id="password" required />
                </div>
                <div> 
                    <Link to="/home">
                    <button id="btn" type="submit" onClick={this.onclick.bind(this)}>Login</button>
                    </Link>
                </div>
            </form>
            <footer>
                <p>First time? <Link to="/register">Create an account</Link>.</p>
                <p><Link to="/home">Back to Homepage</Link>.</p>
            </footer>
        </div>
    


    </div>;
  }
}
export default LogIn;
