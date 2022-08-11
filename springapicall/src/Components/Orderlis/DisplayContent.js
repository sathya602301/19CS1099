import React, { Component } from 'react';
import RightSidePanel from './RightSide/RightSidePanel';
class DisplayContent extends Component {

    constructor(props) {
        super(props);
        this.state = {  }
    }
    /*
       */
    render() { 
        

        return (
            
                <div>
                    <RightSidePanel />
                </div> 
            
        );
    }
}
 
export default DisplayContent;