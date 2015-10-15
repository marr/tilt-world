import React, { Component } from 'react';
import ReactDOM from 'react-dom';
const DAT = require('exports?DAT!./globe');

class TiltWorld extends Component {
  componentDidMount() {
    const globe = new DAT.Globe(ReactDOM.findDOMNode(this), {
      imgDir: '/img/'
    });
    globe.createPoints();
    globe.animate();
  }

  render() {
    return (
      <div></div>
    );
  }
}

export class App extends Component {
  render() {
    return (
      <div>
        <TiltWorld />
      </div>
    );
  }
}
