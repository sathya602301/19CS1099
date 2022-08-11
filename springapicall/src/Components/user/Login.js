import React,{useState, useEffect } from 'react';
import {useNavigate } from 'react-router-dom';import { useParams } from "react-router-dom";
import { withRouter } from "react-router-dom";import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';import axios from 'axios';
import "./Login.css"
function Login(props) {
    const { user,isAuthenticated}=useAuth0();
        const params = useParams();
        let bookid=params.id;
        const str =user.sub;        
        const slug = str.split('|').pop();
        let userid=slug
    const [pname,setuname]=useState("")  ;
    const [password,setpass]=useState("")  ;
    const [quantity,setQuantity]=useState("")  ;
   
   const history =useNavigate();
    useEffect(() => {
        if(localStorage.getItem("user-info")){
            history("/display")
        }
    },[])
    let bool=localStorage.getItem("bools");

    async function login()
    {
       // console.warn(pname,password,bookid,userid)
       if(bool=="true")
       {
          await axios.delete(`http://localhost:8085/cart/${localStorage.getItem("idss")}`)
           localStorage.setItem("bools", false);
           localStorage.setItem("idss", 0);
       }
        let item={pname,password,bookid,userid,quantity};
        let result= fetch("http://localhost:8082/logins",{
          method:"POST",
          headers:{
              "Content-Type":"application/json",
              "Accept":"application/json"
          },
          body:JSON.stringify(item)

        });
        result=await result.json();
        localStorage.setItem("user-info",JSON.stringify(result))

        history("/display")
    }

    return (  isAuthenticated &&(
        <div>
            <h5> ENTER DETAILS PAGE {bool}</h5>
            <div className='col-sm-6 offset-sm-3'>
                <input type="text" className ="form-field" placeholder="pname" onChange={(e)=>setuname(e.target.value)} />
                <br/>
                <input type="number" placeholder="quantity" onChange={(e)=>setQuantity(e.target.value)} className="form-field" step="1"/>
                <br/>
                <textarea  placeholder="address" onChange={(e)=>setpass(e.target.value)} className="form-field"/>
                <br/>
                <Link to={`/orders/`+bookid} >
                <button onClick={login} className='buttons buttons2'>proceed to delivery</button></Link>
            </div>
        </div>)
    );
   
}

export default Login;