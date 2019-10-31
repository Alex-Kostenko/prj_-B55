import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
// import { AppContextProvider } from './appContext';

ReactDOM.render(
  // <AppContextProvider>
    <App />
  // </AppContextProvider>
, document.getElementById('root'));
registerServiceWorker();
