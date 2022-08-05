import React from 'react'
import { Chart as ChartJS, registerables } from 'chart.js';
import { Chart, Line } from 'react-chartjs-2'
ChartJS.register(...registerables);

const Notes = () => {
  return (
    <>
  <div className="chart">
  <Line
  datasetIdKey='id'
  data={{
    labels: ['1', '2', '3', "4", '5'],
    datasets: [
      {
        id: 1,
        label: 'Temp',
        data: [5, 7, 4, 5, 6],
      },
    ],
  }}
/>
  </div>
    </>
  )
}

export default Notes