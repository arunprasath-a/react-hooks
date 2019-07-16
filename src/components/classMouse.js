import React, { Component } from 'react';


class ClassMouse extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            x:0,
            y:0
         }
    }

    logmouseposition = event =>{
        this.setState({
            x:event.clientX,
            y:event.clientY
        })
    }

    componentDidMount() {
        window.addEventListener("mousemove", this.logmouseposition)    
    }

    render() { 
        return ( 
            <React.Fragment>
                <h3>class based mouse position</h3>
                x - {this.state.x}
                <br></br>
                y - {this.state.y}
            </React.Fragment>
         );
    }
}
 
export default ClassMouse;