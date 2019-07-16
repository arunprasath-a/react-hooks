import React from 'react';
import UseContextComponentD from "../context_hooks/HookscomponentD";



const UseContextComponentC = () => {
    return ( 
        <React.Fragment>
                <div>UseContext component C</div>

                <UserContext.Provider value={"arun"}>
                    <ChannelContext.Provider value={"multple context"}>
                        <UseContextComponentD/>
                    </ChannelContext.Provider>
                </UserContext.Provider>


            </React.Fragment>
     );
}
 


export const UserContext = React.createContext();
export const ChannelContext = React.createContext();
export default UseContextComponentC;