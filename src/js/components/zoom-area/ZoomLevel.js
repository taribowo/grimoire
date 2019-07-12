import React from 'react';

const zoomLevelOptions = [
  { actual: 2, display: '200%' },
  { actual: 1.9, display: '190%' },
  { actual: 1.8, display: '180%' },
  { actual: 1.7, display: '170%' },
  { actual: 1.6, display: '160%' },
  { actual: 1.5, display: '150%' },
  { actual: 1.4, display: '140%' },
  { actual: 1.3, display: '130%' },
  { actual: 1.2, display: '120%' },
  { actual: 1.1, display: '110%' },
  { actual: 1, display: '100%' },
  { actual: 0.9, display: '90%' },
  { actual: 0.8, display: '80%' },
  { actual: 0.7, display: '70%' },
  { actual: 0.6, display: '60%' },
  { actual: 0.5, display: '50%' },
  { actual: 0.4, display: '40%' },
  { actual: 0.3, display: '30%' },
  { actual: 0.2, display: '20%' },
  { actual: 0.1, display: '10%' }
];

function ZoomLevel(props) {
  let zoomLevelOptionsDom = zoomLevelOptions.map(zoomLevelOption => (
    <a
      className={zoomLevelOption.display == props.zoomLevel ? 'dropdown-item active' : 'dropdown-item'}
      href='#'
      onClick={() => props.changeZoomLevel(zoomLevelOption)}>
      {zoomLevelOption.display}
    </a>
  ));

  return (
    <div className='btn-group'>
      <button
        className='btn btn-info btn-sm dropdown-toggle navbar-dropdown'
        type='button'
        id='zoomLevel'
        data-toggle='dropdown'
        aria-haspopup='true'
        aria-expanded='false'>
        {props.zoomLevel}
      </button>
      <div className='dropdown-menu' aria-labelledby='zoomLevel'>
        {zoomLevelOptionsDom}
      </div>
    </div>
  );
}

export default ZoomLevel;
