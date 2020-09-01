import React, { useState } from 'react';
import GoogleLogin from 'react-google-login';
import './login.css';
import '../../helper/helper.css';

import { Redirect } from 'react-router';


const Login = () => {

    const [redirect, setRedirect] = useState(false);

    const responseGoogle = (response) => {
        console.log(response.profileObj)
        let userDetails = {
            name: response.profileObj.name,
            email: response.profileObj.email,
            profileImg: response.profileObj.imageUrl
        }
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(userDetails)
        };
        fetch('http://localhost:8000/loginUser', requestOptions)
            .then(response => response.json())
            .then(data => localStorage.setItem('token',JSON.stringify(data)));

        setRedirect(true)
    }

    return (
        <div className="Login background-image-config">
            <div className="text-box-config">
                <h2>Hey you . . .</h2>   
                <h3>SignIn into your Account </h3> 
            </div>
            <GoogleLogin className="google-signin"
                clientId="340369378191-2bc2boeiir8vbigusakimm056naedbnd.apps.googleusercontent.com"
                buttonText="SignIn with Google"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={'single_host_origin'}
            />
            {
                redirect &&  <Redirect to="/shop-now" />
            }
        </div>
    )
}

export default Login;