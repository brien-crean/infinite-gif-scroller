import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';

const StyledVideo = styled.video`
  width: 500px;
  height: 200px;
  margin-bottom: 50px;
`;

const Video = (props) => {
  const videoRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null, // viewport for checking visiblity of the target - window if null or not specified
      rootMargin: "0px",
      threshold: 0.9 // < 90% of the element is viewable trigger callback
    };

    const playBackObserver = new IntersectionObserver((entries) => {
      entries.map((entry) => {
        if (videoRef.current.readyState === 4) {
          try {
            entry.intersectionRatio > 0.9
              ? videoRef.current.play()
              : videoRef.current.pause();
          }
          catch (err) {
            console.log(`ERROR: ${err}`);
          }
        }
        return null;
      })
    }, options);

    playBackObserver.observe(videoRef.current);
  })

  return (
    <StyledVideo ref={videoRef} loop muted autoPlay>
      <source type="video/mp4" src={props.videoURL} />
    </StyledVideo>
  )
}

export default Video;