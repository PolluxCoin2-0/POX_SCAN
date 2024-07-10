import { TVLData } from "../../data/HomePageData";
import PoxImg from "../../assets/PoxImg.png";
// import { IoIosArrowForward } from "react-icons/io";
import AreaChartComp from "../../components/AreaChart";
import { getTvlPriceData } from "../../utils/axios/Home";
import { useEffect, useState } from "react";

const TvlContainer = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getTvlPriceData();
        setData(data);
      } catch (error) {
        console.error("Error fetching TVL price data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="">
      <div className="flex justify-between my-6 w-[75%]">
        <p className="font-bold text-xl">TVL</p>
        {/* <p className="flex items-center cursor-pointer">
          More <IoIosArrowForward />
        </p> */}
      </div>

      <div className="w-full flex flex-col md:flex-row justify-between">
        <div className="w-full md:w-[75%] overflow-x-auto">
          <div className="min-w-[800px]">
            {" "}
            {/* Adjust min-width as needed */}
            <div className="bg-mid-yellow flex justify-between items-center font-semibold h-[42px] rounded-xl px-6 shadow-md mb-4">
              <p className="w-[25%]">Project</p>
              <p className="w-[35%]">Category</p>
              <p className="w-[15%]">TVL</p>
              <p className="w-[15%] text-right">Change (24hr)</p>
            </div>
            {TVLData.map((tvl, idx) => (
              <div
                className={`flex flex-row justify-between items-center py-4 mx-0 mb-4 mt-1 rounded-2xl shadow-md bg-white px-6 ${
                  idx % 2 === 0 ? "bg-white" : "bg-gray-50"
                } overflow-x-auto`}
                key={idx}
              >
                <div className="w-[25%] flex space-x-2 items-center whitespace-nowrap">
                  <img src={PoxImg} alt="" />
                  <p>{tvl?.project}</p>
                </div>
                <div className="flex space-x-4 w-[35%]">
                  {tvl?.category.map((category, idx) => (
                    <p
                      className="bg-text-bg-gray px-3 py-1 rounded-lg text-light-gray"
                      key={idx}
                    >
                      {category}
                    </p>
                  ))}
                </div>
                <p className="w-[15%]">{data?.totalTvl}</p>
                <p className="w-[15%] text-right">{tvl?.change24hr}%</p>
              </div>
            ))}
          </div>
        </div>

        {/* Charts */}
        <div className="w-full md:w-[23%] mt-6 md:mt-0">
          <div className="shadow-lg bg-white rounded-xl p-4">
            <p className="font-semibold">TVL</p>
            <AreaChartComp
              value={data?.tvlGraph}
              xDataKey="date"
              yDataKey="count"
              componentChartColor="#c2a3fd"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TvlContainer;
