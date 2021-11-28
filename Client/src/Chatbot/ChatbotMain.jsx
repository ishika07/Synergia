import React,{useState} from 'react'
import Chatbot from 'react-chatbot-kit'
import ActionProvider from './ActionProvider';
import MessageParser from './MessageParser';
import {Button} from 'antd'
import config from './config';
import '../components/home.css'



// ----Initializing the Chatbot----
function ChatbotMain() {

  const [toggle,setToggle] = useState(false)
  console.log('toggle ',toggle);

  const buttonStyle ={
    borderRadius:"50%",
    height:"4.7rem",
    position: "fixed",
    bottom: "10px",
    right: "2rem", 
    backgroundColor:'darkorange'
  }

  const collapseButton={
    position: "absolute",
    bottom: "4.5rem",
    right: "2rem",        
    zIndex:100
  }

  return (
    <>
      {toggle &&
        ( <div style={{position:'absolute',zIndex:100}} className="collapse" style={collapseButton} id="collapseExample">
        <Chatbot config={config} actionProvider={ActionProvider} messageParser={MessageParser} />
      </div>)
      }
     
      <Button className='hvr-float-shadow' type='primary' style={buttonStyle} onClick={(e)=>{
        e.preventDefault()
        setToggle(!toggle)
      }}>
      ChatBot
  </Button>
    </>
  )
}

export default ChatbotMain