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
        },[]);
        const [Posts,setPosts] = useState([]);
        let id =params.id;
        const getPosts =()=>{
          axios 
          .get("http://localhost:8081/books/"+id)
          .then((res)=>{
          setPosts(res.data);
          console.log(Posts);    
        })
        .catch((err)=> console.error(err));
        //
        
        //
        };
//
const history =useNavigate();
useEffect(() => {
    if(localStorage.getItem("user-info")){
        history("/display")
    }
},[])

   const str =user.sub;        
    const slug = str.split('|').pop();
   let userid=slug
async function login(event, data)
    {
        let bookname= data.bookname;
        let url= data.url;
          let author= data.author;
          let bookid= data.bookid;
          let price= data.price;
         let item={author,bookid,bookname,price,url,userid};
         alert("item added to cart");
         let result= fetch("http://localhost:8085/Carts",{
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



//


        return (
           <div>
               {
                 Posts.map ( (Posts) =>(
                     <div>
               <Grid container>
                  <Grid item xs={6}>
                      <item><img className="placeorder__image" src={Posts.url} height="280px" /></item>
                  </Grid>         
                  
                  <Grid item xs={3}>
                      <item>
                      <div className="textgap"> name:	 {Posts.bookname}</div>
                      <div className="textgap">prod:	 {Posts.author}</div>
                      <div className="textgap">Price:	<span className="pricetag">₹ {Posts.price}</span></div>
                            {/*<div className="textgap">FREE delivery: <strong>{productDetails.delivery}</strong></div>
                            <div className="textgap">EMI starts at ₹ {productDetails.emi}. No Cost EMI available</div>
                            <div style={{ color: "#007600", fontSize: "20px"}} className="textgap">{Posts.status}</div>
                            <div className="textgap">Sold by <strong>{productDetails.soldby}</strong> and Fulfilled by Amazon.</div>*/}
                      </item>
                  </Grid>
                
                  <Grid item xs={3}>
                      <item><Paper variant ="outlined" className='placeorder__order'>
                      <div>
                          <h1>click to buy </h1>
                            name: {id}<br></br>
                           Book price: ₹{Posts.price}</div><hr></hr>
                          {isAuthenticated && 
                          <Link to={`/` } >
                          <button onClick={(event) => login(event,Posts )}className=' placeorder__button addtocart'>AddtoCART</button>
                          </Link>
                           }
                          {isAuthenticated && 
                          <Link to={`/signin/`+Posts.bookid } >
                          <button className='placeorder__button addtobuy'>Buy</button>
                          </Link>  }
                          {!isAuthenticated && 
                            <h>please login to proceed</h>
                           }
                         
                          </Paper></item> 
                  </Grid>
               </Grid><hr></hr></div>))
           }
           </div>
        );
    }
export default PlaceOrder;