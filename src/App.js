import React, { Component } from 'react';
import List from './components/List/List';
import { AppProvider } from './AppContext';

class App extends Component {

  render() {
    return (
      <AppProvider>
        <List />
      </AppProvider>
    );
  }
}

export default App;
