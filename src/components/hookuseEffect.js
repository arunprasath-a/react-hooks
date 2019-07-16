import React, { useState,useEffect } from 'react';

const HookUseEffect = () => {

    const [count,setCount] = useState(0);

    const [name,setname] = useState("");

    useEffect(()=>{
        console.log(`use effect-updating document title`)
        document.title=`you clicked ${count} times`
        
    },[count])

    return ( 
        <React.Fragment>
            <h3>use effect example</h3>
            <input type="text" value={name} onChange={e=> setname(e.target.value)}></input>
            <button onClick={()=> setCount(count+1 )}>click{count} times</button>
            
        </React.Fragment>
     );
}
 
export default HookUseEffect;