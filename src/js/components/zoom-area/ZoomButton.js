import React from 'react';

function ZoomButton(props) {
  return (
    <button className='zoom-button' onClick={props.changeZoomLevel}>
      {props.text}
    </button>
  );
}

export default ZoomButton;
