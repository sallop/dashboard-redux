import * as React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import './App.css';
import Router from './Router';

class App extends React.Component {
  render() {
    const links: string[] = [
      'home',
      'signin',
      'signup',
    ];
    return (
      <div>
        <Router/>
        <p>List Based</p>
        <Nav vertical={true}>
          {
            links.map((link, idx) => (
              <NavItem key={idx}>
                <NavLink href={link}>{link}</NavLink>
              </NavItem>
            ))
          }

        </Nav>
      </div>
    );
  }
}

export default App;
