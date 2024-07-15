import { useEffect, useState } from "react";
import { SearchBarExpand } from "../../components"
import { AiOutlineQuestion } from "react-icons/ai";
import { FaRegCopy } from "react-icons/fa6";
import PoxImg from "../../assets/PoxImg.png";
import { getAccountDetailData } from "../../utils/axios/TransactionDetails";
// import { TransactionDetailPage } from "..";

const OverviewData = () => {
  return (
    <div className="bg-white p-10 rounded-xl shadow-lg">

       <div className="flex flex-row space-x-48 pt-4 pb-4">
        <div className="flex flex-row ">
        <p className="bg-text-bg-gray pt-1  rounded-md px-1 "><AiOutlineQuestion /></p>
        <p className="font-bold pl-2 ">Value</p>
        </div>
        
        <div className="flex flex-row space-x-40 bg-text-bg-gray rounded-md pl-2 pr-2">
        <p className="">100.20975143343034  </p>
        <p className="pt-1"><FaRegCopy /></p>
        </div>
       
       </div>

       <div className="flex flex-row space-x-28 pt-4 pb-4">
        <div className="flex flex-row ">
        <p className="bg-text-bg-gray pt-1 rounded-md px-1 "><AiOutlineQuestion /></p>
        <p className="font-bold pl-2">Contract Address</p>
        </div>
        
        <div className="flex flex-row space-x-5 bg-text-bg-gray rounded-md pl-2 pr-2 py-0">
        <p className="">PVX8hYDtjzna8CLwirccwmg2HbCtT9F2P</p>
        <p className="pt-1"><FaRegCopy /></p>
        </div>
        
       </div>

       <div className="flex flex-row space-x-32 pt-4 pb-4">
        <div className="flex flex-row ">
        <p className="bg-text-bg-gray pt-1 rounded-md px-1 "><AiOutlineQuestion /></p>
        <p className="font-bold pl-2">Method Calling </p>
        </div>
        
        <div className="flex flex-row space-x-56 bg-text-bg-gray rounded-md pl-2 pr-2 py-0">
        <p  className="">a399e04300</p>
        <p className="pt-1"><FaRegCopy /></p>
        </div>
         
       </div>

       <div className="flex flex-row space-x-7 pt-4 pb-4">
        <div className="flex flex-row ">
        <p className="bg-text-bg-gray pt-1 rounded-md px-1 "><AiOutlineQuestion /></p>
        <p className="font-bold pl-2">Trigger Smart Contract</p>
        </div>
        
        <div className="flex flex-row space-x-2">
        <p>From </p>
        <div className="flex flex-row space-x-16 pl-2 pr-2 bg-text-bg-gray rounded-md">
        <p>PV5NV1YPBdN6yxWhz5KoB8SZY</p>
        <p className="pt-1"><FaRegCopy /></p>
        </div>
       
        </div>
       
       <div className="flex flex-row space-x-2">
       <p>TO</p> 
       <div className="flex flex-row space-x-10 pl-2 pr-2 bg-text-bg-gray rounded-md">
       <p >PV5NV1YPBdN6yxWhz5KoB8SZY</p>
       <p className="pt-1"><FaRegCopy /></p>
       </div>
       
       </div>
        
       </div>

       <div className="flex flex-row space-x-3 pt-4 pb-4">
        <div className="flex flex-row ">
        <p className="bg-text-bg-gray pt-1 rounded-md px-1 "><AiOutlineQuestion /></p>
        <p className="font-bold pl-2">All Transfer</p>
        </div>
        
        <div className="flex flex-row space-x-2">
        <p className="pl-24">From </p>
        <div className="flex flex-row space-x-16 pl-2 pr-2 bg-text-bg-gray rounded-md">
        <p>PV5NV1YPBdN6yxWhz5KoB8SZY</p>
        <p className="pt-1"><FaRegCopy /></p>
        </div>
        
        </div>

        <div className="flex flex-row space-x-2">
        <p className="pl-5">TO</p> 
        <div className="flex flex-row space-x-9 pl-2 pr-2 bg-text-bg-gray rounded-md">
        <p>PV5NV1YPBdN6yxWhz5KoB8SZY</p>
        <p className="pt-1"><FaRegCopy /></p>
        </div>
       
        </div>
       
       <div className="flex flex-row">
        <p className="pl-6">Value:</p>
        <p className="bg-text-bg-gray rounded-md pl-2 pr-2 ml-2"> 0.0000000001</p>
        <p className="pl-2"> Name:</p>
        <p className="bg-text-bg-gray rounded-md pl-2 pr-2 mr-2"> WPOX</p>
        <img src={PoxImg}
        alt=""
        className="" />
       </div>
        
       </div>

       <div className="flex flex-row space-x-32 pt-4 pb-4">
       <div className="flex flex-row space-x-2 pl-56">
        <p >From </p>
        <div className="flex flex-row space-x-28 pl-2 pr-2 bg-text-bg-gray rounded-md">
          <div className="flex flex-row space-x-14 pl-2 pr-0 bg-text-bg-gray rounded-md">
          <p>PV5NV1YPBdN6yxWhz5KoB8SZY</p>
        <p className="pt-1"><FaRegCopy /></p>

          </div>
       
        </div>

        <div className="flex flex-row space-x-2">
        <p className="pl-6">TO</p> 
        <div className="flex flex-row space-x-9 pl-2 pr-2 bg-text-bg-gray rounded-md">
        <p>PV5NV1YPBdN6yxWhz5KoB8SZY</p>
        <p className="pt-1"><FaRegCopy /></p>
        </div>
       
        </div>

      
        <div className="flex flex-row">
        <p className="pl-6">Value:</p>
        <p className="bg-text-bg-gray rounded-md pl-2 pr-2 ml-2"> 100.20975143333034065</p>
        <p className="pl-2"> Name:</p>
        <p className="bg-text-bg-gray rounded-md pl-2 pr-2 mr-2">USDX</p>
        <img src={PoxImg}
        alt=""
        className="" />
       </div>
       </div>
    </div>
    </div>
  )
}


const EventLogData = () => {
  return (
    <div className="bg-white p-10 rounded-2xl shadow-lg">
      <div className="flex flex-row space-x-10 w-full">

        <div className="flex flex-row space-x-2 w-[10%]">
        <p className="bg-text-bg-gray px-1 pt-1 mb-72 rounded-md font-bold"><  AiOutlineQuestion/></p>
        <p className="text-lg font-bold">All Logs</p>
       
        </div>
       

        <div className="bg-text-bg-gray p-4 rounded-md w-[90%]">

          <div className="flex flex-row space-x-10" >
            <p className="bg-mid-light-gray font-bold text-lg pl-3 pr-4 rounded-md">Loglist:</p>
            <p className="font-bold bg-mid-light-gray pl-2 pr-2 rounded-full">0</p>
          </div>

          <div className="flex flex-row space-x-7 pt-4" >
            <p className="bg-mid-light-gray font-bold text-lg pl-3 pr-3 rounded-md" >Address:</p>
            <p className="text-lg text-dark-yellow">TM7WrfJtasPNevDKE279ANnwCfYKbdrYP7</p>
          </div>

          <div className="flex flex-row space-x-14 pt-4" >
            <p className="bg-mid-light-gray font-bold text-lg pl-3 pr-3 rounded-md">Data:</p>
            <p className="text-lg text-darker-blue">0000000000000000000000000000000000000000000efkfffoj</p>
          </div>

          <div className="pt-4" >
            <p className="bg-mid-light-gray font-bold text-lg pl-2 mr-[1200px] rounded-md">Topics: </p>
            <div>
              <div className="flex flex-row space-x-5 pt-5">
                <p className="bg-mid-light-gray px-3 rounded-md text-lg font-bold">0.</p>
                <p>b6fd53efaa712245053b41c89209b2f829b5d49093afe7feeb0b1b45f222874f</p>
              </div>

              <div className="flex flex-row space-x-5 pt-2">
                <p className="bg-mid-light-gray px-3 rounded-md text-lg font-bold">1.</p>
                <p>b6fd53efaa712245053b41c89209b2f829b5d49093afe7feeb0b1b45f222874f</p>
              </div>

              <div className="flex flex-row space-x-5 pt-2">
                <p className="bg-mid-light-gray px-3 rounded-md text-lg font-bold">2.</p>
                <p>b6fd53efaa712245053b41c89209b2f829b5d49093afe7feeb0b1b45f222874f</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


const TransactionDetailPage= () => {

  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAccountDetailData();
        
        setData(data?.message);
      } catch (error) {
        console.log('error', error);
      }
    };
    
    fetchData();
  }, []);

  const [isRender, setIsRender] = useState("Overview");

  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
      setInputValue(event.target.value);
  };

  const renderItemComponent = () => {
    switch (isRender) {
      case "Overview":
        return <OverviewData />;
      case "Event Logs":
        return <EventLogData/>;
      default:
        return null; // or any fallback component or message
    }
  };

  // console.log(data?.transactions)
  return (
    <div className="px-12 pb-12">
       {/* First Div */}
      <div>
        <SearchBarExpand />
      </div>

      {/* Second Div */}
      <div className="bg-white rounded-2xl shadow-lg p-10">

        <p className="text-lg font-bold">Transaction Details</p>

        <div className="flex flex-row space-x-4 pt-3">
          <p className=" font-bold ">Account</p>
          <p className="text-dark-yellow font-bold">789 </p>
           <p className="font-bold">KHHSDF</p>
          <p className="font-bold bg-lightest-gray p-1 pl-2 pr-2 rounded-lg">HGDFS
          </p> 
          <p className="font-bold">to</p>
          <p className="font-bold text-dark-yellow">098</p>
        </div>

        <div>
          <div className="flex flex-row space-x-52 pt-10 pb-5  border-b-[1px] border-lightest-gray">
            <div className="flex flex-row">
            <p className="bg-lightest-gray pt-1 rounded-md px-1 "><AiOutlineQuestion /></p>
            <p className="font-bold pl-2">Hash:</p>
            </div>
           
            <p className="font-bold">b6fd53efaa712245053b41c89209b2f829b5d49093afe7feeb0b1b45f222874f</p>
          </div>

          <div className="flex flex-row space-x-36 border-b-[1px] pb-5 pt-5 border-lightest-gray">
            <div className="flex flex-row">
            <p className="bg-lightest-gray pt-1 rounded-md px-1 "><AiOutlineQuestion /></p>
            <p className="font-bold pl-2">Confirmed SRs:</p>
            </div>
          
            <div className="flex flex-row space-x-5">
              <p>5</p>
              <p>Chain Cloud</p>
              <p>Valkyrie_Investments</p>
              <p>Crypto Innovation Fund</p>
              <p>Luganodes</p>
            </div>
          </div>

          <div className="flex flex-row space-x-52 border-b-[1px] pb-5 pt-5 border-lightest-gray">
            <div className="flex flex-row">
            <p className="bg-lightest-gray pt-1 rounded-md px-1 "><AiOutlineQuestion /></p>
            <p className="font-bold pl-2">Result</p>
            </div>
         
            <p className=" text-dark-green bg-light-green pl-2 pr-2 rounded-md">SUCCESSFULL</p>
          </div>

          <div className="flex flex-row space-x-52 border-b-[1px] pt-5 pb-5 border-lightest-gray">
            <div className="flex flex-row">
            <p className="bg-lightest-gray pt-1 rounded-md px-1 "><AiOutlineQuestion /></p>
            <p className="font-bold pl-2">Block:</p>
            </div>
          
            <p className="font-bold">63285460</p>
          </div>

          <div className="flex flex-row space-x-52 border-b-[1px] pt-5 pb-5 border-lightest-gray">
            <div className="flex flex-row">
            <p className="bg-lightest-gray pt-1 rounded-md px-1 "><AiOutlineQuestion /></p>
            <p className="font-bold pl-2">Status:</p>
            </div>
          
            <div className="flex flex-row space-x-8">
              <p className="text-dark-orange bg-light-red pl-2 pr-2 rounded-md">UNCONFIRMED</p>
              <p className="font-bold">Confirmed by 5 blocks</p>
              <p></p>
            </div>
          </div>

          <div className="flex flex-row space-x-52 border-b-[1px] pt-5 pb-5 border-lightest-gray">
            <div className="flex flex-row">
            <p className="bg-lightest-gray pt-1 rounded-md px-1 "><AiOutlineQuestion /></p>
            <p className="font-bold pl-2">Time:</p>
            </div>
          
            <p className="font-bold">18 secs ago | 2024-07-09 05:02:06 (UTC)</p>
          </div>

          <div className="flex flex-row space-x-12 border-b-[1px] pt-5  pb-5 border-lightest-gray">
            <div className="flex flex-row">
            <p className="bg-lightest-gray pt-1 rounded-md px-1 "><AiOutlineQuestion /></p>
            <p className="font-bold">Resources Consumed & Fee:</p>
            </div>
          
            <p className="font-bold  bg-lightest-gray pl-2 pr-2 rounded-md">265 Bandwidth </p>
          </div>
        </div>
      </div>

      {/* Third Div */}
      <div className="pt-10">
        <div className="flex flex-row">
          <p  className={`cursor-pointer py-3 px-12 whitespace-nowrap  ${
                  isRender === "Overview"
                    ? "bg-white rounded-t-xl"
                    : " text-black rounded-xl"
                }`}
            onClick={() => setIsRender("Overview")}>Overview</p>

          <p  className={`cursor-pointer py-3 px-12 whitespace-nowrap  ${
                  isRender === "Event Logs"
                    ? "bg-white rounded-t-xl"
                    : " text-black rounded-t-xl"
                }`}
          onClick={() => setIsRender("Event Logs")}>Event Logs</p>
        </div>

        <div>{renderItemComponent()}</div>
      </div>


      {/* Fourth Div */}
      <div className="bg-white mt-10 rounded-lg w-full flex flex-row pb-8">
        <div className="flex flex-row w-[20%] p-10">
          <p className="bg-mid-light-gray px-1 mb-28 rounded-md pt-1"><AiOutlineQuestion /></p>
          <p className="pl-2">Private Note:</p>
        </div>

        <div className="w-[80%]">
        <div className="pt-10">
            <input 
                type="text" 
                rows={30}
                cols={14}
                value={inputValue} 
                onChange={handleChange} 
                placeholder="Enter the transaction note and press the Enter Key or click the blank space to save |"
            />
            <p>{inputValue}</p>
        </div>
          <div>
          <button className="bg-dark-yellow py-2 px-8 font-bold rounded-lg  text-black cursor-pointer mt-14 " >Submit </button>
          
          </div>
          <div className="pt-8">
            <p>Although this is only viewable to you, do not store any sensitive data including your password, mnemonic, or private key here.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TransactionDetailPage;
