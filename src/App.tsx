import React from 'react';
import logo from './logo.svg';
import './App.css';
import Child from "./Components/Child";
type Item = {
  id: number,
  title: string
}

const App: React.FC = () =>{
  const items: Item[] = [
    {
      id: 1,
      title: "Harry Potter",
    },
    {
      id: 2,
      title: "Road Of the Ring",
    },
    {
      id: 3,
      title: "The Grim",
    }
  ]

  return (
    <div className = "App">
      <ul>
        {
          items.map(item =>(
            <li key={item.id}>{item.id} - { item.title }</li>
          ))
        }
      </ul>
      <Child message="Hello Props" >
        <h1>Children</h1>
        <h1>Children</h1>
        <h1>Children</h1>
        <h1>Children</h1>

      </Child>
    </div>
  )
}

export default App;
