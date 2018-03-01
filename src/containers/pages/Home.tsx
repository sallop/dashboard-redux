import * as React from 'react';
import DashboardTemplate from '../templates/DashboardTemplate';
// import Counter from '../../components/atoms/Counter';
// import Counter from '../organisms/Counter';
import MemberTable from '../organisms/MemberTable';
import Editor from '../organisms/Editor';
import './Home.css';

const Home = () => (
  <DashboardTemplate>
      Home Contents
    <div className="home-content">
      <MemberTable/>
      <Editor/>
    </div>
  </DashboardTemplate>
);

export default Home;
