import React, { Component } from 'react';
import "./RightSide.css";
import { Link } from 'react-router-dom';
    function  product (props){ 
        

        return (
            <div className='product'>
                <a>
                 <div className="product_image">
                 <Link to={`/Cartorder/`+props.definition.bookid+`/`+props.definition.ids } >  <img src={props.definition.url} height="280px" /> </Link>
                </div>
                <div className="product_name">
                {props.definition.bookname}
                </div>
                <div className="product_name">
                {props.definition.author}
                </div>
                <div className="product_price">
                  ₹{props.definition.price}
                </div>
                </a>
            </div>
        );
    }
export default product;