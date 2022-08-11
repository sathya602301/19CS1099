import React,{useState,useEffect} from 'react'
import "./Slider.scss"
//import { sliderData } from './slider-data'
import {AiOutlineArrowLeft,AiOutlineArrowRight } from "react-icons/ai"
import axios from 'axios';
const Slider = () => {
 
useEffect(()=>{
    getPosts();
},[]);
const [Posts,setPosts] = useState([]);
const getPosts =()=>{
  axios 
  .get("http://localhost:8087/ad")
  .then((res)=>{
  setPosts(res.data);
  console.log(Posts);    
})
.catch((err)=> console.error(err));
//

//
};
let sliderData=Posts.map ( (Posts) =>(Posts)) 
const[currentSlide,setCurrentSlide]=useState(0);
    const slideLength =sliderData.length;
    // slideLength=1 2 3 
   //currentSlide= 0 1 2
   const autoScroll =true;
   let slideInterval;
   let intervalTime= 5000;

    const nextSlide = () =>{
        setCurrentSlide(currentSlide === slideLength -1 ?
             0:currentSlide + 1)
    }
    const prevSlide = () =>{
        setCurrentSlide(currentSlide === 0 ?
            slideLength -1 :currentSlide - 1)
    };
    function auto()
    {
        slideInterval =setInterval(nextSlide,intervalTime)
    }
    useEffect(()=>{
        setCurrentSlide(0)
    },[])
    useEffect(()=>{
        if(autoScroll){
            auto()
        }
        return()=> clearInterval(slideInterval);
    },[currentSlide])
  return (
    <div className='slider'>
        <AiOutlineArrowLeft className="arrow prev" onClick={prevSlide}/>
        <AiOutlineArrowRight className="arrow next" onClick={nextSlide}/>
        {sliderData.map((slide,index)=>{
            return(
                <div className={index === currentSlide ?
                "slide current" : "slide"} keyy={index}>
                   {index === currentSlide &&(
                       <>
                      <img src={slide.url} alt="slide"/>
                      <div className='content'>
                        <h2>{slide.bookname}</h2>
                        <p>{slide.author}</p>
                      </div>
                      </>
                   )

                   }
                </div>
            )
        })   }


    </div>
  )
}

export default Slider