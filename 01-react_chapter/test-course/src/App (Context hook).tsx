import React, { ChangeEvent, FunctionComponent, useMemo, useRef, useState } from 'react';
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

  const [textColor, setTextColor] = useState<string>(getRandomColor());
  
  return (
    <div style={{height: "100vh", width: "100vw"}}className="App">
      <TextColorContext.Provider value={textColor}>
        <Counter number={0}/>
        <button onClick={() => setTextColor(getRandomColor())}>Change color </button>
        <Header />
        <Paragraph />
      </TextColorContext.Provider>
    </div>
  );
}

export default App;
