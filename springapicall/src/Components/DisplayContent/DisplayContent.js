import React, { Component } from 'react';
import LeftSidePanel from './LeftSide/LeftSidePanel';
import RightSidePanel from './RightSide/RightSidePanel';
class DisplayContent extends Component {

    constructor(props) {
        super(props);
        this.state = {  }
    }
 
    render() { 
        
        return (
            
            <div style={{ display: 'flex'}}>
                <div>
                    <LeftSidePanel />
              
                </div>
                <div>
                    <RightSidePanel />
                </div> 
            </div>
        );
    }
}
 
export default DisplayContent;