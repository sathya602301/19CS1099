import React from 'react'
import "./Profile.css"
import { useAuth0, User } from '@auth0/auth0-react';
function Profile() {
    const { user }=useAuth0();
    let url =user.picture;
    console.log(user);
  return (
<div className='back'>
<div class="container">
	<div class="row">
		<div class="col-md-4">
    <div class="profile-card-2">
        <img src="https://ik.imagekit.io/amazon12349/amazon-image/Screenshot_2022-06-13_094142_0dvbs6Cn1.png?ik-sdk-version=javascript-1.4.3&updatedAt=1655093511676" class="img img-responsive"></img>
        <div class="profile-name">{user.name}</div>
        <div class="profile-username">{user.email}</div>

    </div> 
   
    <div class="profile-card-2">
        <div className='kap'>
        <img src="" class="img img-responsive"></img><br/><br/><br/>
    
        EMAIL: <div >{user.email}</div>
       NICKNAME:<div>{user.nickname}</div> 
       <br/><br/><br/>
        </div>
    </div>
    </div> 
    </div> 
</div>
<div>
</div>
</div>



  )
}

export default Profile