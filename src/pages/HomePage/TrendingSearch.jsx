import PoxImg from "../../assets/PoxImg.png";
import UsdxImg from "../../assets/UsdxImg.png";
import TotalAccounts from "../../assets/TotalAccounts.png";
import TVL from "../../assets/TVL.png";
import TotalTxns from "../../assets/TotalTxns.png";
import TotalTransferVolume from "../../assets/TotalTransferVolume.png";
import { useEffect, useState } from "react";
import AreaChartComp from "../../components/AreaChart";
import { getResourceDetailsData, getTrendingSearchData } from "../../utils/axios/Home";
import { formatNumberWithCommas } from "../../utils/FormattingNumber";


const CardForTrendingSearch = ({ icon, title, value, valueFor24hr }) => {
  return (
    <div className="flex justify-between ">
      <div className="flex flex-row items-center space-x-4">
        <div>
          <img src={icon} alt="" />
        </div>
        <div>
          <p className="text-light-gray pb-1">{title}</p>
          <p className="font-semibold">{value && formatNumberWithCommas(parseInt(value))}</p>
        </div>
      </div>

      <div>
        <p className="text-light-gray pb-1">24h</p>
        <p className="font-semibold">{valueFor24hr && formatNumberWithCommas(parseInt(valueFor24hr))}</p>
      </div>
    </div>
  );
};

const TrendingSearch = () => {
  const [selectedOption, setSelectedOption] = useState("Monthly");
  const [data, setData] =useState({});
 const [data2, setData2] = useState({});
  useEffect(()=>{
    const fetchData=async()=>{
    try {
      const data = await getTrendingSearchData();
      const data2= await getResourceDetailsData();
      setData(data?.message);
      setData2(data2?.message);
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
    <div className="flex justify-between py-6">
      {/* Left Side Trending Search */}
      <div className="w-[75%]">
        <div className="flex justify-between space-x-4 pb-6">
          <div className="flex space-x-4 items-center">
            <p className="font-semibold text-xl">Trending Search :</p>
            <div className="flex space-x-2 items-center font-semibold">
              <img src={PoxImg} alt="" />
              <p>POX</p>
            </div>
            <div className="flex space-x-2 items-center font-semibold">
              <img src={UsdxImg} alt="" />
              <p>USDX</p>
            </div>
          </div>
          <p className="bg-light-red px-3 py-1 rounded-2xl text-dark-red">
            last 24 hours ago
          </p>
        </div>

        <div className="shadow-md px-2 mb-6 rounded-xl py-6 bg-white flex flex-row justify-evenly">
          <div className="flex flex-col w-[40%] ">
            <div className="mb-6 border-b-[2px] border-text-bg-gray pb-6">
              <CardForTrendingSearch
                icon={TotalAccounts}
                title="Total Accounts"
                value={data?.totaladdr}
                valueFor24hr={data?.last24addr}
              />
            </div>
            <CardForTrendingSearch icon={TotalTxns} title="Total Txns"  value={data?.totaltxn} valueFor24hr={data?.last24hourtxn}/>
          </div>

          <div className="border-r-[1px] blur-sm"></div>

          <div className="flex flex-col justify-around w-[40%]">
            <div className="mb-6 border-b-[2px] border-text-bg-gray pb-6">
              <CardForTrendingSearch icon={TVL} title="TVL (Current)" />
            </div>
            <CardForTrendingSearch
              icon={TotalTransferVolume}
              title="Total Transfer Volume"
            />
          </div>
        </div>

        <div className="flex justify-between shadow-lg bg-white rounded-xl p-4">
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
            <p className="font-semibold">00</p>
          </div>

          <div>
            <p className="text-light-gray pb-1">Total Contracts:</p>
            <p className="font-semibold">00</p>
          </div>

          <div>
            <p className="text-light-gray pb-1">Bandwidth:</p>
            <p className="font-semibold">{data2?.bandwidth}</p>
          </div>

          <div>
            <p className="text-light-gray">Energy:</p>
            <p className="font-semibold">4245642</p>
          </div>
        </div>
      </div>

      {/* Right Side Chart */}
      <div className="w-[20%]  rounded-xl px-4 pb-6">
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
            <p className="font-medium text-light-gray">POX <span className="text-darker-blue font-bold">$0.755</span></p>
          </div>

          {/* Charts Library */}
          <div className="">
            <div>
                <AreaChartComp/>
            </div>
                <div className="flex justify-between">
            <div >
              <p className="text-light-gray mb-1">Market Cap:<span className="text-darker-blue font-semibold"> $000</span></p>
              <p className="text-light-gray">Volume(24h):<span className="text-darker-blue font-semibold"> 2423</span></p>
            </div>
            <div>
              <p className="text-light-gray mb-1">Supply:<span className="text-darker-blue font-semibold"> 0 POX</span></p>
              <p className="text-light-gray">Staked:<span className="text-darker-blue font-semibold"> 7,210,345</span></p>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendingSearch;
