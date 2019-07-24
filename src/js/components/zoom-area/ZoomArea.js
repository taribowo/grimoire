import React from 'react';
import ZoomButton from './ZoomButton';
import ZoomLevel from './ZoomLevel';

function ZoomArea(props) {
  return (
    <div className='btn-group mr-2'>
      <ZoomButton icon='minus' changeZoomLevel={props.onZoomOut} />
      <ZoomLevel zoomLevel={props.currentZoomLevel} changeZoomLevel={props.onZoomChange} />
      <ZoomButton icon='plus' changeZoomLevel={props.onZoomIn} />
    </div>
  );
}

export default ZoomArea;
