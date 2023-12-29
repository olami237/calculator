import React, { useState } from "react";

const Calculator = () => {
  const [displayValue, setDisplayValue] = useState("");

  const appendToDisplay = (value) => {
    setDisplayValue((prevValue) => prevValue + value);
  };

  const clearDisplay = () => {
    setDisplayValue("");
  };

  const calculate = () => {
    try {
      setDisplayValue(eval(displayValue).toString());
    } catch (error) {
      setDisplayValue("Error");
    }
  };

  return (
<div className=" flex justify-center items-center h-[100svh] w-screen">
  <div className=" p-12 h-[50%] bg-slate-500">
     <div className=" flex justify-center items-center mt-8">
     <input type="text" value={displayValue} readOnly className=" w-[70%] h-9 flex items-center " />
     </div>
      <div className=" grid grid-cols-[1fr_1fr_1fr_1fr]">
        <button onClick={() => clearDisplay()} className=" w-20 h-10 border ">C</button>
        <button onClick={() => appendToDisplay("0")} className=" w-20 h-10 border ">0</button>
        <button onClick={() => appendToDisplay("1")} className=" w-20 h-10 border ">1</button>
        <button onClick={() => appendToDisplay("2")} className=" w-20 h-10 border ">2</button>
        <button onClick={() => appendToDisplay("3")} className=" w-20 h-10 border ">3</button>
        <button onClick={() => appendToDisplay("4")} className=" w-20 h-10 border ">4</button>
        <button onClick={() => appendToDisplay("5")} className=" w-20 h-10 border ">5</button>
        <button onClick={() => appendToDisplay("7")} className=" w-20 h-10 border ">7</button>
        <button onClick={() => appendToDisplay("6")} className=" w-20 h-10 border ">6</button>
        <button onClick={() => appendToDisplay("8")} className=" w-20 h-10 border ">8</button>
        <button onClick={() => appendToDisplay("9")} className=" w-20 h-10 border ">9</button>
        <button onClick={() => appendToDisplay("-")} className=" w-20 h-10 border ">-</button>
        <button onClick={() => appendToDisplay("+")} className=" w-20 h-10 border ">+</button>
        <button onClick={() => appendToDisplay("*")} className=" w-20 h-10 border ">*</button>
        <button onClick={() => appendToDisplay("/")} className=" w-20 h-10 border ">/</button>
        <button onClick={() => appendToDisplay(".")} className=" w-20 h-10 border ">.</button>
        <button onClick={() => calculate()} className=" w-20 h-10 border ">=</button>
      </div>
    </div>
</div>
  );
};


  

export default Calculator