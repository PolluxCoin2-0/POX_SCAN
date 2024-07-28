import React from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';

// Generate data for the exponential graph
const generateExponentialData = (base, exponent, points) => {
  const data = [];
  for (let i = 0; i <= points; i++) {
    const x = i;
    const y = Math.pow(base, exponent * i);
    data.push({ x, y });
  }
  return data;
};

// Sample data for an exponential graph
const data = generateExponentialData(2, 0.1, 50);

const ExponentialGraph = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        data={data}
        margin={{
          top: 5, right: 30, left: 0, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="x" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="y" stroke="#8884d8" activeDot={{ r: 8 }} />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default ExponentialGraph;
