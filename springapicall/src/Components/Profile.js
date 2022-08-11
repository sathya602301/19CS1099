import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { Link } from 'react-router-dom';

const Profile = () => {
    const { user,isAuthenticated }=useAuth0();
  return (
      isAuthenticated &&(
    <div>
        {JSON.stringify(user.name,null,2)}
    </div>
      )
  )
}

export default Profile