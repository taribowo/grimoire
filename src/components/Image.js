import React from 'react';
import { useSelector } from 'react-redux';
import useNativeLazyLoading from '@charlietango/use-native-lazy-loading';
import { useInView } from 'react-intersection-observer';
import path from 'path';
import { Decimal } from 'decimal.js';

const sizeOf = window.require('image-size');

const Image = ({ src, last }) => {
  const zoom = useSelector(state => state.zoomLevel.actual);
  const supportsLazyLoading = useNativeLazyLoading();
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: '0px 0px 200px 0px'
  });

  const dimension = sizeOf(src);
  const alt = path.basename(src);
  const heightToWidthProportion = dimension.height / dimension.width;
  const widthThreshold = document.body.clientWidth - 69;
  const width =
    dimension.width > widthThreshold
      ? new Decimal(widthThreshold).mul(new Decimal(zoom)).toNumber()
      : new Decimal(dimension.width).mul(new Decimal(zoom)).toNumber();
  const height =
    dimension.width > widthThreshold
      ? new Decimal(heightToWidthProportion * widthThreshold).mul(new Decimal(zoom)).toNumber()
      : new Decimal(dimension.height).mul(new Decimal(zoom)).toNumber();

  return (
    <div
      ref={!supportsLazyLoading ? ref : undefined}
      className='mx-auto'
      style={{
        position: 'relative',
        marginBottom: last ? '0px' : '20px',
        width: width + 'px',
        height: height + 'px'
      }}>
      {inView || supportsLazyLoading ? (
        <img src={src} alt={alt} width={width} height={height} loading='lazy' style={{ position: 'absolute', width: '100%' }} />
      ) : null}
    </div>
  );
};

export default Image;
