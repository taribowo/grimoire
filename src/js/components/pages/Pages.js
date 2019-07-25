import React from 'react';
import { addAllImagesPath } from '../../image';

import { webFrame } from 'electron';

import ViewportImage from './ViewportImage';

import naturalCompare from '../../sort';

class Pages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imagesPath: []
    };
  }

  componentDidUpdate(prevProp) {
    if (this.props.dirPath != prevProp.dirPath) {
      let imagesPath = addAllImagesPath(this.props.dirPath);
      imagesPath.sort(naturalCompare);

      this.setState({ imagesPath: imagesPath });
    }
  }

  render() {
    let items = [];
    let imagePaths = [...this.state.imagesPath];
    imagePaths.forEach((imagePath, index) => {
      let image = (
        <ViewportImage
          index={index}
          src={imagePath}
          key={imagePath}
          zoomLevel={this.props.zoomLevel}
          onLeaveViewport={() => {
            webFrame.clearCache();
          }}
        />
      );
      items.push(image);
    });
    return (
      <ul className='list-unstyled list-group' id='images'>
        {items}
      </ul>
    );
  }
}

export default Pages;
