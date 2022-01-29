import React  from 'react';
import { Link } from 'react-router-dom'
 class SignUp extends React.Component {
  render() {
    return <div>

       <div>
            <h2>Join us</h2>
            <h5>Create your personal account</h5>
            <form action="/login">
                <p>
                    <label>Username</label><br/>
                    <input type="text" name="first_name" required />
                </p>
                <p>
                    <label>Email address</label><br/>
                    <input type="email" name="email" required />
                </p>
                <p>
                    <label>Password</label><br/>
                    <input type="password" name="password" requiredc />
                </p>
                <p>
                </p>
                <p>
            <Link to="/login">
                    <button id="btn" type="submit">Register</button>
                    </Link>
                </p>
            </form>
            <footer>
                <p><Link to="/">Back to Homepage</Link>.</p>
            </footer>
        </div>
    </div>;
  }
}
export default SignUp;