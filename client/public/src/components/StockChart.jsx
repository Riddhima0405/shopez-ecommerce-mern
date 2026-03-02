import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Tooltip } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip);

const StockChart = () => {
  const options = { responsive: true, maintainAspectRatio: false };
  const data = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
    datasets: [{
      label: 'Price Performance',
      data: [150, 155, 148, 162, 159],
      borderColor: '#0d6efd',
      backgroundColor: 'rgba(13, 110, 253, 0.2)',
      fill: true,
      tension: 0.3
    }]
  };

  return (
    <div style={{ height: '300px' }} className="bg-dark p-3 rounded">
      <Line options={options} data={data} />
    </div>
  );
};

export default StockChart;