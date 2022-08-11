import React,{ useContext, useEffect, useState }  from 'react';
import { useParams } from "react-router-dom";import axios from 'axios';
import "./NavBar.css" ;
import { Link } from 'react-router-dom';
import Searchbar from '../searchbar/SearchBar';

import LoginButton from '../LoginButton'
import LogoutButton from '../LogoutButton';
import Profile from '../Profile';
import { useAuth0 } from '@auth0/auth0-react';
function NavBar (props) {
  //  const [uname,setuname] = useState("");
  const { isAuthenticated }=useAuth0();
    useEffect(()=>{
        getPosts();
    },[]);
    const [Posts,setPosts] = useState([]);
    
    const getPosts =()=>{
      axios 
      .get("http://localhost:8081/book")
      .then((res)=>{
      setPosts(res.data);
      console.log(Posts);    
    })
    .catch((err)=> console.error(err));
    
    };
    //
        return (
           <div className="navbar_component">
             <Link to={'/'} >
               <div className='navbar_logo'>
               </div></Link>
               
               <div className='navbar_searchcomponent'>
               {isAuthenticated && <Searchbar placeholder="enter Model name" data={Posts}/>}
               </div>
                 <div class="dropdown">
                 {isAuthenticated && <button class="dropbtn">MENU</button>}
                  <div class="dropdown-content">
                  {isAuthenticated &&<Link to={'/display'} ><a >PHONE</a></Link>}
                  {isAuthenticated &&<Link to={'/cart'} ><a >cart</a></Link>}
                  {isAuthenticated && <Link to={'/Cartorders'} ><a >orders</a></Link>}
                  {isAuthenticated && <Link to={'/prof'} ><a >profile</a></Link>}
              </div>
        </div>
              
               {isAuthenticated &&
               <Link to={'/cart'} >
               <div className='navbar_logos'></div>
               </Link>}
               
               {isAuthenticated &&
              <div style={{fontSize:"24px", lineHeight:"32px", fontWeight: 500,color: "#92a8d1"}}>CART</div>}
               
               <div className='cart_item'> <Profile/><LoginButton/>
                <LogoutButton/> 
                </div>
                
           </div>
           
        );
   
}
 
export default NavBar;