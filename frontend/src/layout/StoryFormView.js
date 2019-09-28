import React from 'react'
import Carousel from './components/carousel'
import SimpleMenu from './components/MenuBar'
import ChatForm from './components/ChatForm'
import JakeMap from './components/JakeMap'

class StoryFormView extends React.Component {

  render () {
    return (
      <div>
        <SimpleMenu/>
        <JakeMap/>
        <Carousel class="carousel"/>
        <ChatForm/>
      </div>
    )
  }
}

export default StoryFormView
