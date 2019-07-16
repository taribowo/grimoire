import React from 'react';
import ZoomArea from './zoom-area/ZoomArea';

function Toolbar(props) {
  return (
    <nav class='navbar navbar-expand-lg sticky-top navbar-light bg-light'>
      <ZoomArea currentZoomLevel={props.currentZoomLevel} onZoomIn={props.onZoomIn} onZoomOut={props.onZoomOut} onZoomChange={props.onZoomChange} />
    </nav>
  );
}

export default Toolbar;
