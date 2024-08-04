import { useEffect, useState } from "react";
import { SearchBarExpand } from "../../../../components"
import VerticalComposedChart from "../../../../components/VerticalComposedChart";
import { getMarketCapTableData } from "../../../../utils/axios/Data";

const PoxMarketCap = () => {

  const [data, setData] = useState({});

  useEffect(() => {
    
    const fetchData = async () => {
      try {
        const data = await getMarketCapTableData();
        
        setData(data?.message);
        
        
      } catch (error) {
        console.log('error', error);
      } 
    };

    fetchData();
  }, []);
  return (
    <div className="px-12 pb-12">

      <div>
        <SearchBarExpand />
      </div>

      <div className=" text-xl font-bold">
        <p>POX Market Cap</p>
        <div className="bg-white rounded-md mt-5 px-12 py-6 mb-12 shadow-lg">
        <div className="pt-5 pl-14 pr-20  h-[550px]">
            <VerticalComposedChart  width="1000"
            value={data}
            xAxis="_id"
            yAxis="marketCap"/>
            </div>
        </div>
      </div>

      <div >
        <p className=" text-2xl mb-10 font-bold">List</p>
        <div className="bg-white rounded-md  shadow-lg p-10">
          <div className="flex flex-row justify-around bg-lightest-gray ml-8 mr-8 pt-2 pb-2 rounded-md text-light-gray">
            <p className="w-[50%] text-center">Date(UTC)</p>
            <p className="w-[50%] text-center">Pox Price</p>
          </div>

          {data?.map && data?.slice(0, 10).map ((param, index) => {
        return (
          <>
           <div className="flex flex-row justify-between p-5 border-b-2 border-b-lightest-gray">
               <p className="w-[50%] text-center">{param?._id}</p>
               <p className="w-[50%] text-center">{param?.marketCap}</p>
               
           </div>
          </>
        )
       })}

           
        </div>
      </div>
    </div>
  )
}

export default PoxMarketCap;