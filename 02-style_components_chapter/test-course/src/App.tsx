import React, { FunctionComponent, useState } from 'react';
import logo from './logo.svg';
import styled, { ThemeProvider } from 'styled-components';
import Button from './components/Button';
import RegularText from './components/RegularText';
import { PageContainer, RotatingSquare } from 'App.style';  
import { lightTheme, darkTheme, ThemeMode } from 'ui/theme';

const App: FunctionComponent = () => {
  const [themeMode, setThemeMode] = useState<ThemeMode>(ThemeMode.Light);
  
  const switchTheme = () => {
    setThemeMode(themeMode => themeMode === ThemeMode.Light ? ThemeMode.Dark: ThemeMode.Light)
  }

  return (
    <ThemeProvider theme={themeMode == ThemeMode.Light? lightTheme: darkTheme}>
    <PageContainer>
      <Button onClick ={switchTheme}>
        <RegularText>Click me</RegularText>
      </Button>
      
    </PageContainer>
    </ThemeProvider>
  );
}

export default App;
