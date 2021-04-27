import logo from './logo.svg';
import './App.css';
import React from "react";
import Button from "./Button";
function App() {
  const [counter, setCounter] = React.useState(0)

  const increment = () => {
    setCounter(counter +1)
  }

  const decrement = () => {
    setCounter(counter -1)
  }
  return (
      <div>
    <p>Counter</p>

      <p>{counter}</p>


      <Button onClickFunction={increment} buttonText="+"/>
     <Button onClickFunction={decrement} buttonText="-"/>
      </div>

  );
}

export default App;
