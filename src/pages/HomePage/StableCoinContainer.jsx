import {StableCoins} from "../../data/HomePageData";
import PoxImg from "../../assets/PoxImg.png";
import { IoIosArrowForward } from "react-icons/io";
import AreaChartComp from "../../components/AreaChart";

const StableCoinContainer = () => {
  return (
  <div className="pb-6 px-6">
     <div className="flex justify-between my-6 w-[75%]">
        <p className="font-bold text-xl">Stablecoins</p>
        <p className="flex items-center cursor-pointer">
          More <IoIosArrowForward />
        </p>
      </div>
      
    <div className="flex justify-between  w-full">
      <div className="w-[75%] shadow-2xl">
      <div className="rounded-t-2xl flex justify-between items-center flex-row font-semibold h-[62px] text-lg bg-white px-4">
        <p className="w-[30%]">Stable Coin</p>
        <p className="w-[20%]">Circulating Supply</p>
        <p className="w-[20%] text-center">Transfer Count(24h)</p>  
        <p className="w-[30%] text-center">Volume(24h)</p>
      </div>

      <div className=" flex justify-between flex-col">
        {StableCoins.map((stableCoin, idx)=>{
          return (
            <>
            <div className={`flex flex-row justify-between items-center h-[61px] text-light-gray px-4 ${
          idx % 2 === 0 ? 'bg-text-bg-gray' : 'bg-white'} ${
            idx === StableCoins.length-1 ? 'rounded-b-2xl' : 'rounded-none'
          }`}>
            <div className="w-[30%] flex space-x-2 items-center">
          <img src={PoxImg} alt="" />
          <p>{stableCoin?.stableCoin?.coin}</p>
          <p className="bg-text-bg-gray py-1 px-2 rounded-lg text-light-gray">{stableCoin?.stableCoin?.tag}</p>
        </div>

        <p className="w-[20%]">{stableCoin?.circulatingSupply}</p>
        <p className="w-[20%] text-center">{stableCoin?.transferCount}</p>
        <p className="w-[30%] text-center">$ {stableCoin?.volume}</p>
        </div>
            </>
          )
        })}
        </div>
      </div>
       {/* Charts */}
       <div className="w-[20%]">
          <div className="shadow-lg bg-white rounded-xl p-4">
            <p className="font-semibold">Daily Txns (15 Days)</p>
            <AreaChartComp/>
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
