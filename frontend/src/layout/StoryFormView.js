import React from 'react'
import Carousel from './components/carousel'
import SimpleMenu from './components/MenuBar'
import ChatForm from './components/ChatForm'
import JakeMap from './components/JakeMap'

class StoryFormView extends React.Component {

  render() {
    return (
      <span>
        <SimpleMenu />
        <div style={{ marginTop: '50px', fontSize: '1.5em' }}>We will unite our community to combat addiction. Each pin represents an
          individual who is fighting against addiction.
        </div>
        <div className="rip">
          <JakeMap />
        </div>

        <Carousel class="carousel" />
        <ChatForm />
      </span>
    )
  }
}

export default StoryFormView;
