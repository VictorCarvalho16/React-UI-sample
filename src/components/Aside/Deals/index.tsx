import React from 'react';
import { Line } from 'react-chartjs-2';
import { ChartData } from 'chart.js';

import { Container, DealsHeader } from './styles';

const data: ChartData = {
  labels: ['1 Dec', '8 Dec', '16 Dec', '31 Dec'],
  datasets: [
    {
      label: 'My Closed deals',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(75,192,192,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [50, 160, 80, 150],
    },
  ],
};

function Deals() {
  return (
    <Container>
      <DealsHeader>
        <h2>Deals</h2>
        <label>
          Show:
          <select name="select">
            <option value="day">Daily</option>
            <option value="week">Weekly</option>
            <option value="month" selected>Monthly</option>
          </select>
        </label>
      </DealsHeader>
      <div>
        <Line data={data} />
      </div>
    </Container>
  );
}

export default Deals;
