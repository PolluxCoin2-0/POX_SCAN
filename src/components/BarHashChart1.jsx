
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const BarHashChart1 = ({value, xAxis, yAxis}) => (
  <ResponsiveContainer width="100%" height="100%">
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
      {/* <Bar dataKey="uv" fill="#82ca9d" /> */}
    </BarChart>
  </ResponsiveContainer>
);

export default BarHashChart1;
