import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import './App.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import LangProvider from './components/context';
import './i18n';


ReactDOM.render(
  <LangProvider>
    <App />
  </LangProvider>
, document.getElementById('root'));
registerServiceWorker();
