import React, { ChangeEvent, FunctionComponent, useMemo, useRef, useState } from 'react';
import './App.css';
import Counter from 'components/Counter';


//FunctionComponent o FC
const App: FunctionComponent = () => {
  const [text, setText] = useState<string>('');
  
  //Simula un processo pesante
  const getRandom = () => {
    for(let i = 0; i < 500; i++) {
      const random = Math.floor(Math.random() * 10);
    }
    return Math.floor(Math.random() * 10); 
  }
  
  const randomNumber = useMemo(() => getRandom(), []);


  return (
    <div style={{height: "100vh", width: "100vw"}}className="App">
      <input onChange={(event: ChangeEvent<HTMLInputElement>) => setText(event.target.value)} value = {text} />
      <br/><br/>
      <span>{randomNumber}</span>
    </div>
  );
}

export default App;
