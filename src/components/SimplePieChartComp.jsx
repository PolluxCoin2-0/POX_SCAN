import { PieChart, Pie, Tooltip, ResponsiveContainer } from 'recharts';

const data02 = [
  { name: 'Group A', value: 2400 },
  { name: 'Group B', value: 4567 },
  { name: 'Group C', value: 1398 },
  { name: 'Group D', value: 9800 },
  { name: 'Group E', value: 3908 },
  { name: 'Group F', value: 4800 },
];

const SimplePieChartComp = () => (
  <ResponsiveContainer width="100%" height={400}>
    <PieChart>
      <Pie
        dataKey="value"
        data={data02}
        cx="50%"
        cy="50%"
        innerRadius={40}
        outerRadius={80}
        fill="#3A5AFE"
      />
      <Tooltip />
    </PieChart>
  </ResponsiveContainer>
);

export default SimplePieChartComp;
