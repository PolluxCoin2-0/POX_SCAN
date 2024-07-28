import { PieChart, Pie, Tooltip, ResponsiveContainer, Cell } from "recharts";

const COLORS = ["#1A5BA1", "#35CA7B"];

const SimplePieChartComp = ({ value }) => {
  if (!value || value.length === 0) {
    return <div>No data available</div>;
  }

  return (
    <ResponsiveContainer width="100%" height={400}>
      <PieChart>
        <Pie
          dataKey="value"
          data={value}
          cx="50%"
          cy="50%"
          innerRadius={40}
          outerRadius={80}
          fill="#3A5AFE"
        >
          {value.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default SimplePieChartComp;
