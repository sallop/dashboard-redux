import * as React from 'react';
// import { NavLink } from 'react-router-dom';
import urls from '../../utils/urls';
import './GlobalNavbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { Logo } from './logo.svg'; // you get React component
import logo from './logo.svg';
// import { default as Logo } from './logo.svg'; // svg url or base64 encoded data url
// import * as auth0 from 'auth0-js';
// import { loginRequest, logoutRequest } from '../../actions';
import { Action, loginUser, logoutRequest } from '../../actions';
import { GlobalState } from '../../reducers';
// import { AuthState } from '../../types';

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

import { connect, Dispatch } from 'react-redux';
import { bindActionCreators } from 'redux';

// interface StateProps extends AuthState {};
interface StateProps {
  isLoggingIn: boolean;
  // idToken: string;
  // profile: auth0.Auth0UserProfile; // maybe occured circular dependency
  // error: string;

  idToken?: string;
  profile?: auth0.Auth0UserProfile; // maybe occured circular dependency
  error?: string;
}

interface DispatchProps {
  actions: {
    handleLogin: typeof loginUser,
    handleLogout: typeof logoutRequest,
  };
}

interface Props extends StateProps, DispatchProps {}

interface State {
  isOpen: boolean;
}

class GlobalNavbar extends React.Component<Props, State> {

  constructor(props: Props, state: State) {
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
          }
        </Navbar>
      </div>
    );
  }
}

// export default GlobalNavbar;
// const mapStateToProps = (state: TableState) => {
// const mapStateToProps = (state: GlobalState) => {
const mapStateToProps = (state: GlobalState): StateProps => {
  return {
    isLoggingIn: state.auth.isLoggingIn,
    idToken: state.auth.idToken,
    profile: state.auth.profile,
    error: state.auth.error,
  };
};

// const mapDispatchToProps = (dispatch: Dispatch<Action>, ownProps: Props) => ({ // error
// const mapDispatchToProps = (dispatch: Dispatch<Action>, ownProps: Props): DispatchProps => ({ // error
// const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({
const mapDispatchToProps = (dispatch: Dispatch<Action>): DispatchProps => ({
  actions: bindActionCreators(
    {
      handleLogin: loginUser, 
      handleLogout: logoutRequest
    },
    dispatch)
});

// export default connect<StateProps, DispatchProps, void>(
export default connect(
  mapStateToProps,
  mapDispatchToProps 
)(GlobalNavbar);
