import React, { FunctionComponent, useRef, useState } from 'react';
import './App.css';
import Counter from 'components/Counter';


//FunctionComponent o FC
const App: FunctionComponent = () => {
  console.log('App rerender');

  const inputRef = useRef<HTMLInputElement>(null);

  const divRef = useRef<HTMLDivElement>(null); 

  const handleClick = () => {
    inputRef.current?.focus();
    console.log(divRef.current?.getBoundingClientRect);
  }

  return (
    <div style={{height: "100vh", width: "100vw"}}className="App">
      <input type="text" ref={inputRef} />
      <button onClick = {handleClick}>Focus</button>

      <div ref={divRef} style={{height:"50%", width: "40%", background: "yellow"}}></div>
    </div>
  );
}

export default App;
