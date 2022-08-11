import React, { Component } from 'react';
import Rating from '@mui/material/Rating';import Typography from '@mui/material/Typography';
import "./PlaceOrder.css";
    function  comment (props){ 
        

        return (
            
            <div className='products'>
                
                <Typography component="legend"> {props.definition.named}:   {props.definition.review}</Typography>   <br/>
               <Typography component="legend">star</Typography><Rating name="read-only" value={props.definition.star} readOnly />

            </div>
            
        );
    }
export default comment;