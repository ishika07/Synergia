import React from 'react';
import './Input.css';

const Input = ({ setMessage, sendMessage, message }) => (
  <form className="form">
    <input
      className="input"
      type="text"
      placeholder="Type a message..."
      value={message}
      onChange={({ target: { value } }) => setMessage(value)}
      onKeyPress={event => event.key === 'Enter' ? sendMessage(event) : null}
      //takes the message from user and send it to socket event sendMessage
    />
    <button className="sendButton" onClick={e => sendMessage(e)}><i class="fas fa-paper-plane"></i></button>
  </form>
)

export default Input;