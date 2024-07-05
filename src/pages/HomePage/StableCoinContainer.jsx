import {StableCoins} from "../../data/HomePageData";
import PoxImg from "../../assets/PoxImg.png";
// import { IoIosArrowForward } from "react-icons/io";
import AreaChartComp from "../../components/AreaChart";
import { useEffect, useState } from "react";
import { getStableCoinGraphData, getStakedData } from "../../utils/axios/Home";
import { formatNumberWithCommas } from "../../utils/FormattingNumber";


const StableCoinContainer = () => {

  const [data, setData] = useState({});
  const [data1, setData1] =useState({});

  useEffect(() => {
    
    const fetchData = async () => {
      try {
        const data = await getStableCoinGraphData();
        const data1= await getStakedData();
        

        setData(data?.message);
        setData1(data1);
      } catch (error) {
        console.error('error', error);
      } 
    };

    fetchData();

  }, [])
  return (
  <div className="pb-6">
     <div className="flex justify-between my-6 w-[75%]">
        <p className="font-bold text-xl">Stablecoins</p>
        {/* <p className="flex items-center cursor-pointer">
          More <IoIosArrowForward />
        </p> */}
      </div>
      
    <div className="flex flex-col md:flex-row justify-between  w-full">
    <div className="w-full md:w-[75%]  overflow-x-auto">
  <div className="min-w-[800px]"> {/* Adjust min-width as needed */}
    <div className="rounded-t-2xl flex justify-between items-center flex-row font-semibold h-[62px] text-lg bg-white px-4">
      <p className="w-[30%]">Stable Coin</p>
      <p className="w-[20%]">Circulating Supply</p>
      <p className="w-[20%] text-center whitespace-nowrap">Transfer Count(24h)</p>
      <p className="w-[30%] text-center">Volume(24h)</p>
    </div>

    <div className="flex flex-col border-b-2 rounded-b-2xl border-lightest-gray">
      {StableCoins.map((stableCoin, idx) => (
        <div
          className={`flex flex-row justify-between items-center h-[61px] text-light-gray px-4 ${
            idx % 2 === 0 ? 'bg-text-bg-gray' : 'bg-white'} ${
            idx === StableCoins.length - 1 ? 'rounded-b-2xl' : 'rounded-none'
          }`}
          key={idx}
        >
          <div className="w-[30%] flex space-x-2 items-center">
            <img src={PoxImg} alt="" />
            <p>{stableCoin?.stableCoin?.coin}</p>
            <p className="bg-text-bg-gray py-1 px-2 rounded-lg text-light-gray">{stableCoin?.stableCoin?.tag}</p>
          </div>

          <p className="w-[20%]">  {formatNumberWithCommas(Number(data1?.usdtData?.totalSupply ?? 0).toFixed(3))}</p>
          <p className="w-[20%] text-center">{data1?.usdtData?.transferCount}</p>
          <p className="w-[30%] text-center">$ {formatNumberWithCommas(Number(data1?.usdtData?.sumOfAssets ?? 0).toFixed(3))}</p>
        </div>
      ))}
    </div>
  </div>
</div>



       {/* Charts */}
       <div className="w-full md:w-[20%] mt-6 md:mt-0">
          <div className="shadow-lg bg-white rounded-xl p-4">
            <p className="font-semibold">Daily Txns (15 Days)</p>
            <AreaChartComp
            value={data}
            xDataKey="date"
            yDataKey="value"/>
          </div>
          <div className="shadow-lg bg-white rounded-lg p-4 mt-4">
            <p className="font-semibold pb-2">Lorem ipsum dolor sit amet.</p>
            <p className="text-light-gray">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus,
              accusantium.
            </p>
          </div>
        </div>
    </div>
    </div>
  );
};

export default StableCoinContainer;
