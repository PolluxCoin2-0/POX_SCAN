import { useEffect, useState } from "react";
import SearchBarExpand from "../../components/SearchBarExpand";
// import { FaToggleOn } from "react-icons/fa";
import { MdKeyboardArrowRight } from "react-icons/md";
import Pagination from "../../components/Pagination";
import { getAccountsData, getAccountTableData } from "../../utils/axios/Blockchain";
import { shortenString } from "../../utils/shortenString";
import { secondsAgo } from "../../utils/secondAgo";
import { Link } from "react-router-dom";



const Accounts = () => {
   const [data, setData] = useState({});
   const [data1, setData1] = useState({});

   useEffect(() => {
    
    const fetchData = async () => {
      try {
        const data = await getAccountsData();
        const data1 = await getAccountTableData();

        

        setData(data?.message);
        setData1(data1?.message);
        
      } catch (error) {
        console.error('error', error);
      } 
    };

    fetchData();
  }, [])

  // For Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10; // Example total pages

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const [onSearch, setOnSearch] = useState("");

  return (
    <div className="px-4 md:px-12 pb-12">
      <div>
        <SearchBarExpand onSearch={setOnSearch} />
      </div>

      <p className="font-bold text-2xl pb-10">Accounts</p>
      <div className="flex flex-col space-y-6 md:space-y-0 md:flex-row justify-around ">
        <div className="w-full md:w-[32%] bg-white shadow-lg rounded-2xl p-8">
          <div className="flex flex-row justify-between pt-1 ">
            <p className="font-bold text-lg">Number of Accounts</p>
            <div className="flex flex-row">
              <p>More</p>
              <MdKeyboardArrowRight className="mt-1 text-xl" />
            </div>
          </div>

          <div className=" w-full flex flex-row justify-between pt-9 pl-1 ">
            <div>
              <p className="font-bold text-xl">{data?.totaladdr && data?.totaladdr}</p>
              <p className="pt-4 text-sm text-light-gray">Total</p>
            </div>

            <div>
              <p className="text-xl font-bold text-dark-green">+{data?.yestudayaddr && data?.yestudayaddr}</p>
              <p className="pt-4 text-sm text-light-gray flex justify-end">
                Last 24h
              </p>
            </div>
          </div>
        </div>

        <div className="w-full md:w-[32%]  rounded-2xl p-8 bg-white shadow-md ">
          <div className=" flex flex-row justify-between pt-1">
            <p className="font-bold text-lg">POX Holders</p>
            <div className="flex flex-row">
              <p>More</p>
              <MdKeyboardArrowRight className="mt-1 text-xl" />
            </div>
          </div>

          <div className=" w-full flex flex-row justify-between pt-9 pl-1">
            <div>
              <p className="text-xl font-bold">{data?.hodlers && data?.hodlers}</p>
              <p className="pt-4 text-sm text-light-gray">Total holders</p>
            </div>

            <div>
              <p className="text-xl font-bold text-light-brown">{data?.hpercen && data?.hpercen}%</p>
              <p className="pt-4 text-sm text-light-gray flex justify-end">
                Percentage
              </p>
            </div>
          </div>
        </div>

        <div className="w-full md:w-[32%] rounded-2xl p-8 bg-white shadow-md ">
          <div className="flex flex-row justify-between pt-1">
            <p className="font-bold">POX Active Accounts</p>
            <div className="flex flex-row">
              <p>More</p>
              <MdKeyboardArrowRight className="mt-1 text-xl" />
            </div>
          </div>

          <div className=" w-full flex flex-row justify-between pt-9 pl-1">
            <div>
              <p className="text-xl font-bold">{data?.avgdailyactiveadr && data?.avgdailyactiveadr}</p>
              <p className="pt-4 text-sm text-light-gray flex ">
                Daily Active Accounts
              </p>
            </div>

            <div>
              <p className="text-xl font-bold text-dark-red">- {data?.percentagedailyactiveaddr && data?.percentagedailyactiveaddr.toFixed(2)}%</p>
              <p className="pt-4 text-sm text-light-gray flex justify-end">
                24h Change
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white  rounded-2xl p-2 md:p-7  overflow-x-auto mt-8 md:mt-16">
        <div className="flex flex-row justify-start gap-5 min-w-[1500px] md:min-w-full">
          <p className="pb-5 font-medium text-light-gray">
            The latest <span className="text-black font-semibold"> 10,000  </span>
            records are shown, sorted by decreasing POX balance by default{" "}
          </p>
          {/* <p className="text-light-gray text-3xl ">
            {" "}
            <FaToggleOn />{" "}
          </p> */}
          {/* <p className="text-light-gray flex justify-end">Hide contract address</p> */}
          {/* <div className="bg-lightest-gray font-bold pl-2 rounded-md w-5 h-6">
            ?
          </div> */}
        </div>

        <div className="flex flex-row justify-around p-2 bg-lightest-gray rounded-lg min-w-[1500px] md:min-w-full">
          <p className=" w-[5%] text-center  font-bold ">#</p>
          <p className=" w-[20%] text-center font-bold  ">Account</p>
          <p className=" w-[18%] text-center font-bold ">Pox Balance</p>
          <p className=" w-[10%] text-center font-bold  ">Percentage</p>
          <p className=" w-[10%] text-center  font-bold  whitespace-nowrap">
            POX Power
          </p>
          <p className=" w-[10%] text-center font-bold ">Pox Count</p>
          <p className=" w-[15%] text-center font-bold  ">Age</p>
          
        </div>

        {data1?.apiResult && data1?.apiResult.map((stablecoin, index) => {
          return (
            <>
              <div className="flex flex-row  justify-around border-b-2 p-2 pb-4 pt-4 border-text-bg-gray min-w-[1500px] md:min-w-full" key={index}>
                <p className=" text-center w-[5%]">{index+1}</p>
                <Link to={`/tokendetailpage/${stablecoin?.address}`} className=" w-[20%] text-center  text-dark-red">
                <p >{shortenString(stablecoin?.address && stablecoin?.address,10)}</p>
                </Link>
               
                <p className="  w-[18%] text-center ">{stablecoin?.balance && Number(stablecoin?.balance).toFixed(6)}</p>
                <p className=" w-[10%] text-center ">{stablecoin?.percentage && Number(stablecoin?.percentage).toFixed(2)} %</p>
                <p className=" w-[10%] text-center ">{stablecoin?.poxpower && stablecoin?.poxpower}</p>
                <p className=" w-[10%] text-center ">{stablecoin?.txnCount && stablecoin?.txnCount}</p>
                <p className=" w-[15%] text-center ">{stablecoin?.age && secondsAgo(stablecoin?.age)}</p>
                
              </div>
            </>
          );
        })}

        <div className="flex justify-start md:justify-end min-w-[800px] overflow-x-auto">
        <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
        </div>
      </div>
    </div>
  );
};

export default Accounts;
