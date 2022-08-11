import React,{ useContext, useEffect, useState }  from 'react';
import { useParams } from "react-router-dom";
import "./PlaceOrder.css";
import Grid from '@mui/material/Grid';import {useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';import Comment from './comment';
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
        const [Posts,setPosts] = useState([]);const [Poks,setPoks] = useState("false");
        const [review,setReview] = useState([]);
        const [star,setStar] = useState([]);
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
const historys =useNavigate();
useEffect(() => {
    if(localStorage.getItem("user-info")){
        history("/display")
    }
},[])
  let bookname=Posts.bookname;
 let url=Posts.url;
   let author=Posts.author;
   let bookid=id;
   let price=Posts.price;
   const str =user.sub;  
   let named =user.name;      
    const slug = str.split('|').pop();
   let userid=slug
async function login()
    {
         let item={author,bookid,bookname,price,url,userid};
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

    const history =useNavigate();
    useEffect(() => {
        if(localStorage.getItem("user-info")){
            history("/display")
        }
    },[])

    async function revi()
    {
        let item={review,star,userid,named,bookid};
        let result= fetch("http://localhost:8089/review",{
          method:"POST",
          headers:{
              "Content-Type":"application/json",
              "Accept":"application/json"
          },
          body:JSON.stringify(item)

        });
        result=await result.json();
        localStorage.setItem("user-info",JSON.stringify(result));
      
        history("/display")
    }


//
const [Pokts,setPokts] = useState([]);

        const loaddata =()=>{
          axios 
          .get("http://localhost:8089/review/"+id)
          .then((res)=>{
          setPokts(res.data);
          console.log(Posts);    
        })
        .catch((err)=> console.error(err));
        if(Poks == "false")
        {
            setPoks("true")
        }
        else if(Poks == "true")
        {
            setPoks("false")
        }
        };

        return (
           <div >
               {
                
               <Grid container>
                  <Grid item xs={6}>
                      <item><img className="placeorder__image" src={Posts.url} height="280px" /></item>
                  </Grid>         
                  <Grid item xs={3}>
                      <item>
                      <div className="textgap">name:	 {Posts.bookname}</div>
                      <div className="textgap">prod:	 {Posts.author}</div>
                      <div className="textgap">Price:	<span className="pricetag">₹ {Posts.price}</span></div>
                      <hr></hr>
                      <div className="textgap">Network Service Provider:	 {Posts.nsp}</div>
                      <div className="textgap">Brand: {Posts.brandname}</div>
                      <div className="textgap">Form factor:	 {Posts.form_factor}</div>
                      <div className="textgap">Memory Storage Capacity:	 {Posts.capacity}</div>
                      <div className="textgap">description:	<br></br> {Posts.descs}</div>
                            {/*<div className="textgap">FREE delivery: <strong>{productDetails.delivery}</strong></div>
                            <div className="textgap">EMI starts at ₹ {productDetails.emi}. No Cost EMI available</div>
                            <div style={{ color: "#007600", fontSize: "20px"}} className="textgap">{Posts.status}</div>
                            <div className="textgap">Sold by <strong>{productDetails.soldby}</strong> and Fulfilled by Amazon.</div>*/}
                       <hr></hr>
                       <div className="textgap">your reivew:</div> 
                       <div className="textgap">star rating:</div>  
                       <div class="star-rating">
      <input type="radio" name="stars" id="star-a" value="5"  onClick={(e)=>setStar(e.target.value)}/>
      <label for="star-a"></label>

      <input type="radio" name="stars" id="star-b" value="4" onClick={(e)=>setStar(e.target.value)}/>
      <label for="star-b"></label>
  
      <input type="radio" name="stars" id="star-c" value="3" onClick={(e)=>setStar(e.target.value)}/>
      <label for="star-c"></label>
  
      <input type="radio" name="stars" id="star-d" value="2" onClick={(e)=>setStar(e.target.value)}/>
      <label for="star-d"></label>
  
      <input type="radio" name="stars" id="star-e" value="1" onClick={(e)=>setStar(e.target.value)}/>
      <label for="star-e"></label>
</div>
<textarea className='textareas' onChange={(e)=>setReview(e.target.value)}>ur review</textarea>
<button onClick={revi} className='buttons buttons2'>review</button>
<button onClick={() => loaddata () } className='buttons buttons2'>comment</button>
<div className='productss'>{Poks==="false" ? (
        <></>
      ) :( Pokts .map ( (Posts) =>(<Comment  definition={Posts} />)))}</div>
                       </item>
                  </Grid>
                
                  <Grid item xs={3}>
                      <item><Paper variant ="outlined" className='placeorder__order'>
                      <div>
                          <h1>click to buy </h1>
                           Book name: {Posts.bookname}<br></br>
                           Book price: ₹{Posts.price}</div><hr></hr>
                          {isAuthenticated && 
                          <Link to={`/` } >
                          <button onClick={login} className=' placeorder__button addtocart'>AddtoCART</button>
                          </Link>
                           }
                          {isAuthenticated && 
                          <Link to={`/signin/`+id } >
                          <button className='placeorder__button addtobuy'>Buy</button>
                          </Link>  }
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