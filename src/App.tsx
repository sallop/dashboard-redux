import * as React from 'react';
import GlobalNavbar from './containers/organisms/GlobalNavbar';
import {
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

import './App.css';
import Router from './Router';
import '@fortawesome/fontawesome-free-solid';
import '@fortawesome/fontawesome-free-brands';
// import FaSamples from './components/atoms/FaSamples';

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
        {/* <FaSamples/> */}
      </div>
    );
  }
}

export default App;
