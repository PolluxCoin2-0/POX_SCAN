import { useEffect, useState } from "react";
import { SearchBarExpand } from "../../../../components"
import AreaChartComp from "../../../../components/AreaChart";
import { getPoxGeneratedTableData } from "../../../../utils/axios/Data";


const PoxGenerated = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    
    const fetchData = async () => {
      try {
        const data = await getPoxGeneratedTableData();
        
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

      <div>
        <p className=" text-lg font-bold">POX Generated/Burned</p>

        <div className="flex flex-row justify-between mt-8 mb-8 gap-5 w-full">
          <div className="bg-white flex flex-row  justify-around rounded-xl shadow-lg p-5 h-[450px] w-[70%]">
            {/* <div className="text-lg font-bold space-y-12 pt-14 pl-36">
              <p>0.552219</p>
              <p>0.552219</p>
              <p>0.552219</p>
              <p>0.552219</p>
            
            </div> */}

           <div className=" h-[400px] w-[800px] pt-5 pb-5">
           <AreaChartComp 
           value={data}
           xDataKey="date"
           yDataKey="value"
           componentChartColor="#493808"/>
           </div>
{/* 
           <div className="text-lg font-bold space-y-12  pt-14 pr-36">
              <p>2024</p>
              <p>2023</p>
              <p>2022</p>
              <p>2021</p>
            
            </div> */}
            
          </div>

          <div className="flex flex-col w-[30%] h-[450px] gap-5 ">
            <div className="bg-white rounded-xl shadow-xl h-[50%]">
              <p className="pl-5 pt-5  text-light-gray">Burned for Resources/Fees <span className="px-2 py-1 font-bold rounded-lg bg-light-mid-gray text-dark-brown">?</span></p>
              <p className="text-xl font-bold pl-5 pt-2">9,697,482,567 Pox</p>
              <p className="text-light-gray pl-5 pt-2">≈$707,563,268</p>
            </div>

            <div className="bg-white rounded-xl shadow-xl h-[50%]">
              <p className="pl-5 pt-5  text-light-gray">Burned on Independence Day<span className="px-2 py-1 font-bold rounded-lg bg-light-mid-gray text-dark-brown">?</span></p>
              <p className="text-xl font-bold pl-5 pt-2">1,000,000,000 Pox</p>
              <p className="text-light-gray pl-5 pt-2">≈$42,350,000</p>
            </div>

            <div className="bg-white rounded-xl shadow-xl h-[50%]">
              <p className="pl-5 pt-5  text-light-gray">Transferred to USDD Minting Contract<span className="px-2 py-1 font-bold rounded-lg bg-light-mid-gray text-dark-brown">?</span></p>
              <p className="text-xl font-bold pl-5 pt-2">8,997,562,047 pox</p>
              <p className="text-light-gray pl-5 pt-2">≈$706,295,176</p>
            </div>
          </div>
        </div>
      </div>


      
      <div >
        <p className=" text-xl mb-10 font-bold">List</p>
        <div className="bg-white rounded-md  shadow-lg p-12">
          <div className="flex flex-row justify-around bg-lightest-gray  pt-2 pb-2 rounded-md text-light-gray">
            <p className="w-[50%] text-center">Date(UTC)</p>
            <p className="w-[50%] text-center">Pox Price</p>
          </div>

          {data?.map && data?.slice(0, 10).map ((param, index) => {
        return (
          <>
           <div className="flex flex-row justify-between p-5 border-b-2 border-b-lightest-gray">
               <p className="w-[50%] text-center">{param?.date}</p>
               <p className="w-[50%] text-center">{param?.value}</p>
               
           </div>
          </>
        )
       })}

         
        </div>
      </div>
    </div>
  )
}

export default PoxGenerated