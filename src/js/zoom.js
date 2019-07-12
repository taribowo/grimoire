import { Decimal } from 'decimal.js';

const DECIMAL_STEP = new Decimal(0.1);
const MIN_ZOOM = new Decimal(0.1);
const MAX_ZOOM = new Decimal(2);

function zoomIn(zoomLevel) {
  let result = {};
  let currentZoomLevel = new Decimal(zoomLevel);

  if (currentZoomLevel.gte(MIN_ZOOM) && currentZoomLevel.lt(MAX_ZOOM)) {
    let nextZoomLevel = currentZoomLevel.add(DECIMAL_STEP);

    result.nextZoomLevel = nextZoomLevel.toNumber();
    result.nextZoomLevelDisplay = nextZoomLevel.mul(100).toNumber() + '%';
  } else {
    result.nextZoomLevel = currentZoomLevel.toNumber();
    result.nextZoomLevelDisplay = currentZoomLevel.mul(100).toNumber() + '%';
  }

  return result;
}

function zoomOut(zoomLevel) {
  let result = {};
  let currentZoomLevel = new Decimal(zoomLevel);

  if (currentZoomLevel.gt(MIN_ZOOM) && currentZoomLevel.lte(MAX_ZOOM)) {
    let nextZoomLevel = currentZoomLevel.minus(DECIMAL_STEP);

    result.nextZoomLevel = nextZoomLevel.toNumber();
    result.nextZoomLevelDisplay = nextZoomLevel.mul(100).toNumber() + '%';
  } else {
    result.nextZoomLevel = currentZoomLevel.toNumber();
    result.nextZoomLevelDisplay = currentZoomLevel.mul(100).toNumber() + '%';
  }

  return result;
}

export { zoomIn, zoomOut };
