import React, { useReducer } from 'react';


const initialState = 0;
const reducer = (state, action) => {
    switch (action) {
        case "INCREMENT":
            return state + 1

        case "DECREMENT":
            return state - 1

        case "RESET":
            return initialState

        default:
            return state

    }
}

const CounterOne = () => {
    const [count, dispatch] = useReducer(reducer, initialState)
    return (
        <React.Fragment>
            <h1>useReducer with simple state and action</h1>
            <div>count : {count}</div>
            <button onClick={() => dispatch("INCREMENT")}>Increment</button>
            <button onClick={() => dispatch("DECREMENT")}>Decrement</button>
            <button onClick={() => dispatch("RESET")}>Reset</button>
        </React.Fragment>
    );
}

export default CounterOne;