import React from 'react';
import { GoogleLogin } from 'react-google-login';
import UserService from '../services/authService';

function Login({setUser}) {

  const responseGoogle = (response) => {
    UserService.login(response).then((res)=>{
      const userres=UserService.getUser()
      setUser(userres)
    }).catch(err=>console.log(err))
   
  }

  return (
  <div>
      <div >
        {/* <img src="" alt="google-login"/> */}
        <h2>Login Template</h2>
        <GoogleLogin
            clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
            // render={renderProps => (
            //   <button onClick={renderProps.onClick} disabled={renderProps.disabled}>This is my custom Google button</button>
            // )}
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={'single_host_origin'}
            buttonText="Login"
        />
      </div>
  </div>
  );
}

export default Login;
