import React from 'react'
import Carousel from './components/carousel'
import SimpleMenu from './components/MenuBar'
import ChatForm from './components/ChatForm'
import ChatRoomList from './components/ChatRoomList'

class StoryFormView extends React.Component {

  render () {
    return (
      <div>
        <SimpleMenu/>
        <Carousel class="carousel"/>
        <ChatForm/>
      </div>
    )
  }
}

export default StoryFormView
