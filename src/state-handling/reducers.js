import { combineReducers } from 'redux';
import { INCREMENT_ZOOM, DECREMENT_ZOOM, CHANGE_ZOOM, OPEN_DIR, SET_DIR_CONTENT } from './actions';

const zoomLevel = (state = { actual: 1, display: '100%' }, action) => {
  switch (action.type) {
    case INCREMENT_ZOOM:
      return { ...state, ...action.zoom };
    case DECREMENT_ZOOM:
      return { ...state, ...action.zoom };
    case CHANGE_ZOOM:
      return { ...state, ...action.zoom };
    default:
      return state;
  }
};

const mangaRead = (
  state = {
    directory: '',
    content: []
  },
  action
) => {
  switch (action.type) {
    case OPEN_DIR:
      return { ...state, directory: action.directory };
    case SET_DIR_CONTENT:
      return { ...state, content: action.content };
    default:
      return state;
  }
};

const grimoire = combineReducers({ zoomLevel, mangaRead });

export default grimoire;
