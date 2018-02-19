import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { Nav, NavItem, NavLink } from 'reactstrap';
import {
  Nav,
  Navbar,
  NavItem,
  NavLink,
  NavbarBrand,
  NavbarToggler,
  Collapse,
} from 'reactstrap';

interface Props {
}

interface State {
  isOpen: boolean;
}

class GlobalNavbar extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

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
    const links: string[] = [
      'home',
      'signin',
      'signup',
    ];
    return (
      <div style={{ borderStyle: 'solid'}}>
        <Navbar color="faded">
          <NavbarBrand href="public/favicon.ico">reactstrap</NavbarBrand>
          <NavbarToggler onClick={this.toggle} className="mr-2">
            <FontAwesomeIcon icon={['fas', 'bars']} />
          </NavbarToggler>
          <Collapse isOpen={this.state.isOpen} navbar={true}>
            <Nav className="ml-auto" navbar={true}>
            {
              links.map((link, idx) => (
                <NavItem key={idx}>
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
