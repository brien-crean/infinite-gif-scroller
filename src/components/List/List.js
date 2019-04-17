import React, { useContext } from 'react';
import styled from 'styled-components';
import Video from '../Video/Video';
import Header from '../Header/Header';
import Button from './Button';
import AppContext from '../../AppContext';

const ListContainer = styled.div`
  text-align: center;
`;

const VideoList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const List = () => {
  const context = useContext(AppContext);
  const { gifs } = context.state;
  return (
    <ListContainer>
      <Header />
      <div>
        <p>Javascript Interaction Observer API used control video element playback based on each elements visibility</p>
        <p>The top trending GIFs are pulled as mp4s from GIPHY</p>
      </div>
      <VideoList>
        {
          gifs
            ? gifs.map(gif => (
                <Video key={gif.id} videoURL={gif.images.original_mp4.mp4} />
              ))
            : null
        }
        <Button onClick={context.fetchGIFs}>More...</Button>
      </VideoList>
    </ListContainer>
  )
}

export default List;