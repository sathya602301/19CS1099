import React, { useEffect, useState } from 'react';
import "./RightSide.css";import Pagination from './Paginations';
import Product from './Product';import axios from 'axios';
import { Link } from 'react-router-dom';
import { getPopoverUtilityClass } from '@mui/material';
    function  RightSidePanel (props){ 
        
        //const [listOfProduct,setListOfProducts] = useState([]);
        
    
       //
       localStorage.setItem("bools", false);
       localStorage.setItem("idss", 0);
       const [loading,setLoading]=useState(false);
       const [currentPage,setCurrentPage]=useState(1);
       const [postsperpage]=useState(3);
        
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
        let cheeks=localStorage.getItem("cheek")
    let sortedData=[];
        if(cheeks==="dsc"){
            sortedData = Posts.slice().sort((a, b) => b.price - a.price);
            console.log(Posts); }
            else if(cheeks==="asc")
            {
                sortedData = Posts.slice().sort((a, b) => a.price - b.price);
                console.log(Posts);
            }
            else{
            sortedData=Posts
            } 
            
        const array = []

        const indexOfLastPost = currentPage * postsperpage;
        const indexOfFirstPost = indexOfLastPost-postsperpage;
        const currentPosts = sortedData.slice(indexOfFirstPost,indexOfLastPost);
        const paginate=(pageNumber)=> setCurrentPage(pageNumber);
        function refreshPage() {
            window.location.reload(false);
          }
//

sortedData.filter(pl=>pl.brandname.includes(localStorage.getItem("name"))).map ( (Posts) =>(
  
      array.push(Posts)
    
    ))
  
//
        if(localStorage.getItem("name"))  {
            
        return (
            <div className='RightSide_main'>
            
            {  
                array .map ( (Posts) =>(
              <Link to={`/order/`+Posts.bookid } >
                <Product definition={Posts} />
            </Link>
            ))
            }
            <Pagination postsPerPage={postsperpage} totalPosts={array.length} paginate={paginate}/>
            <h2>{localStorage.getItem("name")}</h2>
            </div>
        );
        }
        else{

            return (
                <div className='RightSide_main'>
                
                {   
                   currentPosts.map ( (Posts) =>(
                        <Link to={`/order/`+Posts.bookid } >
                        <Product definition={Posts} />
                    </Link>
                    ))
                }
                <Pagination postsPerPage={postsperpage} totalPosts={Posts.length} paginate={paginate}/>
                <h2>{localStorage.getItem("name")}</h2>
                </div>
            );
        }
    }
export default RightSidePanel;