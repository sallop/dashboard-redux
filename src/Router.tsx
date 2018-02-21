import * as React from 'react';
// import { BrowserRouter, Route, Link } from 'react-router-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from   './containers/pages/Home';
import SignIn from './containers/pages/SignIn';
import SignUp from './containers/pages/SignUp';
import Test from './containers/pages/Test';

const Router = () => (
  <BrowserRouter>
    <div>
      <Route exact={true} path="/" component={Home} />
      <Route path="/home" component={Home} />
      <Route path="/signin" component={SignIn} />
      <Route path="/signup" component={SignUp} />
      <Route path="/test" component={Test} />
    </div>
  </BrowserRouter>
);

export default Router;
