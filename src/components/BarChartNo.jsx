
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';



const BarChartNo = ({value, xAxis, yAxis}) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        width={300}
        height={300}
        data={value}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        barSize={40}
      >
        <XAxis dataKey={xAxis} scale="point" padding={{ left: 20, right: 10 }} />
        <YAxis />
        <Tooltip />
        <Legend />
        <CartesianGrid strokeDasharray="3 3" />
        <Bar dataKey={yAxis} fill="#C23631" background={{ fill: '#eee' }} />
      </BarChart>
    </ResponsiveContainer>
  );
};


export default BarChartNo;
