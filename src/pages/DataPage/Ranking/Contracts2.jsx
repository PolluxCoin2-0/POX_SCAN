
import { useState } from "react";
import { SearchBarExpand } from "../../../components";
import ContractDay1 from "./ContractDay1";
import ContractDay3 from "./ContractDay3";
import ContractDay7 from "./ContractDay7";




const Contracts2= () => {
  // for tab switching 
  const [isShow, setIsShow] = useState("1 Day");

  //  for tab switching in transactions and transfer
  const showItemComponent = () => {
    switch (isShow) {
      case "1 Day":
        return <ContractDay1 />;

      case "3 Day":
        return  <ContractDay3 />;

      case "7 Day":
        return <ContractDay7 />;
    }
  };
  return (
    <div className="px-12 pb-80">

      <div>
        <SearchBarExpand />
      </div>
        
      <div className="flex flex-row space-x-8">
          <p 
          className={`cursor-pointer py-2 px-8 whitespace-nowrap  ${
            isShow === "1 Day"
              ? "bg-dark-yellow font-semibold  shadow-lg rounded-lg"
              : "text-black bg-text-bg-gray shadow-md rounded-lg"
          }`}
           onClick={() => setIsShow("1 Day")}>1 Day </p>


          <p 
          className={`cursor-pointer py-2 px-8 whitespace-nowrap  ${
            isShow === "3 Day"
              ? "bg-dark-yellow font-semibold  shadow-lg rounded-lg"
              : "text-black bg-text-bg-gray shadow-md rounded-lg"
          }`}
           onClick={() => setIsShow("3 Day")}> 3 Day </p>


          <p 
          className={`cursor-pointer py-2 px-8 whitespace-nowrap  ${
            isShow === "7 Day"
              ? "bg-dark-yellow font-semibold  shadow-lg rounded-lg"
              : "text-black bg-text-bg-gray shadow-md rounded-lg"
          }`}
           onClick={() => setIsShow("7 Day")}>7 Day</p>
        </div>
        
      <div>{showItemComponent()}</div>



    </div>
  )
}

export default Contracts2;