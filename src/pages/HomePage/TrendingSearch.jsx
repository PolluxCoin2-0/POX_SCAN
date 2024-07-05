import PoxImg from "../../assets/PoxImg.png";
import UsdxImg from "../../assets/UsdxImg.png";
import TotalAccounts from "../../assets/TotalAccounts.png";
import TVL from "../../assets/TVL.png";
import TotalTxns from "../../assets/TotalTxns.png";
import TotalTransferVolume from "../../assets/TotalTransferVolume.png";
import { useEffect, useState } from "react";
import AreaChartComp from "../../components/AreaChart";
import { getPriceChartGraphData, getResourceDetailsData, getStakedData, getTrendingSearchData, getTrendingSearchGraphData, getTvlPriceData } from "../../utils/axios/Home";
import { formatNumberWithCommas } from "../../utils/FormattingNumber";


const CardForTrendingSearch = ({ icon, title, value, valueFor24hr }) => {
  return (
    <div className="flex justify-between ">
      <div className="flex flex-row items-center space-x-4">
        <div>
          <img src={icon} alt={title} />
        </div>
        <div>
          <p className="text-light-gray pb-1">{title}</p>
          <p className="font-semibold">{title==="Total Transfer Volume"?"$":""} {value && value}</p>
        </div>
      </div>

      <div>
        <p className="text-light-gray pb-1">24h</p>
        <p className="font-semibold">{valueFor24hr && valueFor24hr}</p>
      </div>
    </div>
  );
};

const TrendingSearch = () => {
  const [selectedOption, setSelectedOption] = useState("Monthly");
  const [data, setData] =useState({});
 const [data2, setData2] = useState({});
 const [data3, setData3] =useState({});
 const [data4, setData4] = useState({});
 const [data5, setData5] = useState({});
 const [data6, setData6] = useState({});
  useEffect(()=>{
    const fetchData=async()=>{
    try {
      const data = await getTrendingSearchData();
      setData(data?.message);
      const data2= await getResourceDetailsData();
      setData2(data2?.message);
      const data3= await getTrendingSearchGraphData();
      setData3(data3);
      const data4= await getStakedData();
      setData4(data4);
      const data5= await getPriceChartGraphData();
      setData5(data5?.message);
      const data6= await getTvlPriceData();
      setData6(data6);
      }
      catch (error) {
        console.log(error);
      }
    } 
    fetchData();
  },[])

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };
  return (
    <div className="flex flex-col md:flex-row justify-between py-6">
      {/* Left Side Trending Search */}
      <div className="w-full md:w-[75%] ">
        <div className="flex justify-between space-x-4 pb-6">
          <div className="flex space-x-4 items-center">
            <p className="font-semibold text-xl whitespace-nowrap">Trending Search :</p>
            <div className="flex space-x-2 items-center font-semibold">
              <img src={PoxImg} alt="" />
              <p>POX</p>
            </div>
            <div className="flex space-x-2 items-center font-semibold">
              <img src={UsdxImg} alt="" />
              <p>USDX</p>
            </div>
          </div>
          <p className="hidden md:block bg-light-red px-3 py-1 rounded-2xl text-dark-red">
            last 24 hours ago
          </p>
        </div>

        <div className="shadow-md px-2 mb-6 rounded-xl py-6 bg-white flex flex-col md:flex-row justify-evenly">
          <div className="flex flex-col w-full  md:w-[40%] px-2 md:px-0">
            <div className="mb-6 border-b-[2px] border-text-bg-gray pb-6">
              <CardForTrendingSearch
                icon={TotalAccounts}
                title="Total Accounts"
                value={data?.totaladdr && formatNumberWithCommas(parseInt(data?.totaladdr))}
                valueFor24hr={data?.last24addr && formatNumberWithCommas(parseInt(data?.last24addr))}
              />
            </div>
            <div className="pb-4 md:pb-0 mb-6 md:mb-0 border-b-[2px] md:border-none border-text-bg-gray">
            <CardForTrendingSearch 
            icon={TotalTxns} 
            title="Total Txns" 
             value={data?.totaltxn && formatNumberWithCommas(parseInt(data?.totaltxn))} 
             valueFor24hr={data?.last24hourtxn && formatNumberWithCommas(parseInt(data?.last24hourtxn))}/>
            </div>
          </div>

          <div className="border-r-[1px] blur-sm hidden md:block"></div>

          <div className="flex flex-col justify-around w-full md:w-[40%] px-2 md:px-0">
            <div className="mb-6 border-b-[2px] border-text-bg-gray pb-6">
              <CardForTrendingSearch 
              icon={TVL} 
              title="TVL (Current)" />
            </div>

            <CardForTrendingSearch
              icon={TotalTransferVolume}
              title="Total Transfer Volume"
              value={data3?.tradingvol && formatNumberWithCommas(parseInt(data3?.tradingvol))}
              valueFor24hr={""}
            />
          </div>
        </div>

        <div className="flex justify-between flex-wrap shadow-lg bg-white rounded-xl p-4">
          <div>
            <p className="text-light-gray pb-1">Current/MaxTPS:</p>
            <p className="font-semibold">{data?.currenttps}/{data?.maxtps}</p>
          </div>

          <div>
            <p className="text-light-gray pb-1">Nodes:</p>
            <p className="font-semibold">{data?.nodes}</p>
          </div>

          <div>
            <p className="text-light-gray pb-1">Total Tokens:</p>
            <p className="font-semibold">{data4?.totalTokenContracts}</p>
          </div>

          <div className="pt-4 md:pt-0">
            <p className="text-light-gray pb-1">Total Contracts:</p>
            <p className="font-semibold">{data4?.totalContacts}</p>
          </div>

          <div className="pt-4 md:pt-0">
            <p className="text-light-gray pb-1">Bandwidth:</p>
            <p className="font-semibold">{data2?.bandwidth}</p>
          </div>

          <div className="pt-4 md:pt-0">
            <p className="text-light-gray">Energy:</p>
            <p className="font-semibold">{data2?.energy}</p>
          </div>
        </div>
      </div>

      {/* Right Side Chart */}
      <div className="w-full md:w-[23%] rounded-xl px-0 md:px-4  pb-6 mt-8 md:mt-0">
        <div className="flex justify-between items-center mb-3">
          <p className="font-semibold text-lg">POX</p>
          <select
            value={selectedOption}
            onChange={handleChange}
            className="p-2 rounded-md"
          >
            <option value="Monthly">Monthly</option>
            <option value="Weekly">Weekly</option>
          </select>
        </div>

        <div className="shadow-lg bg-white px-4 py-6 rounded-xl">
          <div className="flex space-x-4 items-center">
            <img src={PoxImg} alt="" />
            <p className="font-medium text-light-gray">POX <span className="text-darker-blue font-bold">${data3?.price}</span></p>
          </div>

          {/* Charts Library */}
          <div className="">
            <div>
                <AreaChartComp
                value={data5}
                xDataKey="date"
                yDataKey="value"
                componentChartColor="#87CEEB"/>
            </div>
                <div className="flex justify-between">
            <div >
              <p className="text-light-gray mb-1">Market Cap:<span className="text-darker-blue font-semibold"> ${data3?.totalmatket && (data3?.totalmatket/Math.pow(10,6)).toFixed(2)}M</span></p>
              <p className="text-light-gray">Volume(24h):<span className="text-darker-blue font-semibold"> {(data?.last24hourvol && (data?.last24hourvol/Math.pow(10,3)).toFixed(2))}K</span></p>
            </div>
            <div>
              <p className="text-light-gray mb-1">Supply:<span className="text-darker-blue font-semibold"> {data3?.circsupply && data3?.circsupply} POX</span></p>
              <p className="text-light-gray whitespace-nowrap">Staked:<span className="text-darker-blue font-semibold"> {data6?.totalTvl && data6?.totalTvl}</span></p>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendingSearch;
