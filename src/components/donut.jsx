import React from 'react';
import {Chart, ArcElement} from 'chart.js';
import {Doughnut} from 'react-chartjs-2';

import styled from 'styled-components'

Chart.register(ArcElement);

const data = {
  labels: [
    'FCP',
    'LCP',
    'INP',
    'CLS',
    'TTFB'
  ],
  datasets: [{
    data: [40, 30, 20, 10, 5],
    backgroundColor: [
      '#A737B4',
      '#9E86FF',
      '#FF45A8',
      '#FDB81B',
      '#36166B'
    ],
  }]
};

function Donut() {
  return (
    <StyledDonut>
      <Doughnut data={data} />
    </StyledDonut>
  );
}

const StyledDonut = styled('div')`
  display: inline-block;
  width: 200px;
`;

export default Donut;