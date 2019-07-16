import React, { useReducer } from 'react';


const initialState = {
    firstCounter: 0
};
const reducer = (state, action) => {
    switch (action.type) {
        case "INCREMENT":
            return {...state, firstCounter: state.firstCounter + action.payload }

        case "DECREMENT":
            return {...state, firstCounter: state.firstCounter - action.payload }

        case "RESET":
            return initialState

        default:
            return state

    }
}

const CounterTwo = () => {
    const [count, dispatch] = useReducer(reducer, initialState)
    return (
        <React.Fragment>
            <h1>useReducer with complex state and action</h1>
            <div>count : {count.firstCounter}</div>
            <button onClick={() => dispatch({ type: "INCREMENT", payload: 1 })}>Increment</button>
            <button onClick={() => dispatch({ type: "DECREMENT", payload: 1 })}>Decrement</button>
            <button onClick={() => dispatch({ type: "INCREMENT", payload: 5 })}>Increment5</button>
            <button onClick={() => dispatch({ type: "DECREMENT", payload: 5 })}>Decrement5</button>
            <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
        </React.Fragment>
    );
}

export default CounterTwo;