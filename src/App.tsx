import * as React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import './App.css';
import Router from './Router';

class App extends React.Component {
  render() {
    return (
      <div>
        <Router/>
        <p>List Based</p>
        <Nav vertical={true}>
          <NavItem>
            <NavLink href="#">Link 1</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Link 2</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Link 3</NavLink>
          </NavItem>
        </Nav>
      </div>
    );
  }
}

export default App;
