import { SearchBarExpand } from "../../components"
import { BiSolidCopyAlt } from "react-icons/bi";
import { RiQrCodeFill } from "react-icons/ri";
import { LuArrowDownToLine } from "react-icons/lu";
import { LuArrowUpToLine } from "react-icons/lu";
import { IoIosArrowForward } from "react-icons/io";

const TransactionDetailPage = () => {
  return (
    <div className="px-12 pb-12">

        <div>
            <SearchBarExpand />
        </div>

        <div>
          <p className="text-lg font-bold">Account</p>
          
          <div className="flex flex-row justify-between">
            <div className="flex flex-row space-x-8">
              <p className="text-xl font-bold pt-4">plkhdhsjdsiordbasdkkdowedwhhkjodokdfr</p>
              <p className=" pt-5 text-xl bg-white px-2 rounded-2xl"><BiSolidCopyAlt /></p>
              <p className=" pt-5 text-xl bg-white px-2 rounded-2xl"><RiQrCodeFill /></p>
            </div>

            <div className="flex flex-row space-x-10">
              <div> 
              <p className="text-light-gray"> Recent Activity (UTC)</p>
                <p className="font-bold">2024-07-09 04:54:18</p>
              </div>

              <div>
                <p className="text-light-gray">Created on (UTC)</p>
                <p className="font-bold">2024-07-06 15:20:45</p>
              </div>
            </div>
          </div>

          <p className="pt-5">Add a Private name</p>

          <div className="flex flex-row justify-between w-full space-x-5 pt-5">
            {/* First Div */}
            <div className="w-[50%] bg-white rounded-lg p-5">

              <div className="flex flex-row justify-between">
                <div className="">
                  <p>Total Assets</p>
                  <p>$10,500,016.043</p>
                  <p>≈ 0.009312POX</p>
                </div>

                <div>
                  <p>Wallet 100.00%</p>
                  <p>Portfolio 0%</p>
                </div>
              </div>

              <div className="pt-10">
                <div className="flex flex-row justify-between border-b-[1px] border-t-[1px] border-text-bg-gray pt-2 pb-2">
                  <p>POX Staked / Balance:</p>
                  <p>0POX/0.009 POX</p>
                </div>

                <div className="flex flex-row justify-between border-b-[1px] border-text-bg-gray pt-2 pb-2">
                  <p>Transactions:</p>
                  <p>589</p>
                </div>

                <div className="flex flex-row justify-between border-b-[1px] border-text-bg-gray pt-2 pb-2">
                  <p>Transfers:</p>
                  <div className="flex flex-row"><p>589</p> <p>(</p>  <p><LuArrowDownToLine /></p> <p>583</p> <p><LuArrowUpToLine /></p> <p>)</p> </div>
              
                </div>


                <div className="flex flex-row justify-between border-b-[1px] border-text-bg-gray pt-2 pb-2">
                  <p>Bandwidth:</p>
                  <p>Available: 74/600</p>
                </div>

                <div className="flex flex-row justify-between border-b-[1px]  border-text-bg-gray pt-2 pb-2">
                  <p>Energy:</p>
                  <p>Available: 0/0</p>
                </div>

                <div className="flex flex-row justify-between border-b-[1px] border-text-bg-gray pt-2 pb-2">
                  <p>Votes:</p>
                  <p>Voted: 0/0</p>
                </div>

                <div className="flex flex-row justify-between border-b-[1px] border-text-bg-gray pt-2 pb-2">
                  <p>Claimable Voting Rewards:</p>
                  <p>0POX</p>
                </div>
              </div>

              <div></div>
            </div>
            
            {/* Second Div */}
            <div className="w-[50%] bg-white rounded-lg p-4">

              <div className="flex flex-row justify-between p-2 rounded-lg bg-lightest-gray">
                <p>Wallet (1)</p>
                <p>Portfolio (0)</p>
                <p>Approval (0)</p>
              </div>

              <div >
                <SearchBarExpand />
              </div>

              <div>
                <div  className="flex flex-row justify-between pb-3">
                  <p>POX (POX  )</p>
                  <p>966196.431313</p>
                </div>

                <div className="flex flex-row justify-between pb-3">
                  <p>Pollux USD (USDX)</p>
                  <p>10135081.72</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      
    </div>
    
  )
}

export default TransactionDetailPage;
