import React, { useEffect, useState } from 'react';
import "./RightSide.css";import Pagination from './Paginations';
import Product from './Product';import axios from 'axios';
import { Link } from 'react-router-dom';import { useAuth0 } from '@auth0/auth0-react';
    function  RightSidePanel (props){ 

        const [currentPage,setCurrentPage]=useState(1);
        const [postsperpage]=useState(3);

        const { user}=useAuth0();
        useEffect(()=>{
            getPosts();
        },[]);
        const [Posts,setPosts] = useState([]);
        const str =user.sub;        
        const slug = str.split('|').pop();
        const getPosts =()=>{
          axios 
          .get("http://localhost:8085/cartvs/"+slug)
          .then((res)=>{
          setPosts(res.data);
          console.log(Posts);    
        })
        .catch((err)=> console.error(err));
        
        };

        
        if(Posts.length==0)
        {
            return (
                <div className='baxk'>Cart is empty</div>
            );
        }
        else{
            const indexOfLastPost = currentPage * postsperpage;
        const indexOfFirstPost = indexOfLastPost-postsperpage;
        const currentPosts = Posts.slice(indexOfFirstPost,indexOfLastPost);
        const paginate=(pageNumber)=> setCurrentPage(pageNumber);
        return (
            
       
            <div className='RightSide_main'>
            {  
              currentPosts.map ( (Posts) =>(
                <Product definition={Posts} />
                
                ))
                
            } <Pagination postsPerPage={postsperpage} totalPosts={Posts.length} paginate={paginate}/>
            <h2>{localStorage.getItem("name")}</h2>
            </div>
        
        );
        }
    }
export default RightSidePanel;