import React from 'react';
import { VictoryChart, VictoryLine, VictoryAxis, VictoryTheme } from 'victory';
import '../styles/Common.css';

const Chart = () => {
  const data = [
    { x: 'January', spending: 200, income: 400 },
    { x: 'February', spending: 100, income: 350 },
    { x: 'March', spending: 50, income: 300 },
    { x: 'April', spending: 20, income: 500 },
  ];

  const customTheme = {
    ...VictoryTheme.material,
    axis: {
      style: {
        grid: {
          stroke: 'gray', // Change the inner border lines color
          strokeDasharray: '0, 0', // Hide grid lines on the y-axis
        },
      },
    },
  };

  return (
    <div className="chart">
      <VictoryChart theme={customTheme} domainPadding={{ x: 20 }}>
        <VictoryAxis
          tickValues={['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEPT', 'OCT', 'NOV', 'DEC']}
          style={{
            grid: { stroke: 'none' }, // Hide grid lines on the y-axis
          }}
        />
        <VictoryAxis dependentAxis tickFormat={(tick) => `N${tick}`} />
        <VictoryLine
          data={data}
          x="x"
          y="spending"
          style={{
            data: { stroke: 'red' },
          }}
          interpolation="catmullRom" // Smooth curve
        />
        <VictoryLine
          data={data}
          x="x"
          y="income"
          style={{
            data: { stroke: 'green' },
          }}
          interpolation="catmullRom" // Smooth curve
        />
      </VictoryChart>
    </div>
  );
};

export default Chart;
