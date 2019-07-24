import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function ZoomButton(props) {
  return (
    <button type='button' className='btn btn-primary btn-xs' onClick={props.changeZoomLevel}>
      <FontAwesomeIcon icon={props.icon} />
    </button>
  );
}

export default ZoomButton;
