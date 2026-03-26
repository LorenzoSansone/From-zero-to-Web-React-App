import React, { FunctionComponent } from 'react';
import logo from './logo.svg';
import styled from 'styled-components';

//& si riferisce al Container, è come se scrivessi Container
//E' come la dichiarazione di una classe
const Container = styled.div`
  width: 300px;
  height: 400px;
  background: black;

  & > div {
    width: 50px;
    height: 50px;
    background: red;
  }

  p {
    color: white;
  }
`;

const App: FunctionComponent = () => {
  return (
    <Container>
      <div><p>Ciao</p></div>
    </Container>
  );
}

export default App;
