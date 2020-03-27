import { Decimal } from 'decimal.js';

const DECIMAL_STEP = new Decimal(0.1);
const MIN_ZOOM = new Decimal(0.1);
const MAX_ZOOM = new Decimal(2);

const increment = zoom => {
  const currentZoomLevel = new Decimal(zoom);

  if (currentZoomLevel.gte(MIN_ZOOM) && currentZoomLevel.lt(MAX_ZOOM)) {
    const nextZoomLevel = currentZoomLevel.add(DECIMAL_STEP);

    return { actual: nextZoomLevel.toNumber(), display: nextZoomLevel.mul(100).toNumber() + '%' };
  } else {
    return { actual: currentZoomLevel.toNumber(), display: currentZoomLevel.mul(100).toNumber() + '%' };
  }
};

const decrement = zoom => {
  const currentZoomLevel = new Decimal(zoom);

  if (currentZoomLevel.gt(MIN_ZOOM) && currentZoomLevel.lte(MAX_ZOOM)) {
    const nextZoomLevel = currentZoomLevel.minus(DECIMAL_STEP);

    return { actual: nextZoomLevel.toNumber(), display: nextZoomLevel.mul(100).toNumber() + '%' };
  } else {
    return { actual: currentZoomLevel.toNumber(), display: currentZoomLevel.mul(100).toNumber() + '%' };
  }
};

const isMaxZoom = zoom => new Decimal(zoom).eq(MAX_ZOOM);
const isMinZoom = zoom => new Decimal(zoom).eq(MIN_ZOOM);

export { increment, decrement, isMinZoom, isMaxZoom };
