import { useState } from "react";
import {FaRegCopy} from "react-icons/fa6";
import { MdArrowRightAlt } from "react-icons/md";
import { SiTicktick } from "react-icons/si";

const PrivateKeyCard = ({input}) => {
    const [isCopy, setIsCopy] = useState(false);

    const [textArea2, setTextArea2] = useState("");
  
    const handleCopy = (value) => {
      navigator.clipboard.writeText(value);
      setIsCopy(!isCopy);
  
      setTimeout(() => {
        setIsCopy(false);
      }, 2000);
    };


   return (
    <>
     <textarea
            id="exampleTextarea"
            rows="4"
            cols={66}
            className="shadow appearance-none border-text-bg-gray border-[1px] rounded-xl w-full px-6 py-4  text-gray-700 leading-tight focus:outline-none focus:shadow-outline resize-none"
            placeholder={input}
            onChange={(e) => setTextArea2(e.target.value)}
            > </textarea>


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
    </>
   )
 }


const PrivateKey = ({title1, title2, placeholder1, placeholder2, placeholder3}) => {

    
    const [isCopy, setIsCopy] = useState(false);
    const [textArea1, setTextArea1] = useState("");

    const handleCopy = (value) => {
        navigator.clipboard.writeText(value);
        setIsCopy(!isCopy);
    
        setTimeout(() => {
          setIsCopy(false);
        }, 2000);
      };

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
            onChange={(e) => setTextArea1(e.target.value)}
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

        <div className="flex flex-col ">
        <button className="bg-dark-yellow py-2  px-16 font-bold rounded-lg text-black cursor-pointer mt-14 " > Convert  </button>
        <MdArrowRightAlt  className="ml-32 -mt-8" size={28}/>
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
            onChange={(e) => setTextArea1(e.target.value)}
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
