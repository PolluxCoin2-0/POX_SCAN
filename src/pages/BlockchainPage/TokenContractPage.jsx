import { useState } from "react";
import { BsCopy } from "react-icons/bs";
import { IoCopy } from "react-icons/io5";
import { LuShrink } from "react-icons/lu";

import { IoIosArrowDropdownCircle, IoIosArrowDropupCircle } from "react-icons/io";


import CodeSnippet from "./codeSnippet";


const CodeTable = () => {
  return (
    <div className="bg-white rounded-bl-xl rounded-br-xl shadow-xl p-5 ">
       <p className="text-lg font-bold underline underline-offset-4 ">Contract Source Code Verified (Perfect match) </p>

       <div className="flex flex-row justify-between space-x-20 items-center w-full mt-4 border-b-[1px] pb-4">
       <div className="w-[50%]">
       <div className="flex flex-row justify-between">
       <p className="text-light-gray font-semibold">Contract Name</p>
       <p className="font-semibold">PolluxUsd</p>
       </div>

       <div className="flex flex-row justify-between mt-2">
       <p className="text-light-gray font-semibold">Optimization</p>
       <p className="font-semibold">Yes</p>
       </div>

       <div className="flex flex-row justify-between mt-2">
       <p className="text-light-gray font-semibold">Audit Report</p>
       <p className="font-semibold">No audit report yet (Submit here)</p>
       </div>
       </div>
 
       <div className="w-[50%] ">
       <div className="flex flex-row justify-between">
       <p className="text-light-gray font-semibold">Compiler Version</p>
       <p className="font-semibold">solidity 0.8.23</p>
       </div>

       <div className="flex flex-row justify-between mt-2 ">
       <p className="text-light-gray font-semibold">License</p>
       <p className="font-semibold">MIT</p>
       </div>
       </div>
       </div>

       <p className="text-xl font-semibold mt-5">Contract Code</p>

       <div className="bg-mid-light-gray rounded-xl mt-5 pt-5 pb-5  pr-10 pl-10">
       <p className="text-lg font-semibold">PolluxUsd</p>

      

       <div className="bg-text-bg-gray mt-8 rounded-sm w-full h-[600px]" >
        <CodeSnippet/>
       </div>
       </div>
    </div>
  )
}

const ReadContractTable = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isView, setIsView] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleView = () => {
    setIsView(!isView);
  }


  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div className="bg-white rounded-bl-xl rounded-br-xl shadow-xl p-10 ">
    <div className="border-[1px] border-mid-light-gray rounded-tl-lg rounded-tr-lg">
    <div className="flex flex-row justify-between p-5 bg-text-bg-gray">
      <p className="text-lg">1. DOMAIN_SEPARATOR</p>
      <p className="text-2xl" onClick={handleToggle} style={{ cursor: 'pointer' }}>
      {isOpen ? <IoIosArrowDropupCircle /> : <IoIosArrowDropdownCircle />}
      </p>
    </div>

    
        <div className="flex justify-end pr-5 pt-4 pb-4 space-x-5">
          <p className="text-xl"><BsCopy /></p>
          <p className="text-xl"><IoCopy /></p>
        </div>

        {isOpen && (
          <div className="flex flex-row space-x-8">
          <p className="border-[1px] border-light-gray bg-text-bg-gray rounded-md px-0 py-1 w-[70px] pl-4 ml-5 mb-7"
          onClick={handleView} style={{cursor: 'pointer'}}>View </p>
          
          { isView && (
            <p className="mt-1 text-lg font-bold">2sXa4yLs8RwUg7qhxuuBgMpEhb2FMQrgjY7PMmSJyE8ukWf8vZ9</p>
          )}
         
        </div>
      
    )}


  </div>


        <div className="border-[1px] border-mid-light-gray mt-8">
          <div className="flex flex-row justify-between p-5 bg-text-bg-gray  ">
          <p className="text-lg">2. allowance</p>
          <p className="text-2xl" onClick={handleToggle} style={{ cursor: 'pointer' }}>
          {isOpen ? <IoIosArrowDropupCircle /> : <IoIosArrowDropdownCircle />}
          </p>
           </div>

          <div className="flex justify-end pr-5 pt-4 pb-4 space-x-5">
           <p className="text-xl"><BsCopy /></p>
           <p className="text-xl"><IoCopy /></p>
          </div>
          
          {isOpen && (
            <div>
            <div>
            <p className="text-lg pl-6">owner_address<span className="text-dark-red text-xl">*</span></p>
            <input
            type="text"
            value={inputValue}
            onChange={handleChange}
            placeholder="ownner_address"
            className="w-[1460px] my-4 p-2  focus:bg-white  bg-text-bg-gray rounded-md outline-[1px]  outline-light-mid-gray ml-6 mt-2"
            />
            </div>
  
            <div>
            <p className="text-lg pl-6">spender_address<span className="text-dark-red text-xl">*</span></p>
            <input
            type="text"
            value={inputValue}
            onChange={handleChange}
            placeholder="spender_address"
            className="w-[1460px] my-4 p-2  focus:bg-white  bg-text-bg-gray rounded-md outline-[1px]  outline-light-mid-gray ml-6 mt-2"
            />
            </div>
  
            <p className="border-[1px] border-light-gray bg-text-bg-gray rounded-md px-0 py-1 w-[70px] pl-4 ml-5 mb-7">Send</p>
            
            </div>
          )}
         
       </div>

       <div className="border-[1px] border-mid-light-gray mt-8">
          <div className="flex flex-row justify-between p-5 bg-text-bg-gray  ">
          <p className="text-lg">3. auth</p>
          <p className="text-2xl" onClick={handleToggle} style={{ cursor: 'pointer' }}>
          {isOpen ? <IoIosArrowDropupCircle /> : <IoIosArrowDropdownCircle />}</p>
           </div>
 
          <div className="flex justify-end pr-5 pt-4 pb-4 space-x-5">
           <p className="text-xl"><BsCopy /></p>
           <p className="text-xl"><IoCopy /></p>
          </div>

          {isOpen && (
            <div className="flex flex-row space-x-8">
            <p className="border-[1px] border-light-gray bg-text-bg-gray rounded-md px-0 py-1 w-[70px] pl-4 ml-5 mb-7"
            onClick={handleView} style={{cursor: 'pointer'}}>View </p>
            
            { isView && (
              <p className="mt-1 text-lg font-bold">2sXa4yLs8RwUg7qhxuuBgMpEhb2FMQrgjY7PMmSJyE8ukWf8vZ9</p>
            )}
           
          </div>
        
      )}
       </div>

       <div className="border-[1px] border-mid-light-gray mt-8">
          <div className="flex flex-row justify-between p-5 bg-text-bg-gray  ">
          <p className="text-lg">4. balanceOf</p>
          <p className="text-2xl"  onClick={handleToggle} style={{ cursor: 'pointer' }}><IoIosArrowDropdownCircle /></p>
           </div>

          <div className="flex justify-end pr-5 pt-4 pb-4 space-x-5">
           <p className="text-xl"><BsCopy /></p>
           <p className="text-xl"><IoCopy /></p>
          </div>
          
          {isOpen && (
            <div>
            <div>
              <p className="text-lg pl-6">account_address*<span className="text-dark-red text-xl">*</span></p>
              <input
              type="text"
              value={inputValue}
              onChange={handleChange}
              placeholder="account_address*"
              className="w-[1460px] my-4 p-2  focus:bg-white  bg-text-bg-gray rounded-md outline-[1px]  outline-light-mid-gray ml-6 mt-2"
              />
              </div>
              
              <p className="border-[1px] border-light-gray bg-text-bg-gray rounded-md px-0 py-1 w-[70px] pl-4 ml-5 mb-7">Send</p>
            </div>
          )}
        
       </div>


        <div className="border-[1px] border-mid-light-gray mt-8">
          <div className="flex flex-row justify-between p-5 bg-text-bg-gray  ">
          <p className="text-lg">5. decimals</p>
          <p className="text-2xl" onClick={handleToggle} style={{ cursor: 'pointer' }}>
          {isOpen ? <IoIosArrowDropupCircle /> : <IoIosArrowDropdownCircle />}</p>
           </div>

          <div className="flex justify-end pr-5 pt-4 pb-4 space-x-5">
           <p className="text-xl"><BsCopy /></p>
           <p className="text-xl"><IoCopy /></p>
          </div>


          {isOpen && (
            <div className="flex flex-row space-x-8">
            <p className="border-[1px] border-light-gray bg-text-bg-gray rounded-md px-0 py-1 w-[70px] pl-4 ml-5 mb-7"
            onClick={handleView} style={{cursor: 'pointer'}}>View </p>
            
            { isView && (
              <p className="mt-1 text-lg font-bold">2sXa4yLs8RwUg7qhxuuBgMpEhb2FMQrgjY7PMmSJyE8ukWf8vZ9</p>
            )}
           
          </div>
        
      )}
       </div>


        <div className="border-[1px] border-mid-light-gray mt-8">
          <div className="flex flex-row justify-between p-5 bg-text-bg-gray  ">
          <p className="text-lg">6. eip712Domain</p>
          <p className="text-2xl" onClick={handleToggle} style={{ cursor: 'pointer' }}>
          {isOpen ? <IoIosArrowDropupCircle /> : <IoIosArrowDropdownCircle />}</p>
           </div>

          <div className="flex justify-end pr-5 pt-4 pb-4 space-x-5">
           <p className="text-xl"><BsCopy /></p>
           <p className="text-xl"><IoCopy /></p>
          </div>

          {isOpen && (
            <div className="flex flex-row space-x-8">
            <p className="border-[1px] border-light-gray bg-text-bg-gray rounded-md px-0 py-1 w-[70px] pl-4 ml-5 mb-7"
            onClick={handleView} style={{cursor: 'pointer'}}>View </p>
            
            { isView && (
              <p className="mt-1 text-lg font-bold">2sXa4yLs8RwUg7qhxuuBgMpEhb2FMQrgjY7PMmSJyE8ukWf8vZ9</p>
            )}
           
          </div>
        
      )}
       </div>

        <div className="border-[1px] border-mid-light-gray mt-8">
          <div className="flex flex-row justify-between p-5 bg-text-bg-gray  ">
          <p className="text-lg">7. name</p>
          <p className="text-2xl" onClick={handleToggle} style={{ cursor: 'pointer' }}>
          {isOpen ? <IoIosArrowDropupCircle /> : <IoIosArrowDropdownCircle />}</p>
           </div>

          <div className="flex justify-end pr-5 pt-4 pb-4 space-x-5">
           <p className="text-xl"><BsCopy /></p>
           <p className="text-xl"><IoCopy /></p>
          </div>

          {isOpen && (
            <div className="flex flex-row space-x-8">
            <p className="border-[1px] border-light-gray bg-text-bg-gray rounded-md px-0 py-1 w-[70px] pl-4 ml-5 mb-7"
            onClick={handleView} style={{cursor: 'pointer'}}>View </p>
            
            { isView && (
              <p className="mt-1 text-lg font-bold">2sXa4yLs8RwUg7qhxuuBgMpEhb2FMQrgjY7PMmSJyE8ukWf8vZ9</p>
            )}
           
          </div>
        
      )}
       </div>


        <div className="border-[1px] border-mid-light-gray mt-8">
          <div className="flex flex-row justify-between p-5 bg-text-bg-gray  ">
          <p className="text-lg">8. nonces</p>
          <p className="text-2xl" onClick={handleToggle} style={{ cursor: 'pointer' }}>
          {isOpen ? <IoIosArrowDropupCircle /> : <IoIosArrowDropdownCircle />}</p>
           </div>

          <div className="flex justify-end pr-5 pt-4 pb-4 space-x-5">
           <p className="text-xl"><BsCopy /></p>
           <p className="text-xl"><IoCopy /></p>
          </div>

          {isOpen && (
            <div>
            <div>
              <p className="text-lg pl-6">owner_address<span className="text-dark-red text-xl">*</span></p>
              <input
              type="text"
              value={inputValue}
              onChange={handleChange}
              placeholder="owner_address"
              className="w-[1460px] my-4 p-2  focus:bg-white  bg-text-bg-gray rounded-md outline-[1px]  outline-light-mid-gray ml-6 mt-2"
              />
              </div>
              
              <p className="border-[1px] border-light-gray bg-text-bg-gray rounded-md px-0 py-1 w-[70px] pl-4 ml-5 mb-7">Send</p>
            </div>
          )}
       </div>


        <div className="border-[1px] border-mid-light-gray mt-8">
          <div className="flex flex-row justify-between p-5 bg-text-bg-gray  ">
          <p className="text-lg">9. owner</p>
          <p className="text-2xl"  onClick={handleToggle} style={{ cursor: 'pointer' }}>
          {isOpen ? <IoIosArrowDropupCircle /> : <IoIosArrowDropdownCircle />}</p>
           </div>

          <div className="flex justify-end pr-5 pt-4 pb-4 space-x-5">
           <p className="text-xl"><BsCopy /></p>
           <p className="text-xl"><IoCopy /></p>
          </div>
          {isOpen && (
            <div className="flex flex-row space-x-8">
            <p className="border-[1px] border-light-gray bg-text-bg-gray rounded-md px-0 py-1 w-[70px] pl-4 ml-5 mb-7"
            onClick={handleView} style={{cursor: 'pointer'}}>View </p>
            
            { isView && (
              <p className="mt-1 text-lg font-bold">2sXa4yLs8RwUg7qhxuuBgMpEhb2FMQrgjY7PMmSJyE8ukWf8vZ9</p>
            )}
           
          </div>
        
      )}
       </div>


        <div className="border-[1px] border-mid-light-gray mt-8">
          <div className="flex flex-row justify-between p-5 bg-text-bg-gray  ">
          <p className="text-lg">10. paused</p>
          <p className="text-2xl" onClick={handleToggle} style={{ cursor: 'pointer' }}> 
          {isOpen ? <IoIosArrowDropupCircle /> : <IoIosArrowDropdownCircle />}</p>
           </div>

          <div className="flex justify-end pr-5 pt-4 pb-4 space-x-5">
           <p className="text-xl"><BsCopy /></p>
           <p className="text-xl"><IoCopy /></p>
          </div>
          {isOpen && (
            <div className="flex flex-row space-x-8">
            <p className="border-[1px] border-light-gray bg-text-bg-gray rounded-md px-0 py-1 w-[70px] pl-4 ml-5 mb-7"
            onClick={handleView} style={{cursor: 'pointer'}}>View </p>
            
            { isView && (
              <p className="mt-1 text-lg font-bold">2sXa4yLs8RwUg7qhxuuBgMpEhb2FMQrgjY7PMmSJyE8ukWf8vZ9</p>
            )}
           
          </div>
        
      )}
       </div>


        <div className="border-[1px] border-mid-light-gray mt-8">
          <div className="flex flex-row justify-between p-5 bg-text-bg-gray  ">
          <p className="text-lg">11. symbol</p>
          <p className="text-2xl" onClick={handleToggle} style={{ cursor: 'pointer' }}>
          {isOpen ? <IoIosArrowDropupCircle /> : <IoIosArrowDropdownCircle />}</p>
           </div>

          <div className="flex justify-end pr-5 pt-4 pb-4 space-x-5">
           <p className="text-xl"><BsCopy /></p>
           <p className="text-xl"><IoCopy /></p>
          </div>

          {isOpen && (
            <div className="flex flex-row space-x-8">
            <p className="border-[1px] border-light-gray bg-text-bg-gray rounded-md px-0 py-1 w-[70px] pl-4 ml-5 mb-7"
            onClick={handleView} style={{cursor: 'pointer'}}>View </p>
            
            { isView && (
              <p className="mt-1 text-lg font-bold">2sXa4yLs8RwUg7qhxuuBgMpEhb2FMQrgjY7PMmSJyE8ukWf8vZ9</p>
            )}
           
          </div>
        
      )}


       </div>


        <div className="border-[1px] border-mid-light-gray rounded-bl-lg rounded-br-lg mt-8">
          <div className="flex flex-row justify-between p-5 bg-text-bg-gray  ">
          <p className="text-lg">12. totalSupply</p>
          <p className="text-2xl" onClick={handleToggle} style={{ cursor: 'pointer' }}>
          {isOpen ? <IoIosArrowDropupCircle /> : <IoIosArrowDropdownCircle />}</p>
           </div>

          <div className="flex justify-end pr-5 pt-4 pb-4 space-x-5">
           <p className="text-xl"><BsCopy /></p>
           <p className="text-xl"><IoCopy /></p>
          </div>

          {isOpen && (
            <div className="flex flex-row space-x-8">
            <p className="border-[1px] border-light-gray bg-text-bg-gray rounded-md px-0 py-1 w-[70px] pl-4 ml-5 mb-7"
            onClick={handleView} style={{cursor: 'pointer'}}>View </p>
            
            { isView && (
              <p className="mt-1 text-lg font-bold">2sXa4yLs8RwUg7qhxuuBgMpEhb2FMQrgjY7PMmSJyE8ukWf8vZ9</p>
            )}
           
          </div>
        
      )}
       </div>
    </div>
  )
} 

const WriteContractTable = () => {
  return (
    <div className="bg-white rounded-bl-xl rounded-br-xl shadow-xl pt-5 pb-5 pl-10 pr-10 ">

    <p className="text-lg font-semibold pb-5">Running the following functions will consume POX or Energy as fees</p>
    <div className="border-[1px] border-mid-light-gray rounded-tl-lg rounded-tr-lg">
       <div className="flex flex-row justify-between p-5 bg-text-bg-gray  ">
       <p className="text-lg">1. approve</p>
       <p className="text-2xl"><IoIosArrowDropdownCircle /></p>
        </div>

       <div className="flex justify-end pr-5 pt-4 pb-4 space-x-5">
        <p className="text-xl"><BsCopy /></p>
        <p className="text-xl"><IoCopy /></p>
       </div>
    </div>


     <div className="border-[1px] border-mid-light-gray mt-8">
       <div className="flex flex-row justify-between p-5 bg-text-bg-gray  ">
       <p className="text-lg">2. burn</p>
       <p className="text-2xl"><IoIosArrowDropdownCircle /></p>
        </div>

       <div className="flex justify-end pr-5 pt-4 pb-4 space-x-5">
        <p className="text-xl"><BsCopy /></p>
        <p className="text-xl"><IoCopy /></p>
       </div>
    </div>

    <div className="border-[1px] border-mid-light-gray mt-8">
       <div className="flex flex-row justify-between p-5 bg-text-bg-gray  ">
       <p className="text-lg">3. burnFrom</p>
       <p className="text-2xl"><IoIosArrowDropdownCircle /></p>
        </div>

       <div className="flex justify-end pr-5 pt-4 pb-4 space-x-5">
        <p className="text-xl"><BsCopy /></p>
        <p className="text-xl"><IoCopy /></p>
       </div>
    </div>

    <div className="border-[1px] border-mid-light-gray mt-8">
       <div className="flex flex-row justify-between p-5 bg-text-bg-gray  ">
       <p className="text-lg">4. mint</p>
       <p className="text-2xl"><IoIosArrowDropdownCircle /></p>
        </div>

       <div className="flex justify-end pr-5 pt-4 pb-4 space-x-5">
        <p className="text-xl"><BsCopy /></p>
        <p className="text-xl"><IoCopy /></p>
       </div>
    </div>


     <div className="border-[1px] border-mid-light-gray mt-8">
       <div className="flex flex-row justify-between p-5 bg-text-bg-gray  ">
       <p className="text-lg">5. pause</p>
       <p className="text-2xl"><IoIosArrowDropdownCircle /></p>
        </div>

       <div className="flex justify-end pr-5 pt-4 pb-4 space-x-5">
        <p className="text-xl"><BsCopy /></p>
        <p className="text-xl"><IoCopy /></p>
       </div>
    </div>


     <div className="border-[1px] border-mid-light-gray mt-8">
       <div className="flex flex-row justify-between p-5 bg-text-bg-gray  ">
       <p className="text-lg">6. permit</p>
       <p className="text-2xl"><IoIosArrowDropdownCircle /></p>
        </div>

       <div className="flex justify-end pr-5 pt-4 pb-4 space-x-5">
        <p className="text-xl"><BsCopy /></p>
        <p className="text-xl"><IoCopy /></p>
       </div>
    </div>

     <div className="border-[1px] border-mid-light-gray mt-8">
       <div className="flex flex-row justify-between p-5 bg-text-bg-gray  ">
       <p className="text-lg">7. renounceOwnership</p>
       <p className="text-2xl"><IoIosArrowDropdownCircle /></p>
        </div>

       <div className="flex justify-end pr-5 pt-4 pb-4 space-x-5">
        <p className="text-xl"><BsCopy /></p>
        <p className="text-xl"><IoCopy /></p>
       </div>
    </div>


     <div className="border-[1px] border-mid-light-gray mt-8">
       <div className="flex flex-row justify-between p-5 bg-text-bg-gray  ">
       <p className="text-lg">8. setAuthAdd</p>
       <p className="text-2xl"><IoIosArrowDropdownCircle /></p>
        </div>

       <div className="flex justify-end pr-5 pt-4 pb-4 space-x-5">
        <p className="text-xl"><BsCopy /></p>
        <p className="text-xl"><IoCopy /></p>
       </div>
    </div>


     <div className="border-[1px] border-mid-light-gray mt-8">
       <div className="flex flex-row justify-between p-5 bg-text-bg-gray  ">
       <p className="text-lg">9. transfer</p>
       <p className="text-2xl"><IoIosArrowDropdownCircle /></p>
        </div>

       <div className="flex justify-end pr-5 pt-4 pb-4 space-x-5">
        <p className="text-xl"><BsCopy /></p>
        <p className="text-xl"><IoCopy /></p>
       </div>
    </div>


     <div className="border-[1px] border-mid-light-gray mt-8">
       <div className="flex flex-row justify-between p-5 bg-text-bg-gray  ">
       <p className="text-lg">10. transferFrom</p>
       <p className="text-2xl"><IoIosArrowDropdownCircle /></p>
        </div>

       <div className="flex justify-end pr-5 pt-4 pb-4 space-x-5">
        <p className="text-xl"><BsCopy /></p>
        <p className="text-xl"><IoCopy /></p>
       </div>
    </div>


     <div className="border-[1px] border-mid-light-gray mt-8">
       <div className="flex flex-row justify-between p-5 bg-text-bg-gray  ">
       <p className="text-lg">11. transferOwnership</p>
       <p className="text-2xl"><IoIosArrowDropdownCircle /></p>
        </div>

       <div className="flex justify-end pr-5 pt-4 pb-4 space-x-5">
        <p className="text-xl"><BsCopy /></p>
        <p className="text-xl"><IoCopy /></p>
       </div>
    </div>


     <div className="border-[1px] border-mid-light-gray rounded-bl-lg rounded-br-lg mt-8">
       <div className="flex flex-row justify-between p-5 bg-text-bg-gray  ">
       <p className="text-lg">12. unpause</p>
       <p className="text-2xl"><IoIosArrowDropdownCircle /></p>
        </div>

       <div className="flex justify-end pr-5 pt-4 pb-4 space-x-5">
        <p className="text-xl"><BsCopy /></p>
        <p className="text-xl"><IoCopy /></p>
       </div>
    </div>
 </div>
  )
}

const TokenContractPage = () => {
  const [isShow, setIsShow] = useState("Code");

    const showItemComponent = () => {
    switch (isShow) {
      case "Code":
        return <CodeTable /> ;

      case "Read Contract":
        return <ReadContractTable />;

      case "Write Contract":
        return <WriteContractTable />;

      
    }
  };
  return (
    <div>
      
    <div className="flex flex-row space-x-8 mt-10 bg-white rounded-tl-xl rounded-tr-xl p-5">
    <p 
    className={`cursor-pointer py-2 px-14 whitespace-nowrap ${
      isShow === "Code"
        ? "bg-dark-yellow font-semibold  shadow-lg rounded-lg"
        : "text-black bg-text-bg-gray shadow-md rounded-lg"
    }`}
    onClick={() => setIsShow("Code")}>Code</p>

    <p 
    className={`cursor-pointer py-2 px-8 whitespace-nowrap ${
      isShow === "Read Contract"
        ? "bg-dark-yellow font-semibold  shadow-lg rounded-lg"
        : "text-black bg-text-bg-gray shadow-md rounded-lg"
    }`}
    onClick={() => setIsShow("Read Contract")}>Read Contract</p>

    <p 
    className={`cursor-pointer py-2 px-8 whitespace-nowrap ${
      isShow === "Write Contract"
        ? "bg-dark-yellow font-semibold  shadow-lg rounded-lg"
        : "text-black bg-text-bg-gray shadow-md rounded-lg"
    }`}
    onClick={() => setIsShow("Write Contract")}>Write Contract</p>
    </div>

    <div>{showItemComponent()}</div>
    </div>
  )
}

export default TokenContractPage
