import React from 'react';
import '../../styles/toolbar.css';
import ZoomArea from './zoom-area/ZoomArea';

function Toolbar(props) {
  return (
    <div className='toolbar'>
      <ZoomArea />
    </div>
  );
}

export default Toolbar;
