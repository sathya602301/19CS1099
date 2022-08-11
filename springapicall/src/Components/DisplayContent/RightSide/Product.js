import React, { Component } from 'react';
import "./RightSide.css";

    function  product (props){ 
        

        return (
            <div className='product'>
                <a>
                 <div className="product_image">
                    <img src={props.definition.url} height="280px" />
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