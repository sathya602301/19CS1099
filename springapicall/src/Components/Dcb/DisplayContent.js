import React, { Component } from 'react';
import RightSidePanel from './RightSide/RightSidePanel';
import "./RightSide/RightSide.css"
class DisplayContent extends Component {

    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        

        return (
            
              
                    <RightSidePanel />
      
            
        );
    }
}
 
export default DisplayContent;