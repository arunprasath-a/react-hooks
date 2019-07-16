import React, { useState } from 'react';

const HookCounterTwo = () => {

    const initialCount=0;

    const[count,setCount] = useState(initialCount)

    // const incrementFive = ()=>{
    //     for(let i=0; i<=5; i++){
    //         setCount(count+1)
    //     }
    // }

    
    const incrementFive = ()=>{
        for(let i=0; i<5; i++){
            setCount(prevCount=>prevCount+1)
        }
    }

    return ( 
        <React.Fragment>
            <h3>use state with previous state</h3>
            count:{count}
            <button onClick={()=>setCount(prevCount=>prevCount+1)}>increment</button>
            <button onClick={()=>setCount(prevCount=>prevCount-1)}>decrement</button>
            <button onClick={()=>setCount(initialCount)}>reset</button>
            <button onClick={incrementFive}>increment 5</button>
        </React.Fragment>
     );
}
 
export default HookCounterTwo;