import React from 'react';

function Images(props) {
  return (
    <li className='list-group-item'>
      <img onLoad={props.setInitialImageWidth} data-index={props.index} src={props.src} />
    </li>
  );
}

export default Images;
