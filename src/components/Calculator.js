import React, { useState } from "react";
import { Dropdown, DropdownButton, Button } from "react-bootstrap";
const Calculator = () => {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [operation, setOperation] = useState("");
  const [result, setResult] = useState("");

  const handleFunctionselect = (oper) => {
    console.log(oper);
    // console.log(e.target.value)
    if (oper === "Addition"){
        addition(num1, num2)
    }
    else if (oper ==="Substract"){
        substract(num1, num2)
    }
    else if (oper === "Divide"){
        divide(num1, num2)
    }
    else if (oper === "Multiply"){
        multiply(num1, num2)
    }
  };
  const handleReset = () =>{
    setNum1("")
    setNum2("")
    setResult("")
  }
  const addition = (a, b) => {
    let data = Number(a) + Number(b);
    setResult(data);
  };
  const substract = (a, b) => {
    let data = a - b;
    setResult(data);
  };
  const multiply = (a, b) => {
    let data = a * b;
    setResult(data);
  };
  const divide = (a, b) => {
    let data = a / b;
    setResult(data);
  };
//   log
  return (
    <div className="cal-card">
      <div className="card-body">
        <form>
          <h4>Calculator</h4>
          <input
            type="text"
            placeholder="number1"
            value={num1}
            onChange={(e) => {
              setNum1(e.target.value);
            }}
          />
          <br />
          <br />
          <input
            type="text"
            placeholder="number2"
            value={num2}
            onChange={(e) => {
              setNum2(e.target.value);
            }}
          />
          <br />
          <br />
          <DropdownButton
            className="width-50%"
            align="end"
            title="Operation"
            id="dropdown-menu-align-end"
          >
            <Dropdown.Item
              eventKey="1"
              onClick={() => {
                handleFunctionselect("Addition");
              }}
            >
              Addition
            </Dropdown.Item>
            <Dropdown.Item
              eventKey="2"
              onClick={() => {
                handleFunctionselect("Substract");
              }}
            >
              Substract
            </Dropdown.Item>
            <Dropdown.Item
              eventKey="3"
              onClick={() => {
                handleFunctionselect("Divide");
              }}
            >
              Divide
            </Dropdown.Item>
            <Dropdown.Item
              eventKey="4"
              onClick={() => {
                handleFunctionselect("Multiply");
              }}
            >
              Multiply
            </Dropdown.Item>
          </DropdownButton>{" "}
          <Button variant="primary" onClick={handleReset}> Clear</Button>
          <br />
          <input
            type="text"
            placeholder="Result"
            value={result}
            onChange={(e) => {
              setResult(e.target.value);
            }}
          />
          <br />
          <br />
        </form>
      </div>
    </div>
  );
};

export default Calculator;