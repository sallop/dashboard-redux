import * as React from 'react';

import './App.css';
import Router from './Router';
import '@fortawesome/fontawesome-free-solid';
import '@fortawesome/fontawesome-free-brands';

class App extends React.Component {
  render() {
    return (
      <div>
        <Router/>
      </div>
    );
  }
}

export default App;
