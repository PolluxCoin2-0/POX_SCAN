import { useState } from "react";
import {FaRegCopy} from "react-icons/fa6";

const PrivateKeyCard = ({input}) => {
   return (
    <>
     <textarea
            id="exampleTextarea"
            rows="4"
            cols={66}
            className="shadow appearance-none border-text-bg-gray border-[1px] rounded-xl w-full px-6 py-4  text-gray-700 leading-tight focus:outline-none focus:shadow-outline resize-none"
            placeholder={input}
            > </textarea>


      <div className="flex flex-row justify-end items-center -mt-9 mr-4">
                <FaRegCopy className="text-light-gray"/> 
                <p className="text-light-gray pl-1">copy</p>
            </div>
    </>
   )
 }


const PrivateKey = ({title1, title2, placeholder1, placeholder2, placeholder3}) => {

    const [isRender, setIsRender] = useState("Address (Base58Check)");
    
    const renderItemComponent = () => {
        switch (isRender) {
            case "Address (Base58Check)":
                return <PrivateKeyCard
                placeholder3="Default encoding format of POX addresses"
                input="Default encoding format of POX addresses"/>;

            case "Address (EVM)":
                return <PrivateKeyCard 
                input="Alternative encoding format of POX addresses"/>;

            case "Address (Hex String)":
                return <PrivateKeyCard
                input="Default encoding format of POX addresses
" />;
        }
    }
  return (
    <div className="bg-white  pb-40 rounded-lg">
     <div className="flex flex-row justify-around pt-5 items-center">
        <div>
             <p className="text-lg font-bold pb-5">{title1}</p> 
           
            <textarea
            id="exampleTextarea"
            rows="12"
            cols={66}
            className="shadow appearance-none border-text-bg-gray border-[1px] rounded-xl w-full px-6 py-4  text-gray-700 leading-tight focus:outline-none focus:shadow-outline resize-none"
            placeholder={placeholder1}
            > </textarea>

            <div className="flex flex-row justify-end items-center -mt-9 mr-4">
                <FaRegCopy className="text-light-gray"/> 
                <p className="text-light-gray pl-1">copy</p>
            </div>
        
        </div>

        <div className="flex flex-col ">
        <button className="bg-dark-yellow py-2  px-10 font-bold rounded-lg text-black cursor-pointer mt-14 " > Convert  </button>
    
        </div>

        <div>

        <div className="flex flex-col">
             <p className="text-lg font-bold pb-5 pt-5 ">{title2}</p> 
           
            <textarea
            id="exampleTextarea"
            rows="4"
            cols={66}
            className="shadow appearance-none border-text-bg-gray border-[1px] rounded-xl w-full px-6 py-4  text-gray-700 leading-tight focus:outline-none focus:shadow-outline resize-none"
            placeholder={placeholder2}
            > </textarea>

            <div className="flex flex-row justify-end items-center -mt-9 mr-4">
                <FaRegCopy className="text-light-gray"/> 
                <p className="text-light-gray pl-1">copy</p>
            </div>
        
        </div>
            <div className="flex flex-row justify-between pt-8 pb-2">

            <p  className={`cursor-pointer py-3 px-4 ${isRender === "Address (Base58Check)" ? "text-black font-bold" : "text-light-gray"}`}
             onClick={() => setIsRender("Address (Base58Check)")}>Address (Base58Check)</p>

            <p className={`cursor-pointer py-3 px-4 ${isRender === "Address (EVM)" ? "text-black font-bold" : "text-light-gray"}`}
                onClick={() => setIsRender("Address (EVM)")}>Address (EVM)</p>

            <p className={`cursor-pointer py-3 px-4 ${isRender === "Address (Hex String" ? "text-black font-bold" : "text-light-gray"}`}
            onClick={() => setIsRender("Address (Hex String)")}>Address (Hex String)</p>
            
        </div>
            
        <div>{renderItemComponent()}</div>


        </div>
      </div>
    </div>
  )
}

export default PrivateKey
