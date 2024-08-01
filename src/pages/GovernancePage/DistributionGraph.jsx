import { useEffect, useState } from 'react';
import ReactECharts from 'echarts-for-react';

const DistributionGraph = () => {
  const [legendData, setLegendData] = useState([]);
  const [seriesData, setSeriesData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      addDataPoint();
    }, 500); // Adjust the interval as needed

    return () => clearInterval(intervalId); // Clean up the interval on component unmount
  }, [currentIndex]);

  const nameList = [
    'Nightingale Chart', 'glaxy', 'Globalcrypto', 'India', 'ratri', 'Alexpepe', 'dotnet', 'williamsonpolink', 'rockblack', 'com', 'vipk', 'inbox', 'poxblock', 'com', 'coinsbit', 'aiml', 
    'onkar', 'poxblanieer', 'chauminchao', 'com', 'ssbp', 'emaarfoundation', 'phoniex', 'winns', 'proroyalgroup', 'tmminers', 'tyagipjns', 'glibal7', 'khatushayamji', 'com', 'poxchain786', 
    'com', 'guthubmining', 'khalsanation', 'an2105', 'poxgrid', 'abssolution', 'chaincraze', 'gargpox', 'crypto',
  ];

  const valueList = [
    '0', '116960', '70997', '116684', '121355', '121363', '118810', '70627', '121374', '121983', '12645', '118928', '114171', '121396', '121049', '110542', '121309', '147212', '121024', '121215',
    '112023', '41402', '69235', '70981', '35042', '0', '60365', '0', '33869', '50787', '116956', '117448', '103108', '0', '33596', '0', '62262', '0', '49879', '87531',
  ]

  const addDataPoint = () => {
    if (currentIndex >= nameList.length) return; // Stop after all names are adde
    const name = nameList[currentIndex];
    const value = valueList[currentIndex];

    setLegendData((prev) => [...prev, name]);
    setSeriesData((prev) => [...prev, { name, value }]);
    setCurrentIndex(currentIndex + 1);
  };

  const option = {
    tooltip: {
      trigger: 'item',
      formatter: (params) => {
        const { name, value } = params;
        return `
          <div style="text-align: left;">
            <strong>Name:</strong> ${name}<br/>
            <strong>Value:</strong> ${value}<br/>
            
          </div>
        `;
      }
    },
    legend: {
      type: 'scroll',
      orient: 'vertical',
      right: 10,
      top: 20,
      bottom: 20,
      data: legendData
    },
    series: [
      {
        type: 'pie',
        radius: '55%',
        center: ['40%', '50%'],
        data: seriesData,
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  };

  return <ReactECharts option={option} style={{ height: '300px', width: '100%' }} />;
};

export default DistributionGraph;
