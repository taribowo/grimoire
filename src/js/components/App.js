import React from 'react';
import { ipcRenderer } from 'electron';

import Toolbar from './Toolbar';
import Pages from './pages/Pages';

import { zoomIn, zoomOut } from '../zoom';
import { getAllImagesWidth } from '../image';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { zoomLevel: 1, zoomLevelDisplay: '100%', prevZoomLevel: 1, dirPath: '' };
  }

  componentDidMount() {
    ipcRenderer.on('DIR_OPENED', (event, message) => {
      this.setState({
        zoomLevel: 1,
        zoomLevelDisplay: '100%',
        prevZoomLevel: 1,
        dirPath: message
      });
    });
  }

  // componentDidUpdate(prevState) {
  //   if(this.state.dirPath != prevState.dirPath) {
  //     thi
  //   }
  // }

  zoomIn = () => {
    let prevZoomLevel = this.state.zoomLevel;
    let nextZoom = zoomIn(this.state.zoomLevel);
    this.setState({
      prevZoomLevel: prevZoomLevel,
      zoomLevel: nextZoom.nextZoomLevel,
      zoomLevelDisplay: nextZoom.nextZoomLevelDisplay
    });
  };

  zoomOut = () => {
    let prevZoomLevel = this.state.zoomLevel;
    let nextZoom = zoomOut(this.state.zoomLevel);
    this.setState({
      prevZoomLevel: prevZoomLevel,
      zoomLevel: nextZoom.nextZoomLevel,
      zoomLevelDisplay: nextZoom.nextZoomLevelDisplay
    });
  };

  changeZoomLevel = nextZoomLevel => {
    let prevZoomLevel = this.state.zoomLevel;
    this.setState({
      prevZoomLevel: prevZoomLevel,
      zoomLevel: nextZoomLevel.actual,
      zoomLevelDisplay: nextZoomLevel.display
    });
  };

  render() {
    return (
      <div>
        <Toolbar currentZoomLevel={this.state.zoomLevelDisplay} onZoomIn={this.zoomIn} onZoomOut={this.zoomOut} onZoomChange={this.changeZoomLevel} />
        <Pages zoomLevel={this.state.zoomLevel} dirPath={this.state.dirPath} />
      </div>
    );
  }
}
export default App;
