import React, { Component } from 'react';
import { createGlobalStyle } from 'styled-components';
import List from './components/List';
import { AppProvider } from './AppContext';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: "Segoe UI", "Roboto", "Oxygen", sans-serif;
  }
`;

class App extends Component {

  render() {
    return (
      <AppProvider>
        <GlobalStyle />
        <List />
      </AppProvider>
    );
  }
}

export default App;
