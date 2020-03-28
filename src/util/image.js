import path from 'path';
const fs = window.require('fs');

let ALLOWED_FILE_EXTENSION = ['.jpg', '.png', '.gif'];

function getAllImagesPath(directory) {
  let images = [];
  fs.readdirSync(directory.toString()).forEach(file => {
    if (ALLOWED_FILE_EXTENSION.includes(path.extname(file))) {
      images.push(directory + '\\' + file);
    }
  });

  return images;
}

export { getAllImagesPath };
