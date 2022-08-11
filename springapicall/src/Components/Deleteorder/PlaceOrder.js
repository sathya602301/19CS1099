import React,{ useContext, useEffect, useState }  from 'react';
import { useParams } from "react-router-dom";
import "./PlaceOrder.css";import {useNavigate } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';
import { Paper } from '@mui/material';import axios from 'axios';
import { CartContext } from '../CartContext';import { useAuth0 } from '@auth0/auth0-react';
    function  PlaceOrder (props){ 
        const params = useParams();
        const { user,isAuthenticated }=useAuth0();
        console.log(params);
        useEffect(()=>{
            getPosts();
            loaddata();
        },[]);
        const [Posts,setPosts] = useState([]);
        let id =params.id;
        const getPosts =()=>{
          axios 
          .get("http://localhost:8081/book/"+id)
          .then((res)=>{
          setPosts(res.data);
          console.log(Posts);    
        })
        .catch((err)=> console.error(err));
        //
        
        //
        };
//
let pid =params.ids;
const [Pots,setPots] = useState([]);

const loaddata =()=>{
  axios 
  .get("http://localhost:8082/login/"+pid)
  .then((res)=>{
  setPots(res.data); 
})
.catch((err)=> console.error(err));
};


  let bookname=Posts.bookname;
 let url=Posts.url;
   let author=Posts.author;
   let bookid=id;
   let price=Posts.price;
   const str =user.sub;        
    const slug = str.split('|').pop();
   let userid=slug

 
 
    const removeUser = async () => {
        let str='http://localhost:8082/login/'+pid
          await axios.delete(str)
          alert('order is cancelled');
          
      }

//
        return (
           <div className='back'>
               {
                
               <Grid container>
                  <Grid item xs={6}>
                      <item><img className="placeorder__image" src={Posts.url} height="280px" /></item>
                  </Grid>         
                  <Grid item xs={3}>
                      <item>
                      <h1><div className="textgap">name: {Posts.bookname}</div>
                      <div className="textgap">prod:	 {Posts.author}</div>
                      <div className="textgap">Price:	<span className="pricetag">₹ {Posts.price}</span></div>
                      <div className="textgap">name of receipt:	 {Pots.pname}</div>
                      <div className="textgap">address:	 {Pots.password}</div>
                      <div className="textgap">quantity:	 {Pots.quantity}</div>
                            {/*<div className="textgap">FREE delivery: <strong>{productDetails.delivery}</strong></div>
                            <div className="textgap">EMI starts at ₹ {productDetails.emi}. No Cost EMI available</div>
                            <div style={{ color: "#007600", fontSize: "20px"}} className="textgap">{Posts.status}</div>
                            <div className="textgap">Sold by <strong>{productDetails.soldby}</strong> and Fulfilled by Amazon.</div>*/}
                     </h1> </item>
                  </Grid>
                
                  <Grid item xs={3}>
                      <item><Paper variant ="outlined" className='placeorder__order'>
                      <div>
                          <h1>click to buy </h1>
                           Book name: {Posts.bookname}<br></br>
                           Book price: ₹{Posts.price}</div><hr></hr>
                          {isAuthenticated && 
                          <Link to={`/` } >
                          <button onClick={() => removeUser() }className=' placeorder__button addtocart'>cancel order</button>
                          </Link>
                           }
                          {!isAuthenticated && 
                            <h>please login to proceed</h>
                           }
                         
                          </Paper></item> 
                  </Grid>
               </Grid>
           }
           </div>
        );
    }
export default PlaceOrder;