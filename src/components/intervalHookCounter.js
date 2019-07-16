import React, { useState,useEffect } from 'react';

const IntervalHookCounter = () => {

    const[count,setCount] = useState(0)

        const tick=()=>{
            setCount(prevcount =>prevcount+1)
        }

        

        useEffect(()=>{

            // dosomething = ()=>{
            //     console.log(someprop)
            // }
            // dosomething();

            const interval = setInterval(tick,1000)

            return()=>{
                clearInterval(interval);
            }
        },[])

    return ( 
        <React.Fragment>
            <h1>{count}</h1>
        </React.Fragment>
     );
}
 
export default IntervalHookCounter;