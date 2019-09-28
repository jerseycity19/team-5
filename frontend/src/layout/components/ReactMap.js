import React from 'react';
import {Component} from 'react';
import ReactMapGL from 'react-map-gl';
import apiKey from './key.js';
import Container from '@material-ui/core/Container';

class Map extends Component {

  state = {
    viewport: {
      width: 1000,
      height: 400,
      latitude: 37.7577,
      longitude: -122.4376,
      zoom: 8
    }
  };

  render() {
    return (<Container align="center" width="lg">
      <ReactMapGL align="center"
        {...this.state.viewport}
        onViewportChange={(viewport) => this.setState({viewport})}
        mapboxApiAccessToken={apiKey}/></Container>
    );
  }
}

export default Map;