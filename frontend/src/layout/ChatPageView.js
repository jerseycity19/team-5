import React from 'react';
import ChatRoomList from './components/ChatRoomList';
import SimpleMenu from './components/MenuBar';
import Container from '@material-ui/core/Container'

export default class ChatPageView extends React.Component {

  render() {
    return (
      <div>
        <SimpleMenu/>
        <Container align="center" width="lg"><ChatRoomList/></Container>
      </div>
    )
  }
}
