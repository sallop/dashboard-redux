import * as React from 'react';
// import { loginRequest } from '../../actions';
import { loginUser } from '../../actions';
// import { Credential } from '../../types';
import FullscreenLoader from './FullscreenLoader';

export interface RestrictedPageProps {
  // children?: React.ReactNode[];
  children?: React.ReactNode;
}

export interface StateProps {
  idToken?: string; // starter-pack
  // profile;
  // isLoggingIn;
}

export interface DispatchProps {
  actions: {
    // loginRequest: typeof loginRequest;
    loginUser: typeof loginUser;
  };
}

// interface Props extends RestrictedPageProps, StateProps, DispatchProps;
interface Props extends RestrictedPageProps, StateProps, DispatchProps {}

interface State {}
// interface State {
//   // idToken?: string;
// };

export class RestrictedPage extends React.Component<Props, State> {

  constructor(props: Props, state: State) {
    super(props);

    // this.login = this.login.bind(this);
    // this.toggle = this.toggle.bind(this);
  }

  componentWillMount() {
    const { actions, idToken } = this.props;
    console.log(`RestrictedPage.componentWillMount idToken = ${idToken}`);
    if (!idToken) {
      actions.loginUser(); // loginUser() will be refactored
      // TODO:
      // actions.loginRequest({
      //   username: idToken,
      //   password: "password",
      // } as Credential);
    }
  }

  render() {
    const { children, idToken } = this.props;
    console.log(`RestrictedPage.componentWillMount idToken = ${idToken}`);
    return idToken ? children : <FullscreenLoader delay={0}/>;
  }
}

// export default RestrictedPage;
// export RestrictedPage;
