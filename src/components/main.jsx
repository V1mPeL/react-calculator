import React from 'react'
import './main.css';
// import swap from '../img/swap.svg'
import backspace from '../img/backspace.svg'
import { Input } from './Input'
import {Button} from './Button'
import { useState } from 'react';
import * as math from 'mathjs'

export const Main = () => {
  const [text, setText] = useState(" ");
  const [result, setResult] = useState("0");

  const addToText = (val) => {
    setResult("")
    setText((text) => [...text, val]);
  }

  // const backspaceLetter = () => {
  //   setText()
  // }

  const resetInput = () => {
    setText("")
    setResult("0")
  }

  const calculate = () => {
    const input = text.join("");
    setResult(math.evaluate(input))
  }



  return (

    <div className='Main'>
      <Input
        text={text} result={result}
      ></Input>


      <div className="calculator-buttons parent">
        <div className="buttons-row">

          <Button symbol="AC" handleClick={resetInput} styling="calculator-btn ac-btn color-orange"></Button>
          <Button symbol={<img src={backspace} alt="Backspace" />}
          styling="calculator-btn backspace-btn color-orange"
          ></Button>
          <Button symbol="%" handleClick={addToText} styling="calculator-btn percent-btn color-orange"></Button>
          <Button symbol="/" handleClick={addToText} styling="calculator-btn div-btn color-orange"></Button>

        </div>
        <div className="buttons-row">

          <Button symbol="7" handleClick={addToText} styling="calculator-btn number-btn color-black"></Button>
          <Button symbol="8" handleClick={addToText} styling="calculator-btn number-btn color-black"></Button>
          <Button symbol="9" handleClick={addToText} styling="calculator-btn number-btn color-black"></Button>
          <Button symbol="*" handleClick={addToText} styling="calculator-btn color-orange"></Button>

        </div>
        <div className="buttons-row">

          <Button symbol="4" handleClick={addToText} styling="calculator-btn number-btn color-black"></Button>
          <Button symbol="5" handleClick={addToText} styling="calculator-btn number-btn color-black"></Button>
          <Button symbol="6" handleClick={addToText} styling="calculator-btn number-btn color-black"></Button>
          <Button symbol="-" handleClick={addToText} styling="calculator-btn color-orange"></Button>

        </div>
        <div className="buttons-row">

          <Button symbol="1" handleClick={addToText} styling="calculator-btn number-btn color-black"></Button>
          <Button symbol="2" handleClick={addToText} styling="calculator-btn number-btn color-black"></Button>
          <Button symbol="3" handleClick={addToText} styling="calculator-btn number-btn color-black"></Button>
          <Button symbol="+" handleClick={addToText} styling="calculator-btn color-orange"></Button>

        </div>
        <div className="buttons-row">

          <Button symbol={""}
            styling="calculator-btn rotate-btn color-orange"
          ></Button>
          <Button symbol="0" handleClick={addToText} styling="calculator-btn number-btn color-black"></Button>
          <Button symbol="." handleClick={addToText} styling="calculator-btn number-btn color-black"></Button>
          <Button symbol="=" handleClick={calculate} styling="calculator-btn equal-btn color-orange"></Button>
          
        </div>

      </div>



    </div>
  )
}

