import * as React from 'react';
import * as auth0 from 'auth0-js';
// import { loginRequest, logoutRequest } from './actions';
 import { loginUser, logoutRequest } from './actions';

import './App.css';
import Router from './Router';
import '@fortawesome/fontawesome-free-solid';
import '@fortawesome/fontawesome-free-brands';
import { History } from 'history';

import { bindActionCreators } from 'redux';
import { connect, Dispatch } from 'react-redux';
import { GlobalState } from './reducers';
import { Action } from './actions';

interface AppProps {
  history: History;
}

interface StateProps {
  profile?: auth0.Auth0UserProfile;
}

interface DispatchProps {
  actions: {
    // loginRequest: typeof loginRequest,
    loginRequest: typeof loginUser,
    logoutRequest: typeof logoutRequest,
  };
}

// class App extends React.Component {
//   render() {
//     return (
//       <div>
//         <Router/>
//       </div>
//     );
//   }
// }

// https://github.com/jch254/starter-pack/blob/typescript/src/app/App.tsx
// {
//  history: History,
//  profile: auth0.Auth0UserProfile,
//  actions: {
//    loginRequest: typeof loginRequest,
//    logout: typeof logout,
// },
const App: React.StatelessComponent<AppProps & StateProps & DispatchProps> = ({
  history,
  profile,
  actions,
}) => (
  <div>
    <Router history={history} />
  </div>
);

// export default App;
const mapStateToProps = (state: GlobalState): StateProps => {
  return {
    profile: state.auth.profile
  };
};

const mapStateToDispatch = (dispatch: Dispatch<Action>): DispatchProps => {
  return {
    actions: bindActionCreators({
      loginRequest: loginUser,
      logoutRequest: logoutRequest,
    }, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapStateToDispatch
)(App);
