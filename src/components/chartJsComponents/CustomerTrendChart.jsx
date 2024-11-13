import React from 'react';
import { VictoryLine, VictoryChart, VictoryAxis, VictoryTheme } from 'victory';

const customerData = [
  { month: 'Jan', customers: 400 },
  { month: 'Feb', customers: 450 },
  { month: 'Mar', customers: 470 },
  { month: 'Apr', customers: 430 },
];

function CustomerTrendChart() {
  return (
    <VictoryChart theme={VictoryTheme.material} >
      <VictoryAxis label="Months" />
      <VictoryAxis dependentAxis label="Number of Customers" />
      <VictoryLine
        data={customerData}
        x="month"
        y="customers"
        style={{ data: { stroke: '#c43a31' } }}
      />
    </VictoryChart>
  );
}

export default CustomerTrendChart;
