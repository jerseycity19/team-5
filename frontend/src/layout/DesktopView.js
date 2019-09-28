import React from 'react';
import Carousel from './components/carousel'
import MenuBar from './components/MenuBar'
import ChatForm from './components/ChatForm'

class DesktopView extends React.Component {

    render() {
        return (
            <div>
                <MenuBar />
                <Carousel class="carousel" />
                <ChatForm />
            </div>
        )
    }
}

export default DesktopView;