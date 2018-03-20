import * as React from 'react';
import { loginRequest } from '../../actions';

export interface RestrictedPageProps {
  children?: React.ReactNode[];
}

export interface StateProps {
  idToken?: string;
}

export interface DispatchProps {
  actions: {
    loginRequest: typeof loginRequest;
  }
}

interface Props extends RestrictedPageProps, StateProps, DispatchProps;

interface State {
  // idToken?: string;
}

class RestrictedPage extends React.Component<Props, State> {

  constructor(props: Props, state: State) {
    super(props);

    this.login = this.login.bind(this);
    this.toggle = this.toggle.bind(this);
  }

  componentWillMount() {
    const { actions, idToken } = this.props;
    if (!idToken) {
      actions.loginRequest();
    }
  }

  render() {
    const { children, idToken } = this.props;
    return idToken ? children : <FullScreenLoader delay={0}/>;
  }
}

export default RestrictedPage;
