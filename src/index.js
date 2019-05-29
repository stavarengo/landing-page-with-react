import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Loadable from 'react-loadable';
import { BrowserRouter } from 'react-router-dom';

/**
 * What you put in this file will not be used in the SSR script, so you can make stuffs that required
 * the browser environment.
 */

window.onload = () => {
  Loadable.preloadReady().then(() => {
    const AppComponent = (
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );

    if (process.env.NODE_ENV === 'production') {
      // If we are in production, then it means we are SSR
      ReactDOM.hydrate(AppComponent, document.getElementById('root'));
    } else {
      ReactDOM.render(AppComponent, document.getElementById('root'));
    }
  });
  if (process.env.NODE_ENV === 'production') {
    serviceWorker.register();
  }
};
