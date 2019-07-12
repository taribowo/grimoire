import React from 'react';
import ZoomButton from './ZoomButton';
import ZoomLevel from './ZoomLevel';
import { zoomIn, zoomOut } from '../../zoom';

class ZoomArea extends React.Component {
  constructor(props) {
    super(props);

    this.state = { zoomLevel: 1, zoomLevelDisplay: '100%' };
  }

  zoomIn = () => {
    let nextZoom = zoomIn(this.state.zoomLevel);
    this.setState({
      zoomLevel: nextZoom.nextZoomLevel,
      zoomLevelDisplay: nextZoom.nextZoomLevelDisplay
    });
  };

  zoomOut = () => {
    let nextZoom = zoomOut(this.state.zoomLevel);
    this.setState({
      zoomLevel: nextZoom.nextZoomLevel,
      zoomLevelDisplay: nextZoom.nextZoomLevelDisplay
    });
  };

  changeZoomLevel = nextZoomLevel => {
    this.setState({
      zoomLevel: nextZoomLevel.actual,
      zoomLevelDisplay: nextZoomLevel.display
    });
  };

  render() {
    return (
      <div className='btn-group'>
        <ZoomButton icon='minus' changeZoomLevel={this.zoomOut} />
        <ZoomLevel zoomLevel={this.state.zoomLevelDisplay} changeZoomLevel={this.changeZoomLevel} />
        <ZoomButton icon='plus' changeZoomLevel={this.zoomIn} />
      </div>
    );
  }
}

export default ZoomArea;
