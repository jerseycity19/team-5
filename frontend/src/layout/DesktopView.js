import React from 'react';
import Carousel from './components/carousel'
import SimpleMenu from './components/MenuBar'
import ChatForm from './components/ChatForm'
import ChatRoomList from './components/ChatRoomList'
import GoogleMapReact from 'google-map-react';

class DesktopView extends React.Component {
    
    render() {
        return (
            <div>
                <SimpleMenu/>
                <div style={{height: '500px'}}>
                    <GoogleMapReact
                        bootstrapURLKeys={{ key:'AIzaSyCwWH4Ztcsrhlgg5B46yXZnsuvpIwo-kWY'}}
                        defaultCenter={{lat: -33.9, lng: 151.2}}
                        defaultZoom={10}
                    /> 
                </div>
                <Carousel class = "carousel"/>
                <ChatForm/>
            </div>
        )
    }
}

export default DesktopView;