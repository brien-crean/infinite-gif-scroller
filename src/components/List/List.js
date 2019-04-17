import React, { useContext } from 'react';
import styled from 'styled-components';
import Video from '../Video/Video';
import Header from '../Header/Header';
import Observable from './Observable';
import AppContext from '../../AppContext';
import { link } from 'fs';

const ListContainer = styled.div`
  text-align: center;
`;

const VideoList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StyledLink = styled.div`
  padding: 10px;
  a {
    text-decoration: none;
    color: #4e4c4c;
    margin-bottom: 4px;
  }
  &:hover {
    text-decoration: underline;

  }
`;

const Description = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  p {
    text-align: left;
  }
  li {
    text-align: left;
  }
`;

const List = () => {
  const context = useContext(AppContext);
  const { gifs } = context.state;
  return (
    <ListContainer>
      <Header />
      <Description>
        <div>
          <p>Interaction Observer API used here to:</p>
          <ul>
            <li>
              Control video element playback based on each elements visibility
            </li>
            <li>
              Detect end of the list to fetch more GIFs (which are displayed as mp4s)
            </li>
          </ul>
        </div>
      </Description>
      <VideoList>
        {
          gifs
            ? gifs.map((gif, index) => (
              <div key={gif.id}>
                <StyledLink>
                  <a href={gif.embed_url}>#{index+1} - {gif.title}</a>
                </StyledLink>
                  <Video videoURL={gif.images.original_mp4.mp4} />
                </div>
              ))
            : null
        }
        <Observable />
      </VideoList>
    </ListContainer>
  )
}

export default List;