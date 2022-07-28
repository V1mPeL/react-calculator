import React from 'react'
import './main.css';



export const Button = ({ symbol, styling, handleClick}) => {
  return (
    <div 
      className={styling}
      onClick={() => handleClick(symbol)}
    >{symbol}</div>
  )
}

