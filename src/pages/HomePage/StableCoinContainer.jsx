import { StableCoins } from "../../data/HomePageData";
import PoxImg from "../../assets/PoxImg.png";
// import { IoIosArrowForward } from "react-icons/io";
import AreaChartComp from "../../components/AreaChart";
import { useEffect, useState } from "react";
import { getNewAndActiveAndTotalAccounts, getStableCoinGraphData, getStakedData } from "../../utils/axios/Home";
import { formatNumberWithCommas } from "../../utils/FormattingNumber";

const StableCoinContainer = () => {
  const [data, setData] = useState({});
  const [data1, setData1] = useState({});
  const [activeAccounts, setActiveAccounts] = useState([]);
  const [newAccounts, setNewAccounts] = useState([]);
  const [totalAccounts, setTotalAccounts] = useState([]);
  const [selectedAccountType, setSelectedAccountType] = useState('NewAccounts');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getStableCoinGraphData();
        setData(data?.message);
        const data1 = await getStakedData();
        setData1(data1);
        const newAndActiveAndTotalAccounts = await getNewAndActiveAndTotalAccounts();

        const transformedTotalAccounts = newAndActiveAndTotalAccounts?.message?.TotalAccount.map(item => ({
          _id: item.date,
          totalaccount: item.totalaccount
        }));

        setActiveAccounts(newAndActiveAndTotalAccounts?.message?.activeAccounts);
        setNewAccounts(newAndActiveAndTotalAccounts?.message?.NewAccounts)
        setTotalAccounts(transformedTotalAccounts);
      } catch (error) {
        console.error("error", error);
      }
    };
    fetchData();
  }, []);

  const getAccountData = () => {
    switch (selectedAccountType) {
      case 'NewAccounts':
        return newAccounts;
      case 'activeAccounts':
        return activeAccounts;
      case 'TotalAccount':
        return totalAccounts;
      default:
        return [];
    }
  };

  const getYAxisType = () => {
    switch (selectedAccountType) {
      case 'NewAccounts':
        return "newaddress";
      case 'activeAccounts':
        return "activeaddress";
      case 'TotalAccount':
        return "totalaccount";
      default:
        return [];
    }
  };


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
          <div className="min-w-[800px]">
            {/* Adjust min-width as needed */}
            <div className="rounded-t-2xl flex justify-between items-center flex-row font-semibold h-[62px] text-lg bg-white px-4">
              <p className="w-[30%]">Stable Coin</p>
              <p className="w-[20%]">Circulating Supply</p>
              <p className="w-[20%] text-center whitespace-nowrap">
                Transfer Count(24h)
              </p>
              <p className="w-[30%] text-center">Volume(24h)</p>
            </div>
            <div className="flex flex-col border-b-2 rounded-b-2xl border-lightest-gray">
              {StableCoins.map((stableCoin, idx) => (
                <div
                  className={`flex flex-row justify-between items-center h-[61px] text-light-gray px-4 ${
                    idx % 2 === 0 ? "bg-text-bg-gray" : "bg-white"
                  } ${
                    idx === StableCoins.length - 1
                      ? "rounded-b-2xl"
                      : "rounded-none"
                  }`}
                  key={idx}
                >
                  <div className="w-[30%] flex space-x-2 items-center">
                    <img src={PoxImg} alt="" />
                    <p>{stableCoin?.stableCoin?.coin}</p>
                    <p className="bg-text-bg-gray py-1 px-2 rounded-lg text-light-gray">
                      {stableCoin?.stableCoin?.tag}
                    </p>
                  </div>

                  <p className="w-[20%]">
                    {" "}
                    {formatNumberWithCommas(
                      Number(data1?.usdtData?.totalSupply ?? 0).toFixed(3)
                    )}
                  </p>
                  <p className="w-[20%] text-center">
                    {data1?.usdtData?.transferCount}
                  </p>
                  <p className="w-[30%] text-center">
                    ${" "}
                    {formatNumberWithCommas(
                      Number(data1?.usdtData?.sumOfAssets ?? 0).toFixed(3)
                    )}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Charts */}

        {/* Protocol Revenue     (NEEDED API) */}  

        
        <div className="w-full md:w-[23%] mt-6 md:mt-0">
          <div className="shadow-lg bg-white rounded-xl p-4 mb-4">
            <p className="font-semibold">Protocol Revenue</p>                                                      
            <AreaChartComp value={data} xDataKey="date" yDataKey="value" componentChartColor="#FFC300" />
          </div>

          {/* New Accounts/ Active Accounts/ Total Accounts */}
          <div className="shadow-lg bg-white rounded-xl p-4 mb-4">
            {/* <p className="">New Accounts/Active Accounts/Total Accounts</p> */}
            <div className="flex justify-around mb-4">
              <button onClick={() => setSelectedAccountType('NewAccounts')} className={`font-semibold px-4 py-2 rounded cursor-pointer 
                ${selectedAccountType === 'NewAccounts' ? 'text-light-mid-gray' : 'text-black'}`}>New Accounts</button>
              <button onClick={() => setSelectedAccountType('activeAccounts')} className={`font-semibold px-4 py-2 rounded cursor-pointer 
                ${selectedAccountType === 'activeAccounts' ? ' text-light-mid-gray' : 'text-black'}`}>Active Accounts</button>
              <button onClick={() => setSelectedAccountType('TotalAccount')} className={`font-semibold px-4 py-2 rounded cursor-pointer 
                ${selectedAccountType === 'TotalAccount' ? 'text-light-mid-gray' : 'text-black'}`}>Total Accounts</button>
            </div>
            <AreaChartComp value={getAccountData()} xDataKey="_id" yDataKey={getYAxisType()} componentChartColor="#964B00" />
          </div>

          {/* Volume(24hr) */}
          <div className="shadow-lg bg-white rounded-xl p-4">
            <p className="font-semibold">Volume(24hr)</p>
            <AreaChartComp value={data} xDataKey="date" yDataKey="value" componentChartColor="#ff0000" />
          </div>
        </div>
        
        
      </div>
    </div>
  );
};

export default StableCoinContainer;
