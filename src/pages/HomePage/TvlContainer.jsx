import { TVLData } from "../../data/HomePageData";
import PoxImg from "../../assets/PoxImg.png";
import { IoIosArrowForward } from "react-icons/io";

const TvlContainer = () => {
  return (
    <div>
      <div>
        <p className="font-bold text-lg">TVL</p>
        <p>More <IoIosArrowForward />  </p>
      </div>

      <div>
        <div className="bg-mid-yellow flex justify-between items-center font-semibold h-[42px] rounded-xl px-2 mx-6">
          <p>Project</p>
          <p>Category</p>
          <p>TVL</p>
          <p>Change (24hr)</p>
        </div>

        {TVLData.map((tvl, idx) => {
          return (
            <>
              <div
                className="flex flex-row justify-between items-center py-4 px-2 mx-6 mb-4 mt-1 rounded-2xl shadow-lg"
                key={idx}
              >
                <div className="flex space-x-2 items-center">
                  <img src={PoxImg} alt="" />
                  <p>{tvl?.project}</p>
                </div>
                <div className="flex space-x-4">
                  {tvl?.category.map((category, idx) => (
                    <p className="bg-text-bg-gray px-3 py-1 rounded-lg text-light-gray" key={idx}>{category}</p>
                  ))}
                </div>

                <p>{tvl?.tvl}</p>
                <p>{tvl?.change24hr}%</p>
              </div>
            </>
          );
        })}
      </div>

      {/* Charts */}
      <div>
        <div>
          <p>Daily Txns (15 Days)</p>
          {/* Charts library integration */}
        </div>
        <div className="shadow-lg px-4 px-2">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus, accusantium.</p>
        </div>
      </div>
    </div>
  );
};

export default TvlContainer;
