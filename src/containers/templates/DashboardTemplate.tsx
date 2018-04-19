import * as React from 'react';
// import GlobalNavbar from '../organisms/GlobalNavbar';
import Sidebar from '../organisms/Sidebar';

interface Props {
  children?: React.ReactNode;
}

interface State {
}

class DashboardTemplate extends React.Component<Props, State> {
  constructor(props: Props, state: State) {
    super(props);
    state = {};
  }
  render() {
    return (
      <div>
        {/*
        <GlobalNavbar />
        Type '{}' is not assignable to type 'IntrinsicAttributes & IntrinsicClassAttributes<Component<Pick<Props, never> & Props, ComponentSta...'.
        */}
        {/*
        <GlobalNavbar isLoggingIn={true} />
        Type '{ isLoggingIn: true; }' is not assignable to type 'IntrinsicAttributes & IntrinsicClassAttributes<Component<Pick<Props, never> & Props, ComponentSta...'.
        */}
        <div className="wrapper">
          {/* sidebar */}
          <Sidebar />
          {/* sidebar */}
          <div id="content">
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}

export default DashboardTemplate;
