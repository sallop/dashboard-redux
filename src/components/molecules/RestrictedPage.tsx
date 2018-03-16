import * as React from 'react';
import { loginRequest } from '../../actions';

interface Props {
  children?: React.ReactNode[];
  idToken?: string;
}

interface DispatchProps {
  actions: {
    loginRequest: typeof loginRequest;
  }
}

interface State {
}

class RestrictedPage extends React.Component<Props & DispatchProps, State> {

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
