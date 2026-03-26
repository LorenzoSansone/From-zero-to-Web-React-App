import React, { ChangeEvent, FunctionComponent, useEffect, useMemo, useRef, useState } from 'react';
import './App.css';
import Counter from 'components/Counter';
import Header from 'components/Header';
import Paragraph from 'components/Paragraph';

export const TextColorContext = React.createContext<string>(''); //Creazione del contesto



//FunctionComponent o FC
const App: FunctionComponent = () => {
  console.log('App rerender');
  
  const getRandomColor = ():string => {
    return '#' + Math.floor(Math.random()*16777215).toString(16);
  }


  useEffect(() => {
    window.addEventListener("keyup", () => console.log("Keyup event"));
    return () => {
      window.removeEventListener("keyup", () => console.log("Keyup event"));
    }
  }, []);

  const [textColor, setTextColor] = useState<string>(getRandomColor());
  
  return (
    <div style={{height: "100vh", width: "100vw"}}className="App">
      <div 
      style = {{ height: 300, width: 300, background: 'yellow'}}
      onClick = {() => console.log("Clicked")}
      ></div>
    </div>
  );
}

export default App;
