import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const productData = {
  labels: ['Electronics', 'Clothing', 'Home', 'Beauty'],
  datasets: [
    {
      label: 'Products by Category',
      data: [300, 500, 200, 100],
      backgroundColor: ['#36A2EB', '#FF6384', '#FFCE56', '#4BC0C0'],
    },
  ],
};

function ProductChart() {
  return <Bar data={productData} options={{ responsive: true }} width={200} height={150} />
}

export default ProductChart;
