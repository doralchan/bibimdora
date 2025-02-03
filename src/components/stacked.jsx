import React from 'react';
import {Chart, BarElement} from 'chart.js';
import {Bar} from 'react-chartjs-2';
import 'chart.js/auto';

import styled from 'styled-components'

Chart.register(BarElement);

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
      stacked: true,
      grid: {
        display: false
      }
    },
    y: {
      stacked: true,
    }
  }
}

function Stacked({data}) {
  return (
    <StyledStack>
      <Bar data={data} options={options} />
    </StyledStack>
  );
}

const StyledStack = styled('div')`
  display: flex;
  align-items: center;
  height: 150px;
`;

export default Stacked;