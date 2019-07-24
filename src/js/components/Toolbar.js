import React from 'react';
import ZoomArea from './zoom-area/ZoomArea';
import OpenFolder from './OpenFolder';

function Toolbar(props) {
  return (
    <nav class='navbar navbar-expand-lg sticky-top navbar-light bg-light' style={{ padding: '0.25rem 0.25rem' }}>
      <div className='btn-toolbar' role='toolbar'>
        <OpenFolder icon='folder-open' onOpenFolderClick={props.onOpenFolderClick} />
        <ZoomArea currentZoomLevel={props.currentZoomLevel} onZoomIn={props.onZoomIn} onZoomOut={props.onZoomOut} onZoomChange={props.onZoomChange} />
      </div>
    </nav>
  );
}

export default Toolbar;
