import React, { FunctionComponent, useState } from 'react';
import './App.css';


//FunctionComponent o FC
const App: FunctionComponent = () => {
  console.log('App rerender');

  const [name, setName] = useState<string>('Lorenzo');
  const [surname, setSurname] = useState<string>('Sansone');
  const completeName = `${name} ${surname}`;

  const [counter, setCounter] = useState<number>(0);

  //(counter:number) => counter + 1 (Rende atomiche le chiamate al setState)
  const plus = () => {
    setCounter((counter:number) => counter + 1);
  }

  const minus = () => {
    setCounter((counter:number) => counter - 1);
  }

  const changeSurname = () => {
    setSurname('SansoneCambiato');
  }
  
  const chageName = () => {
    setName('Lorenzo Cambiato');
  }

  return (
    <div className="App">
      {name}
      <button onClick={chageName}>Cambia</button>
      <br/><br/>
      {surname}
      <button onClick={changeSurname}>Cambia Cognome</button>
      <br/>
      completeName: {completeName}

      <br/><br/>
      {counter}
      <button onClick={plus}>+</button>
      <button onClick={minus}>-</button>
    </div>
  );
}

export default App;
