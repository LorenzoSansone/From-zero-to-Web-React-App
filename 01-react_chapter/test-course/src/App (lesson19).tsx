import React, { FunctionComponent } from 'react';
import logo from './logo.svg';
import './App.css';
import Title from './Title';

//FunctionComponent o FC
const App: FunctionComponent = () => {
  const component = <h1>Title simple</h1>;

  //Posso unire più componenti in un unico elemento usando i fragment
  const fragment = <><h1>Title fragment</h1><h2>Subtitle</h2></>;

  const generateTitle = (name: string) => 
  {return <h1> Ciao {name}</h1>;};

  return (
    <div className="App">
      <header className="App-header">
        {component}
        {fragment}
        {generateTitle("Lore")}

        <Title enabled={true} name="Title with component + props" />

        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
