import React, { useState } from 'react';
import { Link } from "react-router-dom";
import {Input,Button} from 'antd'
import './Join.css';

export default function SignIn() {
  const [name, setName] = useState('');//Takes in User Name
  const [room, setRoom] = useState('');//Takes in ChatRoom Name

  return (
    <div className="joinOuterContainer join-main">
      <div className='join-svg' style={{ overflow: 'hidden',position:'absolute',zIndex:-1}}></div>

      <div className="joinInnerContainer">
        <h1 className="heading">Join</h1>
        <div>
          <Input placeholder="Name" className="joinInput" type="text" onChange={(event) => setName(event.target.value)} />
        </div>
        <div>
          <Input placeholder="Room" className="joinInput mt-20" type="text" onChange={(event) => setRoom(event.target.value)} />
        </div>
        <Link onClick={e => (!name || !room) ? e.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}>
          <button className={'button mt-20'} type="submit">Sign In</button>
        </Link>
      </div>
    </div>
  );
}
