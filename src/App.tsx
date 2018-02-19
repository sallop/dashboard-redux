import * as React from 'react';
// import * as GlobalNavbar from './containers/organisms/GlobalNavbar';
import GlobalNavbar from './containers/organisms/GlobalNavbar';
// import { Nav, NavItem, NavLink } from 'reactstrap';
import {
  Nav,
  // Navbar,
  NavItem,
  NavLink,
  // NavbarBrand,
  // NavbarToggler,
  // Collapse,
} from 'reactstrap';

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
        <GlobalNavbar />
        <Router/>
        <p>List Based</p>
        <Nav vertical={true}>
          {
            links.map((link, idx) => (
              <NavItem key={idx}>
                <NavLink key={'link' + idx} href={link}>{link}</NavLink>
              </NavItem>
            ))
          }
        </Nav>
      </div>
    );
  }
}

export default App;
