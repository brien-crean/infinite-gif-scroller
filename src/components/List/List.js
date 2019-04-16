import React, { Component } from 'react'
import Video from '../Video/Video';
import AppContext from '../../AppContext';
import './List.css';

class List extends Component {

  renderVideos = (gifs) => {
    let videos = [];
    gifs.map(gif => {
      videos.push(<Video key={gif.id} videoURL={gif.images.original_mp4.mp4} />);
      return null;
    });
    return videos;
  };

  render() {
    const { gifs } = this.context.state;
    return (
      <div className="List">
        <header className="List-header">
          <h1 className="List-title">Infinite Scroller using the Interaction Observer API</h1>
        </header>
        <div className="List-description">
          <p>Javascript Interaction Observer API used control video element playback based on each elements visibility</p>
          <p>The top 10 trending GIFs are pulled as mp4s from GIPHY</p>
        </div>
        <div className="List-videos">
          {
            gifs ? this.renderVideos(gifs) : null
          }
        </div>
        <button className="Fetch-gifs" onClick={this.context.fetchGIFs}>More...</button>
      </div>
    )
  }
}
List.contextType = AppContext;
export default List;