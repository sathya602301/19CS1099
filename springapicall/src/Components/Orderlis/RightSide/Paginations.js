import React, {  useState } from 'react';
import Pagination from '@mui/material/Pagination';
import "./RightSide.css";
const Paginations = ({postsPerPage,totalPosts,paginate}) => {
 // const [Page,setPage]=useState("");
 let page =0;
   for(let i =1; i<=Math.ceil(totalPosts/postsPerPage);i++)
  {
    page=i;
  }
 // const [page, setPage] = React.useState(1);
  const handleChange = (event, value) => {
    paginate(value);
  };
    return (
   <div className='bottomright'>
      <h1><Pagination count={page} showFirstButton showLastButton onChange={handleChange} /></h1>
   </div>
  )
}
//
export default Paginations