import React, { FunctionComponent } from 'react';
import logo from './logo.svg';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'ui/theme/global.style';
import { defaultTheme } from 'ui/theme/theme';
import UI from "ui";

const App:FunctionComponent = () =>  {
  return (
    <div className="App">
      <ThemeProvider theme = {defaultTheme}>
        <GlobalStyle/>
        <UI/>
      </ThemeProvider>
    </div>
  );
}

export default App;
