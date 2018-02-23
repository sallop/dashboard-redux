import * as React from 'react';
import DashboardTemplate from '../templates/DashboardTemplate';
// import Counter from '../../components/atoms/Counter';
import Counter from '../organisms/Counter';

const Home = () => (
  <DashboardTemplate>
    <div>
      Home Contents
      <Counter/>
    </div>
  </DashboardTemplate>
);

export default Home;
