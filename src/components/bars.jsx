import React from 'react';
import {Chart, BarElement} from 'chart.js';
import {Bar} from 'react-chartjs-2';
import 'chart.js/auto';

import styled from 'styled-components'

Chart.register(BarElement);

const data = {
  labels: ['X/X', 'X/X', 'X/X', 'X/X', 'X/X', 'X/X', 'X/X', 'X/X', 'X/X', 'X/X', 'X/X', 'X/X', 'X/X', 'X/X', 'X/X', 'X/X', 'X/X', 'X/X', 'X/X', 'X/X'],
  datasets: [{
    data: [ 200, 140, 90, 160, 90, 140, 160, 110, 480, 170, 239, 198, 209, 200, 143, 181, 129, 98, 139, 110],
    backgroundColor: [
      '#36166B'
    ]
  }]
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false
    },
    label: {
      display: false
    },
  },
  scales: {
    x: {
      grid: {
        display: false
      }
    }
  }
}

function Bars() {
  return (
    <StyledBar>
      <Bar data={data} options={options} />
    </StyledBar>
  );
}

const StyledBar = styled('div')`
  display: flex;
  align-items: center;
  height: 150px;
`;

export default Bars;