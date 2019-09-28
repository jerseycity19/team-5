import { Component } from 'react'
import openSocket from 'socket.io-client'
import link from '../../link'
import React from 'react'
import SimpleMenu from '../components/MenuBar'
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { TextField } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import KeyboardVoiceIcon from '@material-ui/icons/KeyboardVoice';
import Icon from '@material-ui/core/Icon';
import SaveIcon from '@material-ui/icons/Save';

export default class ChatView extends Component {
  state = {
    messages: [],
    inProgressMessage: '',
  }

  constructor(props) {
    super(props);

    this.socket = openSocket(link, { withCredentials: false })
    this.socket.on('chat message', (message) => {
      this.setState(state => {
        return {
          messages: [...state.messages, message],
        }
      })
    })
  }

  sendMessage = (message) => {
    this.socket.emit('chat message', message)
  }

  onFormSubmit = (e) => {
    e.preventDefault()
    this.sendMessage(this.state.inProgressMessage)
    this.setState({ inProgressMessage: '' })
  }

  onInProgressMessageChange = (e) => {
    this.setState({ inProgressMessage: e.target.value })
  }

  render = () => (
    <>
      <SimpleMenu />

      <div className="chatbox">
        <ul>
          {this.state.messages.map(message => (
            <li key={message}>{message}</li>
          ))}
        </ul>
      </div>

      <form onSubmit={this.onFormSubmit}>
        <TextField
          id="standard-name"
          label="Send a message"
          // className={classes.textField}
          onChange={this.onInProgressMessageChange}
          value={this.state.inProgressMessage}
          margin="normal"
        />
        <Button variant="contained" color="primary" onClick={this.onFormSubmit} style={{ marginTop: '28px', marginLeft: '20px' }}>
          Send
        {/* This Button uses a Font Icon, see the installation instructions in the docs. */}
          {/* <Icon className={rightIcon}>send</Icon> */}
        </Button>
      </form>
    </>
  )
}
