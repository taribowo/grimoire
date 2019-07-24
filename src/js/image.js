import fs from 'fs';
import path from 'path';

let ALLOWED_FILE_EXTENSION = ['.jpg', '.png', '.gif'];

function addAllImagesPath(dirPath) {
  let images = [];
  fs.readdirSync(dirPath.toString()).forEach(file => {
    if (ALLOWED_FILE_EXTENSION.includes(path.extname(file))) {
      images.push(dirPath + '\\' + file);
    }
  });

  return images;
}

export { addAllImagesPath };
