import React, { useState } from 'react';


const HookCounter = () => {

    const [count, setCount] = useState(0)

   
   
    return (
        
        <React.Fragment>
           
            <h3>functional component</h3>
            <button onClick={() => setCount(count + 1)}>count{count}</button>
        </React.Fragment>
    );
}
 
export default HookCounter;