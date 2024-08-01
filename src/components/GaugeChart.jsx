
import ReactECharts from 'echarts-for-react';

const PieChart = () => {
  const option = {
    // tooltip: {
    //   trigger: 'item'
    // },
    legend: {
      top: '5%',
      left: 'center'
    },
    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius: ['60%', '70%'],
        startAngle: 240,
        endAngle: 300,
        avoidLabelOverlap: false,
        label: {
          show: false,
          position: 'center'
        },
        emphasis: {
          label: {
            show: true,
            fontSize: 40,
            fontWeight: 'bold'
          }
        },
        labelLine: {
          show: false
        },
        data: [
          { value: 98, name: 'Voters', itemStyle: { color: '#86ae75' } },
          { value: 2, name: 'SR Rewards', itemStyle: { color: '#C23631' } },
          
        ]
      }
    ]
  };

  return <ReactECharts option={option} style={{ height: '100%', width: '100%' }} />;
};

export default PieChart;
