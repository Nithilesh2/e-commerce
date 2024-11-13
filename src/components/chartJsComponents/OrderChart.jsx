// OrdersChart.js
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const orderData = [
  { month: 'Jan', orders: 120 },
  { month: 'Feb', orders: 200 },
  { month: 'Mar', orders: 150 },
  { month: 'Apr', orders: 250 },
];

function OrderChart() {
  return (
    <LineChart width={500} height={400} data={orderData}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="month" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="orders" stroke="#82ca9d" />
    </LineChart>
  );
}

export default OrderChart;
