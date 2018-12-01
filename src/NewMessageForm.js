import React, { Component } from 'react';

export default class NewMessageForm extends Component {
  state = { inputText: '' }

  handleSend = () => {
    const { inputText } = this.state
    const { onSend } = this.props

    onSend(inputText)
    
    this.setState({ inputText: '' })
  }

  handleTextChange = (event) => {
    this.setState({ inputText: event.target.value })
  }
  render () {
    const { inputText } = this.state
    return (
      <div>
        <input
          type='text'
          data-test='messageText'
          value={inputText}
          onChange={this.handleTextChange}
        />
        <button
          data-test='sendButton'
          onClick={this.handleSend}
        >
          Send
        </button>
      </div>
    )
  }
}
