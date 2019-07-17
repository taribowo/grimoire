import React from 'react';
import LazyLoad from 'react-lazyload';

import sizeOf from 'image-size';

function Images(props) {
  let imgDimension = sizeOf(props.src);
  let placeHolderStyle = {
    height: imgDimension.height + 'px',
    width: imgDimension.width + 'px',
    border: '1px solid white'
  };
  return (
    <li className='list-group-item'>
      <LazyLoad
        offset={0}
        height={imgDimension.height}
        placeholder={<div className='clearfix mx-auto d-block' style={placeHolderStyle} />}
        unmountIfInvisible
        debounce>
        <img onLoad={props.setInitialImageWidth} data-index={props.index} src={props.src} className='mx-auto d-block' />
      </LazyLoad>
    </li>
  );
}

export default Images;
