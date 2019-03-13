import React, { Component } from 'react';

class Image extends Component {

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
      threshold: 0.8 // when < 80% of the element is viewable the backgroundColor = red
    };
    
    let observer = new IntersectionObserver(this.handleIntersect, options);
    observer.observe(this.$image);

  };

  // executed when threshold is crossed
  handleIntersect = (entries, observer) => {

    entries.map((entry) => {

      entry.intersectionRatio > this.state.prevRatio ?
        this.$image.style.backgroundColor = `green` :
        this.$image.style.backgroundColor = `red`;
  
      this.setState({ prevRatio: entry.intersectionRatio });
      return null;
    });

  };

  render() {
    return (
      <div ref={(image) => { this.$image = image; }} className="Image"></div>
    );
  }
}

export default Image;
