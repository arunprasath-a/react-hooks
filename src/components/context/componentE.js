import React, { Component } from 'react';
import { UserContext, ChannelContext } from "../context/componentC";

class ComponentE extends Component {

    render() {
        return (
            <React.Fragment>
                <div>component E</div>
                <UserContext.Consumer>
                    {/* {
                        user =>{
                            return <div>user context value from component c is {user}</div>
                        }
                    } */}

                    {
                        user => {
                            return (
                                <ChannelContext.Consumer>
                                    {
                                        channel => {
                                            return <div>user context value from component c is {user} and {channel}</div>
                                        }
                                    }
                                </ChannelContext.Consumer>
                            )
                        }
                    }

                </UserContext.Consumer>
            </React.Fragment>
        );
    }
}

export default ComponentE;