import React from 'react';
import Carousel from './components/carousel'
import SimpleMenu from './components/MenuBar'

class DesktopView extends React.Component {
    render() {
        return (
            <div>
                <SimpleMenu/>
                <Carousel/>
            </div>
        )
    }
}

export default DesktopView;