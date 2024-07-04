
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const AreaChartComp = ({value, xDataKey, yDataKey}) => {
  return (
    <div style={{ width: '100%', height: 150,margin:"16px 0px" }}> {/* Set a specific height */}
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
          <XAxis dataKey={xDataKey} />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey={yDataKey} stroke="#AFD6EB" fill="#E4F1F8" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AreaChartComp;