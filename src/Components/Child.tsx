import React from 'react';

type Props = {
  message: string,
  children: React.ReactNode,
}

type Item = {
  id: number,
  title: string
}

const Child: React.FC<Props> = ({message, children}) => {
  return (
    <div>
      <p>{ message }</p>
      { children }
      <p>child component</p>
    </div>
  )
}

export default Child;
