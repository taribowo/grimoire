import React from 'react';
// import '../../styles/toolbar.css';
import ZoomArea from './zoom-area/ZoomArea';

function Toolbar(props) {
  return (
    // <div className='toolbar'>
    //   <ZoomArea />
    // </div>
    <nav class='navbar navbar-expand-lg sticky-top navbar-light bg-light'>
      <ZoomArea />
    </nav>
  );
}

export default Toolbar;
