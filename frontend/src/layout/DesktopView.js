import React from 'react';
import Carousel from './components/carousel'
import SimpleMenu from './components/MenuBar'
import ChatForm from './components/ChatForm'
import ChatRoomList from './components/ChatRoomList'

class DesktopView extends React.Component {
    
    render() {
        return (
            <div>
                <SimpleMenu/>
                <Carousel class = "carousel"/>
                <ChatForm/>
                <ChatRoomList/>
            </div>
        )
    }
}

export default DesktopView;