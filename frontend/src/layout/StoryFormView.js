import React from 'react'
import Carousel from './components/carousel'
import SimpleMenu from './components/MenuBar'
import ChatForm from './components/ChatForm'
import Map from './components/ReactMap'

class StoryFormView extends React.Component {

  render () {
    return (
      <div>
        <SimpleMenu/>
        <Map/>
        <Carousel class="carousel"/>
        <ChatForm/>
      </div>
    )
  }
}

export default StoryFormView
