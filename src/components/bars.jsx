import React from 'react';
import {Chart, BarElement} from 'chart.js';
import {Bar} from 'react-chartjs-2';
import 'chart.js/auto';

import styled from 'styled-components'

Chart.register(BarElement);

const data = {
  labels: ['1/11', '1/12', '1/13', '1/14', '1/15', '1/16', '1/17', '1/18', '1/19', '1/20'],
  datasets: [{
    data: [ 200, 140, 90, 160, 90, 140, 160, 110, 480, 190],
    backgroundColor: [
      '#92DD00'
    ]
  }]
};

const options = {
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
    },
    y: {
      grid: {
        display: false
      }
    },
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
  max-height: 210px;
`;

export default Bars;