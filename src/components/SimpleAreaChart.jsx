
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, } from 'recharts';



const SimpleAreaChart = ({value, xAxis, yAxis, componentChartColor}) => {

  return (
    <ResponsiveContainer width="100%" height="100%">
    
      <AreaChart
        width={500}
        height={400}
        
        data={value}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
      >
       <defs>
            <linearGradient id={`colorGradient${componentChartColor}`} x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor={componentChartColor} stopOpacity={0.8}/>
              <stop offset="95%" stopColor={componentChartColor} stopOpacity={0}/>
            </linearGradient>

           
          </defs>
        <CartesianGrid strokeDasharray="3 " />
        <XAxis dataKey={xAxis}/>
        <YAxis />
        <Tooltip />
        <Area type="monotone" dataKey={yAxis} stroke={componentChartColor} fill={`url(#colorGradient${componentChartColor})`} />
      </AreaChart>
    </ResponsiveContainer>
  );
};

// stroke={componentChartColor} fill={`url(#colorGradient${componentChartColor})`}
// #8884d8
export default SimpleAreaChart;
