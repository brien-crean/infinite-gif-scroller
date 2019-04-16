import React, { useRef, useEffect } from 'react';
import './Video.css';

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
  console.log(videoRef)
  return (
    <video ref={videoRef} className="Video" loop muted autoPlay>
      <source type="video/mp4" src={props.videoURL} />
    </video>
  )
}

export default Video;