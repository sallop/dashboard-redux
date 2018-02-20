import * as React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import urls from '../../utils/urls';
import './Sidebar.css';

interface Props {
}

interface State {
}

export default class Sidebar extends React.Component<Props, State> {
  render() {

    return (
      <div className="sidebar">
        <Nav className="sidebar__nav" vertical={true}>
          {
            urls.map((url, idx) => (
              <NavItem className="sidebar__nav-item" key={idx}>
                <NavLink key={idx} href={url}>{url}</NavLink>
              </NavItem>
            ))
          }
        </Nav>
      </div>
    );
  }
}
