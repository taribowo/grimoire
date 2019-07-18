import React, { useEffect } from 'react';
import { addAllImagesPath } from '../../image';

import { webFrame } from 'electron';

// import Images from './Images';
import ViewportImage from './ViewportImage';

// import { setZoomLevelOnImages, addAllImagesPath } from '../../image';

class Pages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // images: [],
      imagesPath: [] /*,
      imagesWidth: [],
      imagesLoaded: []*/
    };
  }

  componentDidUpdate(prevProp, prevState) {
    if (this.props.dirPath != prevProp.dirPath) {
      this.setState({ imagesPath: addAllImagesPath(this.props.dirPath) /*, images: [] imagesWidth: [], imagesLoaded: []*/ } /*, this.imageHaventLoaded*/);
    } /*else {
      if (this.props.zoomLevel != prevProp.zoomLevel) {
        setZoomLevelOnImages(this.props.zoomLevel, this.state.imagesWidth);
      }
    }*/
  }

  // allImageLoaded = () => {
  //   webFrame.clearCache();
  //   let imagesLoaded = [...this.state.imagesLoaded];
  //   let allImagesLoaded = true;
  //   for (let imageLoaded of imagesLoaded) {
  //     if (!imageLoaded) {
  //       allImagesLoaded = false;
  //     }
  //   }

  //   if (allImagesLoaded) {
  //     // setZoomLevelOnImages(this.props.zoomLevel, this.state.imagesWidth);
  //   }
  // };

  // imageHaventLoaded = () => {
  //   let imagePaths = [...this.state.imagesPath];
  //   let imagesLoaded = [];
  //   let imagesWidth = [];
  //   imagePaths.forEach(() => {
  //     imagesLoaded.push(false);
  //     imagesWidth.push(0);
  //   });
  //   this.setState({
  //     imagesLoaded: imagesLoaded,
  //     imagesWidth: imagesWidth
  //   });
  // };

  // setInitialImagesWidth = e => {
  //   console.log('called');
  //   let imagesWidth = [...this.state.imagesWidth];
  //   imagesWidth[e.target.dataset.index] = e.target.width;
  //   let imagesLoaded = [...this.state.imagesLoaded];
  //   imagesLoaded[e.target.dataset.index] = true;
  //   this.setState(
  //     {
  //       imagesLoaded: imagesLoaded,
  //       imagesWidth: imagesWidth
  //     },
  //     this.allImageLoaded
  //   );
  // };

  render() {
    let items = [];
    let imagePaths = [...this.state.imagesPath];
    imagePaths.forEach((imagePath, index) => {
      // let image = <Images setInitialImageWidth={this.setInitialImagesWidth} index={index} src={imagePath} key={imagePath} />;
      let image = (
        <ViewportImage
          index={index}
          src={imagePath}
          key={imagePath}
          zoomLevel={this.props.zoomLevel}
          // setInitialImageWidth={this.setInitialImagesWidth}
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
