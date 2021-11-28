import React from 'react';
import ScrollToBottom from 'react-scroll-to-bottom';
import Message from './Message/Message';
import './Messages.css';
 
// Separate Messages component to handle multiple messages
const Messages = ({ messages, name }) => (
  <ScrollToBottom className="messages">
    {messages.map((message, i) => <div key={i}><Message message={message} name={name}/></div>)}
    {/* Mapped through the messages state variable */}
    {/* Specified the key as the index to avoid react error */}
  </ScrollToBottom>
);

export default Messages;