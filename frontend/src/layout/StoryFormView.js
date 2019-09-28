import React from 'react'
import Carousel from './components/carousel'
import SimpleMenu from './components/MenuBar'
import ChatForm from './components/ChatForm'
import InitMap from './components/map'

class StoryFormView extends React.Component {

  render () {
    return (
      <div>
        <SimpleMenu/>
        <initMap/>
        <Carousel class="carousel"/>
        <ChatForm/>
      </div>
    )
  }
}

export default StoryFormView
