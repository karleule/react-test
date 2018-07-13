import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Game from './game';
import ImpressComponent from './impress'
import registerServiceWorker from './registerServiceWorker';

// ========================================

ReactDOM.render(
  <ImpressComponent />,
  document.getElementById('root')
);

registerServiceWorker()
