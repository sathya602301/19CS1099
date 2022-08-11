import React, { useEffect, useState } from 'react';
import "./RightSide.css";
import { Link } from 'react-router-dom';import axios from 'axios';
    function  product (props){  
       let k=props.lip
    
        return (
            <div className='product'>
                <a>
                 <div className="product_image">
               <Link to={`/Deleteorder/`+props.definition.bookid +'/'+k}>   <img src={props.definition.url} height="280px" /> </Link>
                </div>
                <div className="product_name">
                {props.definition.bookname}
                </div>
                <div className="product_name">
                {props.definition.author}
                </div>
                <div className="product_price">
                {props.definition.price}
                </div>
                </a>
            </div>
        );
    }
export default product;