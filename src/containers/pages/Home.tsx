import * as React from 'react';
import DashboardTemplate from '../templates/DashboardTemplate';
// import Counter from '../../components/atoms/Counter';
// import Counter from '../organisms/Counter';
import MemberTable from '../organisms/MemberTable';
import Editor from '../organisms/Editor';

const Home = () => (
  <DashboardTemplate>
    <div>
      Home Contents
      {/*
        <Counter/>
      */}
      <MemberTable/>
      <Editor/>
    </div>
  </DashboardTemplate>
);

export default Home;
