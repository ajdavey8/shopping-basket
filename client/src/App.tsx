import React from 'react';
import {
  BrowserRouter as Router,
} from 'react-router-dom';
import Routes from './routes';

import GlobalStyles from './components/GlobalStyles';
import { BasketProvider } from './contexts/basketContext';

const App = () => (
  <BasketProvider>
    <Router>
      <GlobalStyles />
      <Routes />
    </Router>
  </BasketProvider>
);

export default App;
