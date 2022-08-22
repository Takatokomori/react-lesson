import React, { useState } from 'react';
import "../App.css";

type Props = {
  message: string,
  children: React.ReactNode,
}

type Item = {
  id: number,
  title: string
}

// Props practice
export const Child: React.FC<Props> = ({message, children}) => {
  const [green, setBlue] = useState(false);
  return (
    <div>
      { children }
      <p className='message'>{ message }</p>
      <div className='box'>
        <h3 className={green ? "is-green" : "is-red"}
        onClick={() => setBlue(!green)}>Click ME</h3>
      </div>
    </div>
  )
}

// Count Increment && Decrement
export const Number: React.FC = () => {
  const [ count, setCount ] = useState<number>(0);
  const handleIncrement = () => {
    setCount(count +1)
  }
  const handlenDecrement = () => {
    setCount(count -1)
  }
  return (
    <div>
      <p>{ count }</p>
      <button onClick={handleIncrement}>+1</button>
      <button onClick={handlenDecrement}>-1</button>
    </div>
  )
}

// Input practice
export const Input: React.FC = () => {
  const [ message, setMessage ] = useState<string>("");
  const handleMessage = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  }
  return (
    <div>
      <p>{ message }</p>
      <input type="text" value={message} onChange={handleMessage} />
    </div>
  )
}
