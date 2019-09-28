import React from 'react'
import { Component } from 'react'
import ReactMapGL, { Marker } from 'react-map-gl'
import apiKey from './key.js'
import Container from '@material-ui/core/Container'
import link from '../../link'

class Map extends Component {
  load = async () => {
    fetch(link + '/story', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(response => response.json()).then(responseJSON => {
      this.setState({ stories: responseJSON })
    })

  }

  state = {
    viewport: {
      width: 1000,
      height: 400,
      latitude: 40.717,
      longitude: -74.043,
      zoom: 8,
    },
    stories: [],
  }

  render () {
    return (
      <Container align="center" width="lg">
        <ReactMapGL align="center"
                    {...this.state.viewport}
                    onViewportChange={(viewport) => this.setState({ viewport })}
                    mapboxApiAccessToken={apiKey}>
          {this.state.stories.map(story => (
            <>
              <Marker latitude={story.latitude} longitude={story.longitude}/>
            </>
          ))}
        </ReactMapGL>
      </Container>
    )
  }
}

export default Map
