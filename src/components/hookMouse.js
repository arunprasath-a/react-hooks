import React, { useState,useEffect } from 'react';

const HookMouse = () => {

    const[x,setX] = useState(0)
    const[y,setY] = useState(0)


    useEffect(()=>{
         console.log("useeffect called")
        window.addEventListener("mousemove",logMousePosition)

        return ()=>{
            console.log("comp unmount")
            window.removeEventListener("mousemove",logMousePosition)
        }
    },[])

    const logMousePosition = (event)=>{
      
        setX(event.clientX)
        setY(event.clientY)
    }

    return ( 
        <React.Fragment>
            <h3>using hooks effect for mouse movement in function based component</h3>
            x - {x}
            <br></br>
            y - {y}
        </React.Fragment>
     );
}
 
export default HookMouse;