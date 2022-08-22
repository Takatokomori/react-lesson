import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Child, Number, Input}  from "./Components/Child";

const App: React.FC = () =>{

  return (
    <div className = "App">
      <Child message="Hello Props" >
        <h1 style={{color: "blue", fontSize: 48}}>Children</h1>
      </Child>
      <Number />
      <Input/>
    </div>
  )
}

export default App;
