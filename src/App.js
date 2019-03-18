import React, { Component } from 'react';
import './App.css';
import './components/Video.css';
import Video from './components/Video';
import { API_KEY } from './private/config';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = { gifs: [] };
  }

  async componentDidMount() {
    await fetch(`https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}&limit=10`)
      .then(response => response.json())
      .then(data => {
        this.setState({ gifs: data.data });
      });
  }

  renderVideos = () => {
    let videos = [];
    this.state.gifs.map(gif => {
      videos.push(<Video key={ gif.id } videoURL={ gif.images.original_mp4.mp4 } />);
      return null;
    });
    return videos;
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Interaction Observer API Experiments</h1>
        </header>
        <div className="App-description">
        <p>Simple implementation of the Javascript Interaction Observer API to control video element playback based on each elements visibility</p>
        <p>The top 10 trending GIFs are pulled as mp4s from GIPHY</p>
        </div>
        <div className="App-videos">
          { 
            this.state.gifs ? this.renderVideos() : null
          }
        </div>
      </div>
    );
  }
}

export default App;
