import * as React from 'react';
import './App.css';
import '@fortawesome/fontawesome-free-solid';
import '@fortawesome/fontawesome-free-brands';
import FaSamples from './components/atoms/FaSamples';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <FaSamples/>
      </div>
    );
  }
}

export default App;
