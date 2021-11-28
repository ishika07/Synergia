import React from 'react';
import './errors.css';
//Display errors when condition not met.
function Errors(props) {
  return (
    <div className="error">
      {props.message}
      <button onClick={props.clearError}>X</button>
    </div>
  );
}

export default Errors;
