import React, { useState } from 'react';


const HookwithObject = () => {
    const [name,setName]=useState({firstname:"",lastname:""})

    return (
        <React.Fragment>
            <form>
                <input type="text" value={name.firstname} onChange={event => setName({...name, firstname:event.target.value})}/>
                <input type="text" value={name.lastname} onChange={event => setName({...name, lastname:event.target.value})}/>
                <h2>first name is - {name.firstname}</h2>
                <h2>last name is - {name.lastname}</h2>
                <h2>{JSON.stringify(name)}</h2>
            </form>
        </React.Fragment>
    );
}

export default HookwithObject;