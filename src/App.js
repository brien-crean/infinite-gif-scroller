import React, { Component } from 'react';
import './App.css';
//components
import Image from './components/Image';
import './components/Image.css';

class App extends Component {

  renderImages = () => {
    let images = [];
    for(let i=0; i<10; i++) {
      images.push(<Image key={i} imageID={`image${i}`} />);
    }
    return images;
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Interaction Observer API Test</h1>
        </header>
        <div className="App-images">
        
          { 
            this.renderImages()
          }
        </div>

      </div>
    );
  }
}

export default App;
