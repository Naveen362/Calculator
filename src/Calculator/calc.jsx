import React, { useState } from "react";
import './calci.css'; // Import the CSS file

export default function Calculator() {
  const [a, seta] = useState('');

  const number = (e) => {
    seta(a + e);
  };

  const action = (e) => {
    seta(a + e);
  };

  const action1 = () => {
    try {
      seta(String(Function('"use strict";return (' + a + ')')()));  // Safely evaluates the expression
    } catch {
      seta('Error');
    }
  };

  const action2 = () => {
    seta(''); // Clear the input
  };

  return (
    <>
    <h1 style={{textAlign:"center",fontFamily:"cursive"}}>REACT CALCULATOR</h1>
    <div className="calculator">

      <input type="text" value={a} readOnly />
      <div className="calculator-buttons">
        <Elements number={number} action={action} action1={action1} action2={action2} />
      </div>
    </div></>
  );
}

function Elements({ number, action, action1, action2 }) {
  return (
    <>
      <button value="7" onClick={(e) => number(e.target.value)}>7</button>
      <button value="8" onClick={(e) => number(e.target.value)}>8</button>
      <button value="9" onClick={(e) => number(e.target.value)}>9</button>
      <button value="/" onClick={(e) => action(e.target.value)}>/</button>
      
      <button value="4" onClick={(e) => number(e.target.value)}>4</button>
      <button value="5" onClick={(e) => number(e.target.value)}>5</button>
      <button value="6" onClick={(e) => number(e.target.value)}>6</button>
      <button value="*" onClick={(e) => action(e.target.value)}>*</button>
      
      <button value="1" onClick={(e) => number(e.target.value)}>1</button>
      <button value="2" onClick={(e) => number(e.target.value)}>2</button>
      <button value="3" onClick={(e) => number(e.target.value)}>3</button>
      <button value="-" onClick={(e) => action(e.target.value)}>-</button>
      
      <button value="0" onClick={(e) => number(e.target.value)}>0</button>
      <button value="+" onClick={(e) => action(e.target.value)}>+</button>
      <button onClick={action1}>=</button>
      <button onClick={action2}>AC</button>
    </>
  );
}
