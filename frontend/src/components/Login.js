import React from 'react'
import GoogleLogin from 'react-google-login';
import {useHistory} from 'react-router-dom'

function Login() {
    const history = useHistory();
    const responseSuccessGoogle = (response) => {
        history.push('/PendingExportList');
    }
    const responseFailureGoogle = (response) => {
        console.log(response);
    }
    return (
        <>
            <div className="loginWrapper fadeInDown py-5">
                <div id="loginContent">
                    <div className="pt-3">
                        <input type="text" id="login" className="fadeIn second " name="login" placeholder="email" />
                        <input type="text" id="password" className="fadeIn third" name="login" placeholder="password" />
                        <input type="submit" className="fadeIn fourth" value="Log In" />
                        <div className="pb-3">
                            <GoogleLogin
                                clientId="690851189888-lujjrit9rnhe60iavkgjm9voe3deb4hc.apps.googleusercontent.com"
                                buttonText="Sign in with Google"
                                onSuccess={responseSuccessGoogle}
                                onFailure={responseFailureGoogle}
                                cookiePolicy={'single_host_origin'}
                            />
                        </div>
                        <div id="btn pb-3">
                            <a href="#">Forgot Password?</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login
