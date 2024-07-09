import { useEffect, useState } from "react";
import { SearchBarExpand } from "../../../../components"
import CustomPieChart from "../../../../components/CustomPieChart";
import { getPoxGeneratedTableData } from "../../../../utils/axios/Data";


const PoxGenerated = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    
    const fetchData = async () => {
      try {
        const data = await getPoxGeneratedTableData();
        console.log(data);
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

        <div className="flex flex-row justify-between mt-8 mb-8 gap-5">
          <div className="bg-white flex flex-row  justify-around rounded-xl shadow-lg w-[70%] h-auto">
            <div className="text-lg font-bold space-y-12 pt-14 pl-36">
              <p>0.552219</p>
              <p>0.552219</p>
              <p>0.552219</p>
              <p>0.552219</p>
            
            </div>

           <div className=" h-80 w-[50%]">
           <CustomPieChart />
           </div>

           <div className="text-lg font-bold space-y-12  pt-14 pr-36">
              <p>2024</p>
              <p>2023</p>
              <p>2022</p>
              <p>2021</p>
            
            </div>
            
          </div>

          <div className="flex flex-col w-[40%] gap-5 h-96">
            <div className="bg-white rounded-xl shadow-lg h-[40%]">
              <p className="pl-5 pt-5  text-light-gray">Burned for Resources/Fees <span className="px-2 py-1 font-bold rounded-lg bg-light-mid-gray text-dark-brown">?</span></p>
              <p className="text-xl font-bold pl-5 pt-2">9,67,8796,980 POX</p>
              <p className="text-light-gray pl-5 pt-2">=$707,592,308</p>
            </div>

            <div className="bg-white rounded-xl shadow-lg h-[40%]">
              <p className="pl-5 pt-5  text-light-gray">Burned for Resources/Fees <span className="px-2 py-1 font-bold rounded-lg bg-light-mid-gray text-dark-brown">?</span></p>
              <p className="text-xl font-bold pl-5 pt-2">9,67,8796,980 POX</p>
              <p className="text-light-gray pl-5 pt-2">=$707,592,308</p>
            </div>

            <div className="bg-white rounded-xl shadow-lg h-[40%]">
              <p className="pl-5 pt-5  text-light-gray">Burned for Resources/Fees <span className="px-2 py-1 font-bold rounded-lg bg-light-mid-gray text-dark-brown">?</span></p>
              <p className="text-xl font-bold pl-5 pt-2">9,67,8796,980 POX</p>
              <p className="text-light-gray pl-5 pt-2">=$707,592,308</p>
            </div>
          </div>
        </div>
      </div>


      
      <div >
        <p className=" text-xl mb-10 font-bold">List</p>
        <div className="bg-white rounded-md  shadow-lg p-12">
          <div className="flex flex-row justify-around bg-lightest-gray  pt-2 pb-2 rounded-md text-light-gray">
            <p>Date(UTC)</p>
            <p>Pox Price</p>
          </div>

          {data?.map && data?.map ((param, index) => {
        return (
          <>
           <div className="flex flex-row justify-between p-5 border-b-2 border-b-lightest-gray">
               <p className="w-[50%]">{param?.date}</p>
               <p className="w-[50%]">{param?.value}</p>
               
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