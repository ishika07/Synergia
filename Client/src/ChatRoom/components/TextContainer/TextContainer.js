import React from 'react';
import './TextContainer.css';

const TextContainer = ({ users }) => (
  <div className="textContainer">
    <div>      
    </div>
    {
      users
        ? (
          <div>
            <h1>Online</h1>         
    {/* //Displays User names who are online  */}
            <div className="activeContainer">
            <h2>
              {users.map(({name}) => (
              <div key={name} className="activeItem">
              {name}                   
              </div>
                ))}
            </h2>
             </div>
          </div>
        )
        : null
    }
  </div>
);

export default TextContainer;