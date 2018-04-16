import * as React from 'react';
// import { NavLink } from 'react-router-dom';
import urls from '../../utils/urls';
import './GlobalNavbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { Logo } from './logo.svg'; // you get React component
import logo from './logo.svg';
// import { default as Logo } from './logo.svg'; // svg url or base64 encoded data url
import * as auth0 from 'auth0-js';
// import { loginRequest, logoutRequest } from '../../actions';
import { Action, loginUser, logoutRequest } from '../../actions';
import { GlobalState } from '../../reducers';

import {
  Nav,
  Navbar,
  NavItem,
  NavLink,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Button, 
} from 'reactstrap';

// import { History } from 'history';

import { connect, Dispatch } from 'react-redux';
import { bindActionCreators } from 'redux';

interface Props {
  // history: History;
  idToken?: string;
  // profile: Profile;
  profile: auth0.Auth0UserProfile;
  actions: {
    // handleLogin: typeof loginRequest,
    handleLogin: typeof loginUser,
    handleLogout: typeof logoutRequest,
  };
}

interface State {
  isOpen: boolean;
}

class GlobalNavbar extends React.Component<Props, State> {

  constructor(props: Props, state: State) {
    super(props);
  
    // this.login = this.login.bind(this);
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

  /*
  <NavLink to="/books" activeStyle={activeStyle}>
    <Label mx={3} style={{ cursor: 'pointer' }}>
      Books
    </Label>
  </NavLink>
  */
  render() {
    // const { idToken, profile } = this.props;
    const { profile, actions } = this.props;
    const links = urls;
    return (
      <div className="global-navbar" style={{ borderStyle: 'solid'}}>
        <Navbar color="faded">
          {
            profile &&
            <>
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
            </>
          }
          {
            profile === undefined ?
            <Button color="primary" onClick={actions.handleLogin} style={{ cursor: 'pointer' }}>
                Login
            </Button> :
              <Button  color="primary" onClick={actions.handleLogout} style={{ cursor: 'pointer' }}>
                Logout
            </Button>
              /*
            <Button ml="auto" bg="green4" onClick={actions.handleLogin} style={{ cursor: 'pointer' }}>
                Login
            </Button> :
              <Button  ml="auto" bg="red4" onClick={actions.handleLogout} style={{ cursor: 'pointer' }}>
                Logout
            </Button>
            */
          }
        </Navbar>
      </div>
    );
  }
}

// export default GlobalNavbar;


// const mapStateToProps = (state: TableState) => {
const mapStateToProps = (state: GlobalState) => {
  return {
    isLoggingIn: state.auth.isLoggingIn,
    idToken: state.auth.idToken,
    profile: state.auth.profile,
    error: state.auth.error,
    // editor: state.table.editor
  };
};

// const mapDispatchToProps = (dispatch: Dispatch<Action>, ownProps: Props)
const mapDispatchToProps = (dispatch: Dispatch<Action>) => {
  return {
    actions: bindActionCreators({
      handleLogin: loginUser, 
      handleLogout: logoutRequest
    }, dispatch),
    // onClick: (member: Member) => {
    //   dispatch(setValueToEditor(member));
    // },
    // onSubmit: (member: Member) => {
    //   ispatch(submitValueFromEditor(member));
    // },
    // onChange: (key: string, value: string) => {
    //   dispatch(changeValueInEditor(key, value));
    // }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps 
)(GlobalNavbar);
