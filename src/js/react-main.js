import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

import { library } from '@fortawesome/fontawesome-svg-core';
// import { fab } from '@fortawesome/free-brands-svg-icons'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

import '../styles/scss/main.scss';

import 'jquery';
import 'popper.js';
import 'bootstrap';

library.add(faPlus, faMinus);
ReactDOM.render(<App />, document.getElementById('app'));
