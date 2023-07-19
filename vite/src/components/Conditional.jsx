const style = {
  color: 'green',
  fontSize: '30px',
  backGroundColor: 'green',
};

import React from 'react';
import {useState} from 'react';

function Conditional() {
  const [display, Setdisplay] = useState(true);
  if (display) {
    return (
      <div>
        <h1 style={style}>This is a true statement</h1>
      </div>
    );
  } else {
    return (
      <div>
        <h1>this is not true statement</h1>
      </div>
    );
  }
}

export default Conditional;
