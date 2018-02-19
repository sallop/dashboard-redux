import * as React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Home from   './containers/pages/Home';
import SignIn from './containers/pages/SignIn';
import SignUp from './containers/pages/SignUp';
import Test from './containers/pages/Test';

const Router = () => (
  <BrowserRouter>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/signin">SignIn</Link></li>
        <li><Link to="/signup">SignUp</Link></li>
        <li><Link to="/test">Test</Link></li>
      </ul>
      
      <hr/>

      <Route exact={true} path="/" component={Home} />
      <Route path="/signin" component={SignIn} />
      <Route path="/signup" component={SignUp} />
      <Route path="/test" component={Test} />
    </div>
  </BrowserRouter>
);

export default Router;
