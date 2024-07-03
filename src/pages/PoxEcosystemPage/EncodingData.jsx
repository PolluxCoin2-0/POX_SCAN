import { useState } from "react";
import {FaRegCopy} from "react-icons/fa6";
import PublicKey from "../../components/PublicKey";
import PrivateKey from "../../components/PrivateKey";
import { MdArrowRightAlt } from "react-icons/md";
import { HiMiniArrowLongLeft } from "react-icons/hi2";
import { SiTicktick } from "react-icons/si";

const EncodingTable = ({title1, title2, placeholder1, placeholder2}) => {


  const [isCopy, setIsCopy] = useState(false);

  const [textArea1, setTextArea1] = useState("");
  const [textArea2, setTextArea2] = useState("");

  const handleCopy = (value) => {
    navigator.clipboard.writeText(value);
    setIsCopy(!isCopy);

    setTimeout(() => {
      setIsCopy(false);
    }, 2000);
  };

  return (
    <div className="bg-white pt-2 pb-40 rounded-lg">
     <div className="flex flex-row justify-around pt-14 items-center">
        <div>
             <p className="text-lg font-bold pb-5">{title1}</p> 
           
            <textarea
            id="exampleTextarea"
            rows="12"
            cols={66}
            className="shadow appearance-none border-text-bg-gray border-[1px] rounded-xl w-full px-6 py-4  text-gray-700 leading-tight focus:outline-none focus:shadow-outline resize-none"
            placeholder={placeholder1}
            onChange={(e)=>setTextArea1(e.target.value)}
            > </textarea>

            <div className="flex flex-row justify-end items-center -mt-9 mr-4">
              { 
                  isCopy ? (
                    <>
                 <SiTicktick className="text-light-gray"
                  onClick={()=>handleCopy(textArea1)}/> 
                 <p className="text-light-gray pl-1">copied</p>
                 </>
                 )
                 :
                 (
                  <>
                  <FaRegCopy className="text-light-gray"
                  onClick={()=>handleCopy(textArea1)}/> 
                 <p className="text-light-gray pl-1">copy</p>

                 
                 </>
                 )
              }
               
            </div>
        
        </div>

        < div className="flex flex-col ">
          
          <button className="bg-dark-yellow py-2 px-16 font-bold rounded-lg  text-black cursor-pointer mt-14 " > Convert </button>
          <MdArrowRightAlt  className="ml-36 -mt-8 mr-12" size={28}/>
          
          
          <button className="bg-white py-2  font-bold rounded-lg text-black border-2 cursor-pointer mt-5 " > Convert </button>
          < HiMiniArrowLongLeft  className="-mt-8 ml-12" size={24}/>

        <button className="bg-white py-2 px-16 font-bold rounded-lg text-black border-2 cursor-pointer mt-5  " > Reset </button>
        
        </div>
        <div>
            <p className="text-lg font-bold pb-5">{title2}</p>
            <textarea
            id="exampleTextarea"
            rows="12"
            cols={66}
            className="shadow appearance-none border-text-bg-gray border-[1px] rounded-xl w-full px-6 py-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline resize-none"
            placeholder={placeholder2}
            onChange={(e) => setTextArea2(e.target.value)}
            ></textarea>

                 <div className="flex flex-row justify-end items-center -mt-9 mr-4">
                 { 
                  isCopy ? (
                    <>
                 <SiTicktick className="text-light-gray"
                  onClick={()=>handleCopy(textArea2)}/> 
                 <p className="text-light-gray pl-1">copied</p>
                 </>
                 )
                 :
                 (
                  <>
                  <FaRegCopy className="text-light-gray"
                  onClick={()=>handleCopy(textArea2)}/> 
                 <p className="text-light-gray pl-1">copy</p>

                 
                 </>
                 )
              }
            </div>
        </div>
      </div>
    </div>
  )
}

const EncodingData = () => {

  const [isRender, setIsRender] = useState("Pollux- EVM Address");

 
  const renderItemComponent = () => {
    switch (isRender) {
      case "Pollux- EVM Address":
        return <EncodingTable 
        title1="Pollux Address" 
        title2="Ethereum Virtual Machine (EVM) Address"
        placeholder1="Enter one or  more POLLUX addresses with each address on a separate line, starting with the letter P"
        placeholder2="Enter one or  more EVM addresses with each address on a separate line, starting with 0x"/>;

      case "Base64 Encode /Decode":
      return <EncodingTable 
      title1="Hex String" 
      title2="Base64"
      placeholder1="Enter one or more hexadecimal string with each string on a separate line"
      placeholder2="Enter one or  more Base64 strings with each string on a separate line "/>;

      case "Base58 Check Encode / Decode":
        return <EncodingTable 
        title1="Hex String" 
        title2="Base58Check"
        placeholder1="Enter one or more hexadecimal string with each string on a separate line"
        placeholder2="Enter one or  more Base58check strings with each string on a separate line "/>;

      case "Public Key - Address":
        return <PublicKey
        title1="Public Key" 
        title2=""
        placeholder1="Enter one or more hexadecimal strings with each string on a separate line"/>;


      case "Private Key - Public Key & Address":
        return <PrivateKey
        title1="Private Key"
        title2="Public Key"
        placeholder1="Enter one or more hexadecimal strings with each string on a separate line"
        placeholder2="Enter one or more hexadecimal strings with each string on a separate line"/>

      default:
        return null;
    }
  }
  return (
    <div>
    <p className="text-2xl font-bold pb-10">Encoding Converter</p>
    
    <div className=" rounded-lg pb-48">
      <div className="flex flex-row space-x-12 pt-12">

        <p className={`cursor-pointer py-3 px-4 whitespace-nowrap ${isRender === "Pollux- EVM Address" ? "bg-white font-bold  rounded-t-2xl" : "text-light-gray"}`}
        onClick={() => setIsRender("Pollux- EVM Address")}
        >Pollux- EVM Address</p>

        <p className={`cursor-pointer py-3 px-4 whitespace-nowrap ${isRender === "Base64 Encode /Decode" ? "bg-white  font-bold rounded-t-2xl" : "text-light-gray"}`}
        onClick={() => setIsRender("Base64 Encode /Decode")}
        >Base64 Encode /Decode</p>

        <p className={`cursor-pointer py-3 px-4 whitespace-nowrap ${isRender === "Base58 Check Encode / Decode" ? "bg-white font-bold rounded-t-2xl" : "text-light-gray"}`}
        onClick={() => setIsRender("Base58 Check Encode / Decode")}
        >Base58 Check Encode / Decode</p>

        <p className={`cursor-pointer py-3 px-4 whitespace-nowrap ${isRender === "Public Key - Address" ? "bg-white font-bold rounded-t-2xl" : "text-light-gray"}`}
        onClick={() => setIsRender("Public Key - Address")}
        >Public Key - Address</p>

        <p className={`cursor-pointer py-3 px-4 whitespace-nowrap ${isRender === "Private Key - Public Key & Address" ? "bg-white font-bold  rounded-t-2xl" : "text-light-gray"}`}
        onClick={() => setIsRender("Private Key - Public Key & Address")}
        >Private Key - Public Key & Address</p>

      </div>

      <div>{renderItemComponent()}</div>


   
    </div>
   </div>
  )
}

export default EncodingData
