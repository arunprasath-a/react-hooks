import React from 'react';
import ClassCounter from "../src/components/classCounter";
import HookCounter from "../src/components/hookCounter";
import HookCounterTwo from "../src/components/hookCounter2";
import HookwithObject from "../src/components/hookwithobject";
import HookwithArray from "../src/components/hookwitharray";
import HookUseEffect from "../src/components/hookuseEffect";
import ClassMouse from "../src/components/classMouse";
//import HookMouse from "../src/components/hookMouse";
import MouseContainer from "../src/components/mousecontainer";
import IntervalClassCounter from "../src/components/intervalClassCounter";
import IntervalHookCounter from "../src/components/intervalHookCounter";
import HookDataFetching from "../src/components/fetch data using hooks/datafteching";
import ComponentC from "../src/components/context/componentC";
import UseContextComponentC from "./components/context_hooks/HookscomponentC";

import CounterOne from "../src/components/useReducer_simple_state/CounterOne";
import CounterTwo from "../src/components/useReducer_complex_state/CounterTwo";
import CounterThree from "./components/useReducer_simple_state/multipleUseReducer";
//import './App.css';

function App() {
  return (
    <div className="App" style={{margin:"50px"}}>
      <ClassCounter title="class component"/>
      <hr></hr>
      <HookCounter title="function component"/>
      <hr></hr>
      <HookCounterTwo/>
      <hr></hr>
      <HookwithObject/>
      <hr></hr>
      <HookwithArray/>
      <hr></hr>
      <HookUseEffect/>
      <hr></hr>
      <ClassMouse/>
     
      <hr></hr>
      {/* <HookMouse/> */}
      <MouseContainer/>
      <hr></hr>
      <IntervalClassCounter/>
      <hr></hr>
      <IntervalHookCounter/>
      <hr></hr>
      <HookDataFetching/>
      <hr></hr>
      <ComponentC/>
      <hr></hr>
      <UseContextComponentC/>
      <hr></hr>
      <CounterOne/>
      <hr></hr>
      <CounterTwo/>
      <hr></hr>
      <CounterThree/>
    </div>
  );
}

export default App;
