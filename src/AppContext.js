import React, { Component, createContext } from 'react';
import { API_KEY } from './private/config';
const AppContext = createContext();

class AppProvider extends Component {
  state = {
    gifs: [],
    offset: 0
  }

  componentDidMount() {
    this.fetchGIFs()
  }

  fetchGIFs = () => {
    fetch(`https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}&limit=10&offset=${this.state.offset}`)
      .then(response => response.json())
      .then(data => {
        this.setState({ gifs: [...this.state.gifs,...data.data], offset: data.pagination.offset + 10 })
      })
  }

  render() {
    return (
      <AppContext.Provider value={{
        state: this.state,
        fetchGIFs: this.fetchGIFs
      }}>
        {this.props.children}
      </AppContext.Provider>
    )
  }
}

export default AppContext;
export const AppConsumer = AppContext.Consumer;
export { AppProvider };