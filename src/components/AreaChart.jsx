import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

// Function to format X-axis labels
const formatXAxis = (value) => {
  const date = new Date(value);
  const day = date.getDate();
  const month = date.getMonth() + 1; // Months are 0-based in JavaScript
  return `${day}/${month}`;
};

// eslint-disable-next-line react/prop-types
const AreaChartComp = ({ value, xDataKey, yDataKey, componentChartColor}) => {
console.log( value, xDataKey, yDataKey,)
  return (
    <div style={{ width: '100%', height: '100%', margin: "16px 0px" }}> {/* Set a specific height */}
      <ResponsiveContainer>
        <AreaChart
          data={value}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey={xDataKey} tickFormatter={formatXAxis} /> {/* Use the formatting function */}
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey={yDataKey} stroke={componentChartColor} fill={`url(#colorGradient${componentChartColor})`} />
          <defs>
            <linearGradient id={`colorGradient${componentChartColor}`} x1="0" y1="0" x2="0" y2="1">
              <stop offset="35%" stopColor={componentChartColor} stopOpacity={0.8}/>
              <stop offset="65%" stopColor={componentChartColor} stopOpacity={0.1}/>
            </linearGradient>
          </defs>
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AreaChartComp;
