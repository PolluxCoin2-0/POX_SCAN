
import {
  ComposedChart,
  // Line,
// Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { extractSiteName } from '../utils/extractSiteName';



const VerticalComposedChart= ({value, xAxis, yAxis}) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <ComposedChart
        layout="vertical"
        width={500}
        height={400}
        data={value}
        margin={{
          top: 20,
          right: 20,
          bottom: 20,
          left: 20,
        }}
      >
        <CartesianGrid stroke="#f5f5f5" />
        <XAxis type="number" />
        <YAxis dataKey={xAxis} type="category" scale="band" />
        <Tooltip />
        <Legend />
        {/* <Area dataKey="amt" fill="#8884d8" stroke="#8884d8" /> */}
        <Bar dataKey={yAxis} barSize={20} fill="#F3BB1C" />
        {/* <Line dataKey="uv" stroke="#ff7300" /> */}
      </ComposedChart>
    </ResponsiveContainer>
  );
};

// Example.demoUrl = 'https://codesandbox.io/p/sandbox/vertical-composed-chart-6r8xmw';

export default  VerticalComposedChart;
