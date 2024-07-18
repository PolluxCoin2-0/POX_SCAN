
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';



const BiaxialLineChart = ({value, xAxis, yAxis, componentChartColor}) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
      
        height={300}
        data={value}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
         <defs>
            <linearGradient id={`colorGradient${componentChartColor}`} x1="0" y1="0" x2="0" y2="1">
              <stop offset="35%" stopColor={componentChartColor} stopOpacity={0.8}/>
              <stop offset="65%" stopColor={componentChartColor} stopOpacity={0.1}/>
            </linearGradient>
          </defs>
          
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey={xAxis} />
       {/* <YAxis yAxisId="left" orientation="left" /> */}
        {/* <YAxis yAxisId="right" orientation="right" /> */}
        <Tooltip />
        <Legend />
        {/* <Line yAxisId="left" type="monotone" dataKey="pv" stroke="#F3BB1C" activeDot={{ r: 8 }} /> */}
        <Line yAxisId="right" type="monotone" dataKey={yAxis} stroke={componentChartColor} fill={`url(#colorGradient${componentChartColor})`}/>
       
      </LineChart>
    </ResponsiveContainer>
  );
};

// Example.demoUrl = 'https://codesandbox.io/p/sandbox/line-chart-double-y-axes-2stmj2';

export default BiaxialLineChart;
