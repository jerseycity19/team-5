import React from 'react'

import { GoogleApiWrapper, Map, Marker } from 'google-maps-react'
import { googleApiKey } from './key'
import link from '../../link'

export class MapContainer extends React.Component {
  componentDidMount = async () => {
    await this.load()
  }

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
    stories: [],
  }

  render = () => (
    <>
      <Map
        initialCenter={{
          lat: 39.0997,
          lng: -94.5786,
        }}
        className="map"
        google={this.props.google}
        style={{ height: '100%', width: '100%' }}
        zoom={4}
      >

        {this.state.stories
          .filter(story => (story && story.latitude && story.longitude))
          .map(story => (
            <Marker
              key={story._id}
              name={'Your mom'}
              position={{
                lat: story.latitude,
                lng: story.longitude,
              }}/>
          ))}
      </Map>
    </>
  )
}

export default GoogleApiWrapper({
  apiKey: (googleApiKey),
})(MapContainer)
