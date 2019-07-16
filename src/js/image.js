import fs from 'fs';
import path from 'path';
import React from 'react';
import { Decimal } from 'decimal.js';

let ALLOWED_FILE_EXTENSION = ['.jpg', '.png', '.gif'];

function addAllImages(dirPath) {
  let images = [];
  fs.readdirSync(dirPath.toString()).forEach(file => {
    if (ALLOWED_FILE_EXTENSION.includes(path.extname(file))) {
      images.push(
        <li className='list-group-item'>
          <img src={dirPath + '\\' + file} />
        </li>
      );
    }
  });

  return images;
}

function addAllImagesPath(dirPath) {
  let images = [];
  fs.readdirSync(dirPath.toString()).forEach(file => {
    if (ALLOWED_FILE_EXTENSION.includes(path.extname(file))) {
      images.push(dirPath + '\\' + file);
    }
  });

  return images;
}

function setZoomLevelOnImages(currentZoomLevel, imagesWidth) {
  let currentZoomLevelDecimal = new Decimal(currentZoomLevel);
  let imageList = document.getElementById('images');
  let images = Array.from(imageList.getElementsByTagName('img'));
  for (let [key, image] of images.entries()) {
    image.width = currentZoomLevelDecimal.mul(new Decimal(imagesWidth[key])).toNumber();
  }
}

export { addAllImages, addAllImagesPath, setZoomLevelOnImages };
