import * as React from 'react';
import urls from '../../utils/urls';
import './GlobalNavbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { Logo } from './logo.svg'; // you get React component
import logo from './logo.svg';
// import { default as Logo } from './logo.svg'; // svg url or base64 encoded data url
import {
  Nav,
  Navbar,
  NavItem,
  NavLink,
  NavbarBrand,
  NavbarToggler,
  Collapse,
} from 'reactstrap';

import { History } from 'history';

interface Props {
  history: History;
  idToken?: string;
  // profile: Profile;
  // actions: {
  //   loginRequest: typeof loginRequest,
  //   handleLogout: typeof handleLogout,
  // };
}

interface State {
  isOpen: boolean;
}

class GlobalNavbar extends React.Component<Props, State> {

  constructor(props: Props, state: State) {
    super(props);

    this.login = this.login.bind(this);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
    // this.state = { {} as State } // initial state
    // this.setState({} as State)
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    } as State);
  }

  render() {
    const links = urls;
    return (
      <div className="global-navbar" style={{ borderStyle: 'solid'}}>
        <Navbar color="faded">
          <NavbarBrand className="global-navbar__brand" href="/">
            <img src={logo} alt="logo" height="42" width="42"/>
          </NavbarBrand>
          <NavbarToggler className="mr-2" onClick={this.toggle}>
            <FontAwesomeIcon icon={['fas', 'bars']} />
          </NavbarToggler>
          <Collapse isOpen={this.state.isOpen} navbar={true}>
            <Nav className="ml-auto" navbar={true}>
            {
              links.map((link, idx) => (
                <NavItem className="global-navbar__item" key={idx}>
                  <NavLink key={idx} className="nav-link" href={link}>{link}</NavLink>
                </NavItem>
              ))
            }
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default GlobalNavbar;
