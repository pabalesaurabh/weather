import React from 'react';
import ReactDOM from 'react-dom';

const Spinner = (props) => {

  return (
      <div className="ui active dimmer">
      <div className="ui large text loader">{props.message}</div>
    </div>
   
  );

};

export default Spinner;