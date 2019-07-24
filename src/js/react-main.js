import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faPlus, faMinus, faFolderOpen } from '@fortawesome/free-solid-svg-icons';

import '../styles/scss/main.scss';

import 'jquery';
import 'popper.js';
import 'bootstrap';

library.add(faPlus, faMinus, faFolderOpen);

ReactDOM.render(<App />, document.getElementById('app'));
