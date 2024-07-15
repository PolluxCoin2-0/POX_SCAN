import {  useState } from "react";
import { SearchBarExpand } from "../../../components";
import AccountDay1 from "./AccountDay1";



const Accounts = () => {

  // for tab switching 
  const [isShow, setIsShow] = useState("1 Day");

  //  for tab switching in transactions and transfer
  const showItemComponent = () => {
    switch (isShow) {
      case "1 Day":
        return <AccountDay1 />;

      case "3 Day":
        return  "No Data Found";

      case "7 Day":
        return "No data found";
    }
  };
  return (
    <div className="px-12 pb-12">

      <div>
        <SearchBarExpand />
      </div>
        
        <div className="flex flex-row space-x-8">
          <p className="bg-light-mid-gray px-6 py-1 rounded-lg"
           onClick={() => setIsShow("1 Day")}>1 Day </p>

          <p className="bg-light-mid-gray px-6 py-1 rounded-lg"
           onClick={() => setIsShow("3 Day")}> 3 Day </p>

          <p className="bg-light-mid-gray px-6 py-1 rounded-lg"
           onClick={() => setIsShow("7 Day")}>7 Day</p>
        </div>

      


     

      <div>{showItemComponent()}</div>
    </div>
  )
}

export default Accounts