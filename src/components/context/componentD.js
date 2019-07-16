import React, { Component } from 'react';
import ComponentE from "../context/componentE";

class ComponentD extends Component {
    
    render() { 
        return ( 
            <React.Fragment>
                <div>component D</div>
                <ComponentE/>
            </React.Fragment>
         );
    }
}
 
export default ComponentD;