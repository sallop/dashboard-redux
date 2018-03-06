import * as React from 'react';
import DashboardTemplate from '../templates/DashboardTemplate';
import FaSamples from '../../components/atoms/FaSamples';
import Counter from '../organisms/Counter';

const Test = () => (
  <DashboardTemplate>
    <h2>Test</h2>
    <div>
      <FaSamples/>
      <Counter/>
    </div>
  </DashboardTemplate>
);

export default Test;
