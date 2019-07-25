import React from 'react';
import { webFrame, remote } from 'electron';
import Mousetrap from 'mousetrap';

import Toolbar from './Toolbar';
import Pages from './pages/Pages';

import { zoomIn, zoomOut } from '../zoom';

const openMenuOptions = {
  title: 'Open Directory',
  // defaultPath: '/home/aribowo/Pictures',
  buttonLabel: 'Open',
  properties: ['openDirectory']
};

const win = remote.getCurrentWindow();
const dialog = remote.dialog;

class App extends React.Component {
  constructor(props) {
    super(props);
    Mousetrap.bind('ctrl+o', this.openFolder);
    this.state = { zoomLevel: 1, zoomLevelDisplay: '100%', prevZoomLevel: 1, dirPath: '' };
  }

  openFolder = () => {
    dialog.showOpenDialog(win, openMenuOptions, dirPath => {
      if (!typeof something === 'undefined') {
        webFrame.clearCache();
        this.setState(
          {
            zoomLevel: 1,
            zoomLevelDisplay: '100%',
            dirPath: dirPath
          },
          () => window.scrollTo(0, 0)
        );
      }
    });
  };

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
      <div>
        <Toolbar
          currentZoomLevel={this.state.zoomLevelDisplay}
          onZoomIn={this.zoomIn}
          onZoomOut={this.zoomOut}
          onZoomChange={this.changeZoomLevel}
          onOpenFolderClick={this.openFolder}
        />
        <Pages zoomLevel={this.state.zoomLevel} dirPath={this.state.dirPath} />
      </div>
    );
  }
}
export default App;
