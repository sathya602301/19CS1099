import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import './Lbutton.css';
const LogoutButton = () => {
    const {logout,isAuthenticated} =useAuth0();
  return (
    isAuthenticated &&(
    <button onClick={() => logout()} class="button button2">
        Logout</button>
  )
  )
}

export default LogoutButton