import React, { useEffect } from 'react';

import '../styles/scss/main.scss';
import Toolbar from './Toolbar';

const App = () => {
  useEffect(() => {
    window.$ = window.jQuery = require('jquery');
    require('popper.js');
    require('bootstrap/dist/js/bootstrap');
  });

  return (
    <div>
      <Toolbar></Toolbar>
    </div>
  );
};

export default App;
