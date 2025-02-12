import React from 'react';
import {Chart, BarElement, LineElement} from 'chart.js';
import {Bar, Line} from 'react-chartjs-2';
import 'chart.js/auto';

import styled from 'styled-components'

Chart.register(BarElement, LineElement);

const data = {
  labels: ['X/X', 'X/X', 'X/X', 'X/X', 'X/X', 'X/X', 'X/X', 'X/X', 'X/X', 'X/X', 'X/X', 'X/X', 'X/X', 'X/X', 'X/X', 'X/X', 'X/X', 'X/X', 'X/X', 'X/X', 'X/X', 'X/X', 'X/X', 'X/X', 'X/X', 'X/X', 'X/X', 'X/X'],
  datasets: [
    {
      type: 'line',
      data: [40, 44, 42, 45, 44, 41, 45, 49, 48, 50, 68, 70, 71, 98, 74, 72, 40, 42, 43, 40, 41, 42, 43, 40, 42, 41, 43, 45, 42, 44],
      borderColor: ['#B82ABE']
    },
    {
      type: 'bar',
      data: [ 200, 140, 90, 160, 90, 140, 160, 110, 80, 170, 139, 198, 209, 200, 143, 181, 129, 98, 139, 110, 124, 115, 109, 132, 121, 124, 130, 128],
      backgroundColor: ['#423C58']
    }
  ]
};

const options = {
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

function BarsLines() {
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

export default BarsLines;