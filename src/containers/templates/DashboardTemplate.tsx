import * as React from 'react';
import GlobalNavbar from '../organisms/GlobalNavbar';
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
        <GlobalNavbar />
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
