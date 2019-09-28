import { Component } from 'react'
import openSocket from 'socket.io-client'
import link from '../../link'
import React from 'react'

export default class ChatView extends Component {
  state = {
    messages: [],
    inProgressMessage: '',
  }

  constructor (props) {
    super(props)

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
      <ul>
        {this.state.messages.map(message => (
          <li key={message}>{message}</li>
        ))}
      </ul>

      <form onSubmit={this.onFormSubmit}>
        <input type="text" value={this.state.inProgressMessage} onChange={this.onInProgressMessageChange}/>
        <input type="submit"/>
      </form>
    </>
  )
}
