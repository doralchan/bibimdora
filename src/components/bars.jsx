import React from 'react';
import {Chart, BarElement} from 'chart.js';
import {Bar} from 'react-chartjs-2';
import 'chart.js/auto';

import styled from 'styled-components'

Chart.register(BarElement);

const data = {
  labels: ['1/11', '1/12', '1/13', '1/14', '1/15', '1/16', '1/17', '1/18', '1/19', '1/20', '1/21', '1/22', '1/23'],
  datasets: [{
    data: [ 200, 140, 90, 160, 90, 140, 160, 110, 480, 190, 239, 198, 209],
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