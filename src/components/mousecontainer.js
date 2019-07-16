import React, { useState } from 'react';
import HookMouse from "../components/hookMouse";

const MouseContainer = () => {


    const [display,setDisplay] = useState(true)


    return ( 
        <React.Fragment>
            <br></br>
            <button onClick={()=>setDisplay(!display)}>Toggle display</button>
            {display && <HookMouse/>}
        </React.Fragment>
     );
}
 
export default MouseContainer;