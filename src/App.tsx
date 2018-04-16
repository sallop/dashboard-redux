import * as React from 'react';
import * as auth0 from 'auth0-js';
import { loginRequest, logoutRequest } from './actions';

import './App.css';
import Router from './Router';
import '@fortawesome/fontawesome-free-solid';
import '@fortawesome/fontawesome-free-brands';

interface AppProps {
  history: History;
}

interface StateProps {
  profile?: auth0.Auth0UserProfile;
}

interface DispatchProps {
  actions: {
    loginRequest: typeof loginRequest,
    // logout: typeof logout,
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

export default App;
