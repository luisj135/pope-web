import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  children: PropTypes.element,
};

const App = ({ children }) => (
  <main>
    {children}
  </main>
);

App.propTypes = propTypes;

export default App;
