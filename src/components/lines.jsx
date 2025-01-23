import React from 'react';
import {Chart, LineElement} from 'chart.js';
import {Line} from 'react-chartjs-2';
import 'chart.js/auto';

import styled from 'styled-components'

Chart.register(LineElement);

const data = {
  labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13'],
  datasets: [{
    data: [ 4, 4.5, 4, 4, 4.5, 5, 5.5, 5, 6, 5.5, 6, 6, 6],
    borderColor: [
      '#FDB81B'
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

function Lines() {
  return (
    <StyledLine>
      <Line data={data} options={options} />
    </StyledLine>
  );
}

const StyledLine = styled('div')`
  display: flex;
  align-items: center;
  height: 100px;
`;

export default Lines;