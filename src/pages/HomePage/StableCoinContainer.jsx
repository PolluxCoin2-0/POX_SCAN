import {StableCoins} from "../../data/HomePageData";
import PoxImg from "../../assets/PoxImg.png";

const StableCoinContainer = () => {
  return (
  <>
      <p className="font-bold text-xl">Stablecoins</p>
    <div className="rounded-2xl shadow-2xl mx-6 my-4 px-6">
      <div className="flex justify-between items-center flex-row font-semibold h-[62px] text-lg rounded-2xl bg-white">
        <p>Stable Coin</p>
        <p>Circulating Supply</p>
        <p>Transfer Count(24h)</p>  
        <p>Volume(24h)</p>
      </div>

      <div className="flex justify-between flex-col">
        {StableCoins.map((stableCoin, idx)=>{
          return (
            <>
            <div className={`flex flex-row justify-between items-center h-[61px] rounded-2xl text-light-gray px-2 ${
          idx % 2 === 0 ? 'bg-text-bg-gray' : 'bg-white'
        }`}>
            <div className="w-1/4 flex space-x-2 items-center">
          <img src={PoxImg} alt="" />
          <p>{stableCoin?.stableCoin?.coin}</p>
          <p className="bg-text-bg-gray py-1 px-2 rounded-lg text-light-gray">{stableCoin?.stableCoin?.tag}</p>
        </div>

        <p>{stableCoin?.circulatingSupply}</p>
        <p>{stableCoin?.transferCount}</p>
        <p>$ {stableCoin?.volume}</p>
        </div>
            </>
          )
        })}
        
      </div>
    </div>
    </>
  );
};

export default StableCoinContainer;
