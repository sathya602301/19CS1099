import React, { useEffect, useState } from 'react';
import "./RightSide.css";import Pagination from './Paginations';
import Product from './Product';import axios from 'axios';
import { Link } from 'react-router-dom';import { useAuth0 } from '@auth0/auth0-react';
    function  RightSidePanel (props){ 
        const { user}=useAuth0();
        const [currentPage,setCurrentPage]=useState(1);
        const [postsperpage]=useState(3);
        useEffect(()=>{
            getPosts();
            loadData();
        },[]);
        const [Posts,setPosts] = useState([]);
        const str =user.sub;        
        const slug = str.split('|').pop();
        const getPosts =()=>{
          axios 
          .get('http://localhost:8082/logins/'+slug)
          .then((res)=>{
          setPosts(res.data);
          console.log(Posts);    
        })
        .catch((err)=> console.error(err));
        
        };
        const [Pids,setPids] = useState([]);

        const loadData =()=>{
          axios 
          .get("http://localhost:8081/book")
          .then((res)=>{
          setPids(res.data);  
        })
        .catch((err)=> console.error(err));
        
        };
        let array=Pids.map ( (Posts) =>(
            Posts
            ))
       let arrayls=  Posts.map ( (Posts) =>(
        Posts
        ))
        let ar=[],kl=[]
        let k=0
        for (let i = 0; i < arrayls.length; i++) {
            for (let j = 0; j < array.length; j++) {
                     if(array[j].bookid==arrayls[i].bookid)
                     {
                          ar[k]=array[j]
                          kl[k]=arrayls[i]
                          k++
                     }
            } 
        }
        const indexOfLastPost = currentPage * postsperpage;
        const indexOfFirstPost = indexOfLastPost-postsperpage;
        const currentPosts = ar.slice(indexOfFirstPost,indexOfLastPost);
        const paginate=(pageNumber)=> setCurrentPage(pageNumber);
//<Product definition={ar} />
        return (
            <div className='RightSide_main'>
            {
                currentPosts.map ( (Posts,index) =>(
                    <Product definition={Posts} lip={kl[index].pid} />
                    ))
                    
            }<Pagination postsPerPage={postsperpage} totalPosts={ar.length} paginate={paginate}/>
            </div>
        );
    }
export default RightSidePanel;