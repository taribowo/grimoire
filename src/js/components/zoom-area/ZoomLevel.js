import React from 'react';

function ZoomLevel(props) {
  return (
    <div className='btn-group'>
      <button class='btn btn-info btn-sm dropdown-toggle navbar-dropdown' type='button' id='zoomLevel' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>
        {props.zoomLevel}
      </button>
      <div class='dropdown-menu' aria-labelledby='zoomLevel'>
        <a class='dropdown-item' href='#'>
          Action
        </a>
        <a class='dropdown-item' href='#'>
          Another action
        </a>
        <a class='dropdown-item' href='#'>
          Something else here
        </a>
      </div>
    </div>
  );
}

export default ZoomLevel;
