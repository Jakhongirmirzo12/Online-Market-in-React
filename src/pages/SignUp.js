import React from 'react';
import './SignUp.css';
import { Link } from 'react-router-dom';


class SignUp extends React.Component {
    render(){
        return(
            <div>
                <div className="SignUp">
                    <h2 className="s">Login</h2>
                    <div className="username">
                        <h2 className="User">Username</h2>
                    <input type="text" className="Username" name="username" />
                    </div>
                    <div className="">
                        <h2 className="Pass">Password</h2>
                        <div className="password"></div>
                        <input type="password" className="Password" name="password"  />
                    </div>
                    
                    <div className="">
                    <button className="but">Login</button>
                    <Link to="./Register">
                    <span className="reg">Register</span></Link>
                    </div>
                    </div>
                </div>
        );
    }
}
 export default SignUp;