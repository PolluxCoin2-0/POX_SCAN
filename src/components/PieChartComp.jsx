import { useState } from 'react';
import { PieChart, Pie, Sector, ResponsiveContainer } from 'recharts';
import { shortenString } from '../utils/shortenString';
import { formatNumberWithCommas } from '../utils/FormattingNumber';

const colors = ['#F3BB1B', '#1A5BA1'];

const renderActiveShape = (props, xAxis, yAxis) => {
  const RADIAN = Math.PI / 180;
  const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle, fill, payload } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? 'start' : 'end';

  return (
    <g>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={fill}
      />
      <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none" />
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
      <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="#333">
        {xAxis && payload[xAxis] ? `${xAxis}: ${formatNumberWithCommas(payload[xAxis])}` : ''}
      </text>
      <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor={textAnchor} fill="#333">
        {yAxis && payload[yAxis] ? `${yAxis}: ${shortenString(payload[yAxis], 3)}` : ''}
      </text>
    </g>
  );
};

const PieChartComp = ({ value, xAxis, yAxis }) => {
  console.log(value, xAxis, yAxis);
  const [activeIndex, setActiveIndex] = useState(0);

  const onPieEnter = (_, index) => {
    setActiveIndex(index);
  };

  // Add fill color to each data point
  const dataWithColors = value.map((entry, index) => ({
    ...entry,
    fill: colors[index % colors.length]
  }));

  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart width={400} height={400}>
        <Pie
          activeIndex={activeIndex}
          activeShape={(props) => renderActiveShape(props, xAxis, yAxis)}
          data={dataWithColors}
          cx="50%"
          cy="50%"
          innerRadius={60}
          outerRadius={80}
          onMouseEnter={onPieEnter}
          dataKey={xAxis}
        />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default PieChartComp;
