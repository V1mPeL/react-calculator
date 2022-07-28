import React from 'react'
import './main.css';


export const Input = ({ text, result}) => {
  return (
    <div className='input-wrapper'>
        <div className="text">
            <h3>{text}</h3>
        </div>

        <div className="result">
            <h1>{result}</h1>
        </div>

    </div>
  )
}
