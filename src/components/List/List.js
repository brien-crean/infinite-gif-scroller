import React, { useContext } from 'react'
import Video from '../Video/Video';
import AppContext from '../../AppContext';
import './List.css';

const List = () => {
  const context = useContext(AppContext);
  const { gifs } = context.state;
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
          gifs ?
            gifs.map(gif => (
              <Video key={gif.id} videoURL={gif.images.original_mp4.mp4} />
            ))
            : null
        }
      </div>
      <button className="Fetch-gifs" onClick={context.fetchGIFs}>More...</button>
    </div>
  )
}

export default List;