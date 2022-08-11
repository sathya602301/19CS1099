
import "./Placed.css";import axios from 'axios';import { useParams } from "react-router-dom";
import Grid from '@mui/material/Grid';import React,{  useEffect, useState }  from 'react';
import { Link } from 'react-router-dom';
    function  Placed (props){ 
        const params = useParams();

        console.log(params);
        useEffect(()=>{
            getPosts();
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
        
        };
      

        return (
           <div className="back">
               
               <div style={{fontSize:"24px", lineHeight:"32px", fontWeight: 500}}>orders</div>
               <hr></hr>
               
             <Grid container>
                  <Grid item xs={6}>
                      <item><img className='placeorder__image' src={Posts.url} height="280px"></img></item>
                  </Grid>     
                  <Grid item xs={3}>
                      <item>
                      <div className="textgap">{Posts.bookname}</div>
                        <div className="textgap">Price:	<span className="pricetag">₹ {Posts.price}</span></div>
                      <div className="textgap">Network Service Provider:	 {Posts.nsp}</div>
                      <div className="textgap">Brand: {Posts.brandname}</div>
                      <div className="textgap">Form factor:	 {Posts.form_factor}</div>
                      <div className="textgap">Memory Storage Capacity:	 {Posts.capacity}</div>
                        <div className="textgap">description:<br/>	 {Posts.descs}</div>
                        <div className="textgap">SUCCESSFULLY BOUGHT</div>
                          <Link to={'/signin/display'} >
                          <button className='placeorder__button buynow'>home</button>
                          </Link></item>
                  </Grid>
                  </Grid>
                <hr></hr>
           </div>
        );
    }
export default Placed;