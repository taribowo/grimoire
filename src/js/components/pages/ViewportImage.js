import React from 'react';
import handleViewport from 'react-in-viewport';
import sizeOf from 'image-size';
import { Decimal } from 'decimal.js';

const Image = props => {
  const { inViewport, innerRef } = props;
  let imgDimension = sizeOf(props.src);
  let imageWidth = new Decimal(imgDimension.width).mul(new Decimal(props.zoomLevel)).toNumber();
  let imageHeight = new Decimal(imgDimension.height).mul(new Decimal(props.zoomLevel)).toNumber();
  if (inViewport) {
    let imageStyle = {
      width: imageWidth + 'px',
      height: imageHeight + 'px'
    };
    return (
      <li className='list-group-item mb-3' ref={innerRef}>
        <img data-index={props.index} src={props.src} className='mx-auto d-block' style={imageStyle} />
      </li>
    );
  } else {
    let placeHolderStyle = {
      width: imageWidth + 'px',
      height: imageHeight + 'px',
      border: '1px solid white',
      'background-color': '#fff'
    };
    return (
      <li className='list-group-item mb-3' ref={innerRef}>
        <div style={placeHolderStyle} className='clearfix mx-auto d-block' />
      </li>
    );
  }
};

const ViewportImage = handleViewport(Image, { threshold: 0.01 });

export default ViewportImage;
