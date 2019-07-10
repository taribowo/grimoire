import React from 'react';
import ZoomButton from './ZoomButton';

function ZoomArea(props) {
  return (
    <div>
      <ZoomButton text='+' />
      <ZoomButton text='-' />
    </div>
  );
}

export default ZoomArea;
