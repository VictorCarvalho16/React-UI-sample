import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { ChartData } from 'chart.js';

import { Container, ChartsHeader } from './styles';

const data: ChartData = {
  labels: [
    'Active',
    'Complete',
    'Ended',
  ],
  datasets: [{
    data: [33.3, 33.3, 33.3],
    backgroundColor: [
      '#ffc76b',
      '#4dc896',
      '#f7685b',
    ],
    hoverBackgroundColor: [
      '#ffc76b',
      '#4dc896',
      '#f7685b',
    ],
  }],
};
function Charts() {
  return (
    <Container>
      <ChartsHeader>
        <h2>Tasks</h2>
        <label>
          Show:
          <select name="select">
            <option value="day">This Day</option>
            <option value="week">This Week</option>
            <option value="month" selected>This Month</option>
          </select>
        </label>
      </ChartsHeader>
      <div>
        <Doughnut data={data} />
      </div>
    </Container>
  );
}

export default Charts;
