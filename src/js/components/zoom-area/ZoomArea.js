import React from 'react';
import { Decimal } from 'decimal.js';
import ZoomButton from './ZoomButton';
import ZoomLevel from './ZoomLevel';

let decimalStep = new Decimal(0.1);

class ZoomArea extends React.Component {
  constructor(props) {
    super(props);

    this.state = { zoomLevel: 1, displayZoomLevel: '100%' };
  }

  zoomIn = () => {
    let currentZoomLevel = new Decimal(this.state.zoomLevel);
    let nextZoomLevel = currentZoomLevel.add(decimalStep);
    this.setState({
      zoomLevel: nextZoomLevel.toNumber(),
      displayZoomLevel: nextZoomLevel.mul(100).toNumber() + '%'
    });
  };

  zoomOut = () => {
    let currentZoomLevel = new Decimal(this.state.zoomLevel);
    let nextZoomLevel = currentZoomLevel.minus(decimalStep);
    this.setState({
      zoomLevel: nextZoomLevel.toNumber(),
      displayZoomLevel: nextZoomLevel.mul(100).toNumber() + '%'
    });
  };

  render() {
    return (
      <div className='btn-group'>
        <ZoomButton icon='minus' changeZoomLevel={this.zoomOut} />
        <ZoomLevel zoomLevel={this.state.displayZoomLevel} />
        <ZoomButton icon='plus' changeZoomLevel={this.zoomIn} />
      </div>
    );
  }
}

export default ZoomArea;
