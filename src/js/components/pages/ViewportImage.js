import React from 'react';
import handleViewport from 'react-in-viewport';
import sizeOf from 'image-size';
import { Decimal } from 'decimal.js';

// function Images(props) {
//   return (
//     <li className='list-group-item'>
//       <img onLoad={props.setInitialImageWidth} data-index={props.index} src={props.src} className='mx-auto d-block' />
//     </li>
//   );
// }

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
      <li className='list-group-item' ref={innerRef}>
        <img /*onLoad={props.setInitialImageWidth}*/ data-index={props.index} src={props.src} className='mx-auto d-block' style={imageStyle} />
      </li>
    );
  } else {
    let placeHolderStyle = {
      width: imageWidth + 'px',
      height: imageHeight + 'px',
      border: '1px solid white'
    };
    return (
      <li className='list-group-item' ref={innerRef}>
        <div style={placeHolderStyle} className='clearfix mx-auto d-block' />
      </li>
    );
  }
};

const ViewportImage = handleViewport(Image, { threshold: 0.1 });

export default ViewportImage;
