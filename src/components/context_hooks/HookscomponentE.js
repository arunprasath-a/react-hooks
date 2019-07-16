import React, { useContext } from 'react';
import { UserContext, ChannelContext } from "../context_hooks/HookscomponentC";




const UseContextComponentE = () => {

    const user = useContext(UserContext)
    const channel = useContext(ChannelContext)

    return (
        <React.Fragment>
            <div>UseContext component E</div>
            {user} - {channel}

        </React.Fragment>
    );
}

export default UseContextComponentE;