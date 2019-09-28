import React from 'react';
import Carousel from './components/carousel'
import MenuBar from './components/MenuBar'
import ChatForm from './components/ChatForm'
import ChatRoomList from './components/ChatRoomList'

class DesktopView extends React.Component {

    render() {
        return (
            <div>
<<<<<<< HEAD
                <MenuBar />
                <Carousel class="carousel" />
                <ChatForm />
=======
                <SimpleMenu/>
                <Carousel class = "carousel"/>
                <ChatForm/>
                <ChatRoomList/>
>>>>>>> 765fdfb37eddb2f321d09f8e06c922de88984d14
            </div>
        )
    }
}

export default DesktopView;