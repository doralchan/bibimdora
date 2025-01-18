import React from 'react';
import {Chart, ArcElement} from 'chart.js';
import {Doughnut} from 'react-chartjs-2';
import 'chart.js/auto';

import styled from 'styled-components'

Chart.register(ArcElement);

const data = {
  datasets: [{
    data: [30, 30, 15, 15, 10],
    backgroundColor: [
      '#A737B4',
      '#9E86FF',
      '#FF45A8',
      '#FDB81B',
      '#36166B'
    ],
  }]
};

const options = {
  responsive: true
};

function Donut() {
  return (
    <StyledDonut>
      <Doughnut data={data} option={options} />
    </StyledDonut>
  );
}

const StyledDonut = styled('div')`
  max-height: 200px;
`;

export default Donut;