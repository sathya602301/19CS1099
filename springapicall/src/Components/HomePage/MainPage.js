import React, { Component } from 'react';
import "./MainPage.css";
import Slider from "../slider/Slider"
class MainPage extends Component {

    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        

        return (
         <div className='back'>
          <Slider/>
         </div>           
        );
    }
}
 
export default MainPage;