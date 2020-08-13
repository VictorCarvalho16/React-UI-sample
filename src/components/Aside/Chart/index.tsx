import React from 'react';
import { ChartData } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { useSelector } from 'react-redux';

import { getTaskActions } from '../../../redux/taskActionsSlice';

import { Container, ChartsHeader } from './styles';

function Charts() {
  const actions = useSelector(getTaskActions);

  const actives = actions.filter((action) => action === 'Active').length;
  const completes = actions.filter((action) => action === 'Completed').length;
  const ends = actions.filter((action) => action === 'Ended').length;

  const percents: number[] = [
    ((actives / actions.length) * 100),
    ((completes / actions.length) * 100),
    ((ends / actions.length) * 100),
  ];

  const data: ChartData = {
    labels: [
      'Active',
      'Complete',
      'Ended',
    ],
    datasets: [{
      data: percents,
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
