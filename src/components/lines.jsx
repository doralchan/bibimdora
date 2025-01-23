import React from 'react';
import {Chart, LineElement} from 'chart.js';
import {Line} from 'react-chartjs-2';
import 'chart.js/auto';

import styled from 'styled-components'

Chart.register(LineElement);

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

function Lines({data}) {
  return (
    <StyledLine>
      <Line data={data} options={options} />
    </StyledLine>
  );
}

const StyledLine = styled('div')`
  display: flex;
  align-items: center;
  height: 80px;
`;

export default Lines;