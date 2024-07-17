
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const BarHashChart= ({value, xAxis, yAxis}) => (
  <ResponsiveContainer width="100%" height={300}>
    <BarChart
      width={500}
      height={300}
      data={value}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey={xAxis} />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey={yAxis} fill="#F3BB1C" background={{ fill: '#eee' }} />
    </BarChart>
  </ResponsiveContainer>
);

export default BarHashChart;
