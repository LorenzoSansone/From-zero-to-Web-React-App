import React, { FunctionComponent, useState } from 'react';
import './App.css';
import Counter from 'components/Counter';


//FunctionComponent o FC
const App: FunctionComponent = () => {
  console.log('App rerender');

  const [counter, setCounter] = useState<number>(0);
  const [color, setColor] = useState<string>("#ffffff");

  //(counter:number) => counter + 1 (Rende atomiche le chiamate al setState)
  const plus = () => {
    setCounter((counter:number) => counter + 1);
  }

  const minus = () => {
    setCounter((counter:number) => counter - 1);
  }

  

  return (
    <div className="App">
      <Counter number={counter}/>
      <button onClick={plus}>+</button>
      <button onClick={minus}>-</button>
    </div>
  );
}

export default App;
