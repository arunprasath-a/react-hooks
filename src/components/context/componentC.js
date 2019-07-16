import React, { Component } from 'react';
import ComponentD from "../context/componentD";


class ComponentC extends Component {


    render() {


        return (
            <React.Fragment>
                <div>component C</div>

                <UserContext.Provider value={"arun"}>
                    <ChannelContext.Provider value={"multple context"}>
                        <ComponentD/>
                    </ChannelContext.Provider>
                </UserContext.Provider>


            </React.Fragment>
        );
    }
}

export const UserContext = React.createContext();
export const ChannelContext = React.createContext();

export default ComponentC;