import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import './Lbutton.css';
const LoginButton = () => {
    const {loginWithRedirect,isAuthenticated } =useAuth0();
  return (
      !isAuthenticated &&(
    <button onClick={() => loginWithRedirect()} class="button button2">
        LoginButton/Register</button>
  )
  )
}

export default LoginButton