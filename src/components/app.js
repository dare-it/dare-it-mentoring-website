import { h } from 'preact';
import { Router } from 'preact-router';

import Home from '../routes/home';
import Info from '../routes/info';

import translationsPersonalData from './translationsPersonalData';

export default () => (
  <div id="app">
    <Router>
      <Info path="/dane-osobowe" {...translationsPersonalData} />

      <Home path="/" />
    </Router>
  </div>
);
