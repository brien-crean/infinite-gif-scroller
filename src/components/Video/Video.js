import React, { Component } from 'react';
import './Video.css';

class Video extends Component {

  constructor(props) {
    super(props)
    this.state = {
      prevRatio: 0.0,
    }
  }

  componentDidMount() {
    this.createObserver();
  }

  createObserver = () => {
    let options = {
      root: null, // viewport for checking visiblity of the target - browser if null or not specified
      rootMargin: "0px",
      threshold: 0.9 // < 90% of the element is viewable playback pauses
    };
    let observer = new IntersectionObserver(this.handleIntersect, options);
    observer.observe(this.$video);
  };

  // executed when threshold is crossed
  handleIntersect = (entries, observer) => {
    entries.map((entry) => {
      if (this.$video.readyState === 4) {
        try {
          entry.intersectionRatio > this.state.prevRatio
            ? this.$video.play()
            : this.$video.pause();
          this.setState({ prevRatio: entry.intersectionRatio });
        }
        catch (err) {
          console.log(`ERROR: ${err}`);
        }
      }
      return null;
    })
    return null;
  };

  render() {
    const { videoURL } = this.props;
    return (
      <video ref={(video) => { this.$video = video; }} className="Video" loop muted autoPlay>
          <source type="video/mp4" src={ videoURL } />
      </video>
    );
  }
}

export default Video;
