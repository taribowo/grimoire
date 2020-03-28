import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Mousetrap from 'mousetrap';

import '../styles/scss/main.scss';
import Toolbar from './Toolbar';
import Pages from './Pages';

import { getAllImagesPath } from '../util/image';
import { naturalCompare } from '../util/sort';
import { CHANGE_ZOOM, OPEN_DIR, SET_DIR_CONTENT } from '../state-handling/actions';

const { webFrame, remote } = window.require('electron');
const currentWindow = remote.getCurrentWindow();
const dialog = remote.dialog;

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    window.$ = window.jQuery = require('jquery');
    require('popper.js');
    require('bootstrap/dist/js/bootstrap');

    Mousetrap.bind('ctrl+o', () => {
      const options = {
        title: 'Open Directory',
        buttonLabel: 'Open',
        properties: ['openDirectory']
      };
      const directory = dialog.showOpenDialogSync(currentWindow, options);
      if (typeof directory !== 'undefined') {
        const content = getAllImagesPath(directory);
        content.sort(naturalCompare);

        webFrame.clearCache();
        dispatch({ type: CHANGE_ZOOM, zoom: { actual: 1, display: '100%' } });
        dispatch({ type: OPEN_DIR, directory: directory[0] });
        dispatch({ type: SET_DIR_CONTENT, content });
        window.scrollTo(0, 0);
      }
    });

    Mousetrap.bind('ctrl+shift+i', () => currentWindow.webContents.openDevTools());
  }, [dispatch]);

  return (
    <div>
      <Toolbar></Toolbar>
      <Pages></Pages>
    </div>
  );
};

export default App;
