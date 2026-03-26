import React, { FunctionComponent } from 'react';
import logo from './logo.svg';
import './App.css';
import Title from './Title';
import Header from './components/Header';

//FunctionComponent o FC
const App: FunctionComponent = () => {
  

  return (
    <div className="App">
      <Header>
        <img src={logo} className="App-logo" alt="logo" />
      </Header>

    </div>
  );
}

export default App;
