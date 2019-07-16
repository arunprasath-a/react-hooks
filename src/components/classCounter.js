import React, { Component } from 'react';

class ClassCounter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            name: ""
        }
    }

    componentDidMount() {
        document.title = `clicked ${this.state.count} times`;
    }

    componentDidUpdate(prevProps, prevState) {

        
        if(prevState.count !== this.state.count){
            console.log("updating doc title")
            document.title = `clicked ${this.state.count} times`;
        }
       
    }

    inc = () => {
        this.setState({
            count: this.state.count + 1,
        })
    }

    render() {
        //  const {title}=this.props;
        return (
            <React.Fragment>
                {/* <h3>{this.props.title}</h3> */}
                <h3>class Component</h3>
                <button onClick={this.inc}>count {this.state.count}</button>
                <input type="text" value={this.state.name} onChange={e => this.setState({ name: e.target.value })}></input>
            </React.Fragment>
        );
    }
}

export default ClassCounter;