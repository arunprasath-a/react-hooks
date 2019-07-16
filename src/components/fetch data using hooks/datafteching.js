import React, { useState,useEffect } from 'react';
import axios from "axios";

const HookDataFetching = () => {

    const[post,setpost] =useState({});
    const[id,setId] = useState(1);
    const[idFromButtonClick,setidFromButtonClick] = useState(1);

    const handleClick =() =>{
        setidFromButtonClick(id)
    }

    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
            .then(response =>{
                console.log(response)
                setpost(response.data)
            })
            .catch(error => {
                console.log(error)
            })
    },[idFromButtonClick])

    return ( 
        <React.Fragment>
            <h1>data fetching using hooks</h1>
            <input type="text" value={id} onChange={event =>setId(event.target.value)}></input>
            <button type="button" onClick={handleClick}>fetch post</button>
            <div>{post.title}</div>

            {/* this will be used for a list rendering */}
            {/* <ul>
                {posts.map(post => <li key={post.id}>{post.title}</li>)}
            </ul> */}
        </React.Fragment>
     );
}
 
export default HookDataFetching;