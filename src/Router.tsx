import * as React from 'react';
import { History } from 'history';
// import { BrowserRouter, Route, Link } from 'react-router-dom';
// import { BrowserRouter, Route } from 'react-router-dom';
import { Router, Route } from 'react-router-dom';
import Home from   './containers/pages/Home';
import SignIn from './containers/pages/SignIn';
import SignUp from './containers/pages/SignUp';
import Test from './containers/pages/Test';

// const Router = () => (
// const Router = ({history}) => (
export default ({history}: {history: History}) => (
  // <BrowserRouter history={history}>
  <Router history={history}>
    <div>
      <Route exact={true} path="/" component={Home} />
      <Route path="/home" component={Home} />
      <Route path="/signin" component={SignIn} />
      <Route path="/signup" component={SignUp} />
      <Route path="/test" component={Test} />
    </div>
  </Router>
  // </BrowserRouter>
);

// export default Router;
