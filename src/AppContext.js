import React, { Component, createContext } from 'react';
import { API_KEY } from './private/config';
const AppContext = createContext();

class AppProvider extends Component {
  state = {
    gifs: [],
    limit: 10
  }

  componentDidMount() {
    this.fetchGIFs()
  }

  fetchGIFs = () => {
    fetch(`https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}&limit=${this.state.limit}`)
      .then(response => response.json())
      .then(data => {
        console.log('get the next 10 GIFs')
        console.log(data.data)
        this.setState({ gifs: data.data, limit: data.pagination.count + 10 })
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