import { SearchBarExpand } from "../../components"
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { AiOutlineQuestion } from "react-icons/ai";
import { MdContentCopy } from "react-icons/md";
const BlockDetailPage = () => {
  return (
    <div className="px-12 pb-12">

      <div>
        <SearchBarExpand />
      </div>

      <div>
        <p className="text-xl font-bold">Block Details</p>
        
        <div className="flex flex-row justify-between w-full space-x-16 mt-8 ">
            {/* First Div */}
            <div className="w-[65%] bg-white rounded-xl shadow-lg p-8 ">
                <div className="flex flex-row space-x-5 border-b-[1px] border-text-bg-gray pb-4">
                    <p className="text-lg font-semibold">Block #2778424</p>
                    <p className="text-sm bg-text-bg-gray px-2 rounded-md pt-1"> Producer: Poxchain786</p>
                    <p className="bg-text-bg-gray rounded-2xl px-1 pt-1"><IoIosArrowBack /></p>
                    <p className="bg-text-bg-gray rounded-2xl px-1 pt-1"><IoIosArrowForward /></p>
                </div>


                <div>
                    <div className="flex flex-row space-x-32 border-b-[1px] border-text-bg-gray pt-4 pb-4">
                        <div className="flex flex-row space-x-2">
                        <p className="bg-lightest-gray rounded-md pt-1 px-1"><AiOutlineQuestion /> </p>
                        <p>Block Hash:</p>
                        </div>
                         
                         <div className="flex flex-row space-x-4">
                            <p>00000000002a6538f68e1cd2e5346fe5b5a6b3d48f0455efa210c1dfaa6da878</p>
                         <p className="pt-1"><MdContentCopy /></p></div>
                        
                    </div>

                    <div className="flex flex-row space-x-44 border-b-[1px] border-text-bg-gray pt-4 pb-4">
                        <div className="flex flex-row space-x-2">
                        <p className="bg-lightest-gray rounded-md pt-1 px-1"><AiOutlineQuestion /> </p>
                        <p>Time:</p>
                        </div>

                    <div className="flex flex-row space-x-4">
                    <p>1 minutes ago</p>    
                    <p className="text-light-gray">Thu Jul 18 2024</p>
                    </div>
                  

                    </div>

                    <div className="flex flex-row space-x-36 border-b-[1px] border-text-bg-gray pt-4 pb-4">
                        <div className="flex flex-row space-x-2">
                        <p className="bg-lightest-gray rounded-md pt-1 px-1"><AiOutlineQuestion /> </p>
                        <p>Block Size:</p>
                        </div>
                   
                        <div className="flex flex-row space-x-5">
                        <p>2510 Bytes </p>
                        <p className="text-light-gray">(Upper Limit: 2,000,000 Bytes)</p>
                       </div>
                   
                    </div>

                    <div className="flex flex-row space-x-44 border-b-[1px] border-text-bg-gray pt-4 pb-4">
                        <div className="flex flex-row space-x-2">
                        <p className="bg-lightest-gray rounded-md pt-1 px-1"><AiOutlineQuestion /> </p>
                        <p>Status:</p>
                        </div>
                   
                        <div className="flex flex-row space-x-4">
                        <p className="text-dark-green bg-light-green px-3 rounded-md">CONFIRMED</p>
                         <p className="text-light-gray">  Confirmed by over</p>
                         <p>38</p>
                        <p className="text-light-gray">blocks</p>
                        </div>
                        
                    </div>

                    <div className="flex flex-row space-x-28 border-b-[1px] border-text-bg-gray pt-4 pb-4">
                        <div className="flex flex-row space-x-2">
                        <p className="bg-lightest-gray rounded-md pt-1 px-1"><AiOutlineQuestion /> </p>
                        <p>Confirmed SRs:</p>
                        </div>
                  
                    <div className="flex flex-row space-x-4">
                    <p className="text-dark-green bg-light-green px-2 rounded-md">19</p>
                    <p> POXCHAIN786, KHATUSHAYAMJI, KHALSANATION, WILLIAMSONPOLINK</p>

                    </div>
                   </div>

                    <div className="flex flex-row space-x-28 border-b-[1px] border-text-bg-gray pt-4 pb-4">
                        <div className="flex flex-row space-x-2">
                        <p className="bg-lightest-gray rounded-md pt-1 px-1"><AiOutlineQuestion /> </p>
                        <p>Block Reward:</p>
                        </div>
                   
                    <p>0.2</p>
                    </div>

                        
                    <div className="flex flex-row space-x-20 border-b-[1px] border-text-bg-gray pt-4 pb-4">
                        <div className="flex flex-row space-x-2">
                        <p className="bg-lightest-gray rounded-md pt-1 px-1"><AiOutlineQuestion /> </p>
                        <p>Parent Block Hash:</p>
                        </div>
                   <div className="flex flex-row space-x-4">
                   <p>00000000002a6538f68e1cd2e5346fe5b5a6b3d48f0455efa210c1dfaa6da878</p>
                   <p className="pt-1"><MdContentCopy /></p>
                   </div>
                    
                    </div>

                    <div className="flex flex-row space-x-24 border-b-[1px] border-text-bg-gray pt-4 pb-4">
                        <div className="flex flex-row space-x-2">
                        <p className="bg-lightest-gray rounded-md pt-1 px-1"><AiOutlineQuestion /> </p>
                        <p>Version Number:</p>
                        </div>
                   
                    <p>1</p>
                    </div>
                </div>
            </div>
             
             {/* Second Div */}
            <div className="w-[35%] bg-white rounded-xl shadow-lg h-full p-5 space-y-5 ">
                <div className="h-[60%] bg-text-bg-gray rounded-xl p-5 pt-3">
                    <p className="text-lg font-semibold border-b-[1px] border-lightest-gray pb-2">Transaction Overview</p>

                    <div>
                        <div className="border-b-[1px] border-lightest-gray pt-2 pb-4 ">
                            <div className="flex flex-row">
                                <p className=" ">0</p>
                                <div className=""></div>
                            </div>

                            <div className="flex flex-row justify-between pt-2">
                                <div className="flex flex-row space-x-2">
                                <p className="bg-lightest-gray rounded-md pt-1 px-1"><AiOutlineQuestion /> </p>
                                <p className="">Transactions</p>
                                </div>
                           
                                <p className="">(Failed:0)</p>
                            </div>
                        </div>

                        <div className="border-b-[1px] border-lightest-gray pt-2 pb-4">
                            <div>
                                <p>0</p>
                            </div>
                            <div className="flex flex-row space-x-2 pt-2">
                            <p className="bg-lightest-gray rounded-md pt-1 px-1"><AiOutlineQuestion /> </p>
                                <p>Transfers</p>
                            </div>
                        </div>


                        <div className="pt-2 pb-4" >
                            <div className="flex flex-row space-x-3">
                                <p>0</p>
                               <p>(from 0 parent Txns)</p>
                            </div>
                            <div className="flex flex-row space-x-2 pt-3">
                            <p className="bg-lightest-gray rounded-md pt-1 px-1"><AiOutlineQuestion /> </p>
                                <p className="">Internal Txns</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="h-[40%] bg-text-bg-gray rounded-xl p-5 pt-3">
                    <p className="text-lg font-bold border-b-[1px] border-lightest-gray pb-1">Total Consumption</p>


                    <div>
                        <div className="flex flex-row justify-between border-b-[1px] border-lightest-gray pt-2 pb-2">
                            <div className="flex flex-row space-x-2">
                            <p className="bg-lightest-gray rounded-md pt-1 px-1"><AiOutlineQuestion /> </p>
                            <p>POX Burned</p>
                            </div>
                     
                            <p>0</p>
                        </div>

                        <div className="flex flex-row justify-between border-b-[1px] border-lightest-gray pt-2 pb-2">
                            <div className="flex flex-row space-x-2">
                            <p className="bg-lightest-gray rounded-md pt-1 px-1"><AiOutlineQuestion /> </p>
                            <p>Bandwidth</p>
                            </div>
                       
                            <p>0</p>
                        </div>

                        <div className="flex flex-row justify-between border-b-[1px] border-lightest-gray pt-2 pb-2">
                            <div className="flex flex-row space-x-2">
                            <p className="bg-lightest-gray rounded-md pt-1 px-1"><AiOutlineQuestion /> </p>
                            <p>Energy</p>
                            </div>
                        
                           <p>0</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default BlockDetailPage
