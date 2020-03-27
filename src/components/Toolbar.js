import React, { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { webFrame, remote } from 'electron';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolderOpen, faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';

import { increment, decrement, isMinZoom, isMaxZoom } from '../util/zoom';
import { INCREMENT_ZOOM, DECREMENT_ZOOM, CHANGE_ZOOM, OPEN_DIR } from '../state-handling/actions';

const zoomLevelOptions = [
  { actual: 2, display: '200%' },
  { actual: 1.9, display: '190%' },
  { actual: 1.8, display: '180%' },
  { actual: 1.7, display: '170%' },
  { actual: 1.6, display: '160%' },
  { actual: 1.5, display: '150%' },
  { actual: 1.4, display: '140%' },
  { actual: 1.3, display: '130%' },
  { actual: 1.2, display: '120%' },
  { actual: 1.1, display: '110%' },
  { actual: 1, display: '100%' },
  { actual: 0.9, display: '90%' },
  { actual: 0.8, display: '80%' },
  { actual: 0.7, display: '70%' },
  { actual: 0.6, display: '60%' },
  { actual: 0.5, display: '50%' },
  { actual: 0.4, display: '40%' },
  { actual: 0.3, display: '30%' },
  { actual: 0.2, display: '20%' },
  { actual: 0.1, display: '10%' }
];

const currentWindow = remote.getCurrentWindow();
const dialog = remote.dialog;

const Toolbar = () => {
  const zoom = useSelector(state => state.zoomLevel.actual);
  const display = useSelector(state => state.zoomLevel.display);
  const dispatch = useDispatch();

  // const inputFile = useRef(null);

  const plus = () => {
    const nextZoomLevel = increment(zoom);
    dispatch({ type: INCREMENT_ZOOM, zoom: nextZoomLevel });
  };

  const minus = () => {
    const nextZoomLevel = decrement(zoom);
    dispatch({ type: DECREMENT_ZOOM, zoom: nextZoomLevel });
  };

  const setZoomTo = nextZoomLevel => {
    dispatch({ type: CHANGE_ZOOM, zoom: nextZoomLevel });
  };

  const openDir = () => {
    const options = {
      title: 'Open Directory',
      buttonLabel: 'Open',
      properties: ['openDirectory']
    };

    dialog.showOpenDialog(currentWindow, options, directory => {
      if (directory) {
        webFrame.clearCache();
        dispatch({ type: CHANGE_ZOOM, zoom: { actual: 1, display: '100%' } });
        dispatch({ type: OPEN_DIR, directory });
        // this.setState(
        //   {
        //     zoomLevel: 1,
        //     zoomLevelDisplay: '100%',
        //     dirPath: dirPath
        //   },
        //   () => window.scrollTo(0, 0)
        // );
      }
    });
  };

  return (
    <nav className='navbar navbar-expand-lg sticky-top navbar-light bg-light' style={{ padding: '0.25rem 0.25rem' }}>
      <div className='btn-toolbar' role='toolbar'>
        <div className='btn-group mr-2'>
          <button type='button' className='btn btn-primary btn-xs' onClick={() => openDir()}>
            <FontAwesomeIcon icon={faFolderOpen} />
          </button>
          {/* <input type='file' ref={inputFile} style={{ display: 'none' }} webkitdirectory='true'></input> */}
        </div>
        <div className='btn-group mr-2'>
          <button type='button' className='btn btn-primary btn-xs' onClick={() => minus()} disabled={isMinZoom(zoom)}>
            <FontAwesomeIcon icon={faMinus} />
          </button>
          <div className='btn-group'>
            <button
              className='btn btn-info btn-xs dropdown-toggle navbar-dropdown'
              type='button'
              id='zoomLevel'
              data-toggle='dropdown'
              aria-haspopup='true'
              aria-expanded='false'>
              {display}
            </button>
            <div className='dropdown-menu' aria-labelledby='zoomLevel'>
              {zoomLevelOptions.map((zoomLevelOption, index) => (
                <a
                  key={index}
                  className={zoomLevelOption.display === display ? 'dropdown-item active' : 'dropdown-item'}
                  onClick={() => setZoomTo(zoomLevelOption)}
                  href='#'>
                  {zoomLevelOption.display}
                </a>
              ))}
            </div>
          </div>
          <button type='button' className='btn btn-primary btn-xs' onClick={() => plus()} disabled={isMaxZoom(zoom)}>
            <FontAwesomeIcon icon={faPlus} />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Toolbar;
