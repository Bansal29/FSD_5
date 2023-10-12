import React, { useState } from "react";
import "./calculator.css";
import Button from "./Button.jsx";
function Calculator() {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    if (value === "=") {
      setInput(eval(input).toString());
    } else if (value === "C") {
      setInput("");
    } else {
      setInput((prevState) => prevState + value);
    }
  };
  const buttonlist = [
    "7",
    "8",
    "9",
    "/",
    "4",
    "5",
    "6",
    "*",
    "1",
    "2",
    "3",
    "-",
    "0",
    "C",
    "=",
    "+",
  ];
  return (
    <div className="calculator">
      <div className="displaypanel">{input}</div>
      <div className="buttons">{buttonlist.map()}</div>
    </div>
  );
}
export default Calculator;
