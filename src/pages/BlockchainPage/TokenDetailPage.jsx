import { BiSolidCopyAlt } from "react-icons/bi"
import { SearchBarExpand } from "../../components"
import { RiQrCodeFill } from "react-icons/ri"
import { AiOutlineQuestion } from "react-icons/ai"


const TokenDetailPage = () => {
  return (
    <div className="px-12 pb-12">

        {/* Search Bar */}
        <div>
            <SearchBarExpand />
        </div>

        {/* first Div */}
        <div className="flex flex-row justify-between">

            <div>
                <p className="text-xl font-bold">Account</p>

                <div className="flex flex-row space-x-4">
                <p className="text-lg font-semibold pt-3">PNJ1EiG6AW8emmRbuzrWMPL7f9n77M8U7E</p>
                <p className="text-xl p-2 bg-white rounded-full cursor-pointer ">
              <BiSolidCopyAlt
                // onClick={() => handleCopy(accountData?.address)}
              />
            </p>
            <p className="text-xl bg-white p-2 rounded-full cursor-pointer">
              <RiQrCodeFill />
            </p>
            </div>

                <div className="flex flex-row space-x-4 mt-3">
                    <p  className=" py-1 pl-2 pr-2 font-semibold bg-lightest-gray rounded-md">Add a private tag</p>
                    <p  className=" py-1 pl-2 pr-2 font-semibold bg-lightest-gray rounded-md">PolluxUsd Contract</p>
                </div>
            </div>

            <div className="flex flex-row space-x-10 mt-14">
            <div>
                <div className="flex flex-row space-x-2">
                <p className="bg-lightest-gray rounded-md pt-1 px-1">
                  <AiOutlineQuestion />
                </p>
                <p>Recent Activity (UTC)</p>
                </div>
            
                <p>2024-07-19T00:00:40.423Z</p>
            </div>

            <div>
                <div className="flex flex-row space-x-2">
                <p className="bg-lightest-gray rounded-md pt-1 px-1">
                  <AiOutlineQuestion />
                </p>
                <p>Created on (UTC)</p>
                </div>
                <p>2024-07-19T00:00:40.423Z</p>
            </div>
        </div>
        </div>

        {/* Second Div */} 
        <div className="flex flex-row w-full space-x-10 mt-6" >

            <div className="w-[60%] bg-white rounded-lg p-5 shadow-lg">
                <p className="text-2xl font-bold border-b-[1px] border-text-bg-gray pb-4">Overview</p>

                <div>

                    <div className="flex flex-row justify-between border-b-[1px] border-text-bg-gray pb-4 pt-4">
                        <div className="flex flex-row space-x-2">
                        <p className="bg-lightest-gray rounded-md pt-1 px-1"><AiOutlineQuestion /> </p>
                        <p className="font-bold">Name: </p>
                        </div>
                   
                        <p>PolluxUsd</p>
                    </div>

                    <div className="flex flex-row justify-between border-b-[1px] border-text-bg-gray pb-4 pt-4">
                        <div className="flex flex-row space-x-2">
                        <p className="bg-lightest-gray rounded-md pt-1 px-1"><AiOutlineQuestion /> </p>
                        <p className="font-bold">Total Assets:</p>
                        </div>
                   
                    <p>$51.59 (100.00000001 POX)</p>
                    </div>

                    <div className="flex flex-row justify-between border-b-[1px] border-text-bg-gray pb-4 pt-4">
                        <div className="flex flex-row space-x-2">
                        <p className="bg-lightest-gray rounded-md pt-1 px-1"><AiOutlineQuestion /> </p>
                        <p className="font-bold">Transactions:</p>
                        </div>
                   
                    <p>75291</p>
                    </div>

                    <div className="flex flex-row items-center justify-between border-b-[1px] border-text-bg-gray pb-4 pt-4">
                        <div className="flex flex-row space-x-2">
                        <p className="bg-lightest-gray rounded-md pt-1 px-1"><AiOutlineQuestion /> </p>
                        <p className="font-bold">Creator:</p>
                        </div>
                   
                    <div className="flex flex-col items-end">
                    <p>PXc8iUhr8Z99v9pgwASib6M76e6nYNfYhu  /   at Txn   /  </p>
                    <p>d3fe3dc36194e6c5c115989f113ad12753a2990c7fc0c98e4b2243e7ea7 83386</p>
                    </div>
                   
                    </div>

                    <div className="flex flex-row justify-between border-b-[1px] border-text-bg-gray pb-4 pt-4">
                        <div className="flex flex-row space-x-2">
                        <p className="bg-lightest-gray rounded-md pt-1 px-1"><AiOutlineQuestion /> </p>
                        <p className="font-bold">Energy Consumption Ratio:</p>
                        </div>
                    
                    <p>Contract 100%   /   User 0%</p>
                    </div>

                    <div className="flex flex-row justify-between border-b-[1px] border-text-bg-gray pb-4 pt-4">
                        <div className="flex flex-row space-x-2">
                        <p className="bg-lightest-gray rounded-md pt-1 px-1 "><AiOutlineQuestion /> </p>
                        <p className="font-bold">Creator's Energy:</p>
                        </div>
                    
                    <p>Available: 0/0</p>
                    </div>

                    <div className="flex flex-row justify-between border-b-[1px] border-text-bg-gray pb-4 pt-4">
                        <div className="flex flex-row space-x-2">
                        <p className="bg-lightest-gray rounded-md pt-1 px-1"><AiOutlineQuestion /> </p>
                        <p className="font-bold">Extra Energy Consumption Factor:</p>
                        </div>
                   
                    <p>0%</p>
                    </div>

                    <div className="flex flex-row justify-between  pb-4 pt-4">
                        <div className="flex flex-row space-x-2">
                        <p className="bg-lightest-gray rounded-md pt-1 px-1"><AiOutlineQuestion /> </p>
                        <p className="font-bold">Energy & POLLUX Power:</p>
                        </div>
                  
                    <p>Energy: Available 0   /  0POLLUX Power: Voted 0/0</p>
                    </div>
                </div>
            </div>


            <div className="w-[40%] bg-white rounded-lg shadow-lg p-5">

                <div className="flex flex-row justify-between">
                  <p  className="text-2xl font-bold pb-4">Calling Overview</p>
                  <p className=" font-semibold">Only data within 30 days is counted</p>
                </div>

                <div className="w-full flex flex-row justify-between mt-5 border-b-[1px] border-text-bg-gray pb-4">
                    <div className="w-[40%] bg-text-bg-gray rounded-lg text-center pt-20 h-[220px]">
                        <p className="text-2xl font-bold">27770</p>
                        <p className="text-light-gray"> Total Calls</p>
                    </div>

                    <div className="w-[60%] pl-5 pr-5">
                        <div className="flex flex-row justify-between pb-8">
                            <p className="text-lg font-semibold">TOP 5 Methods</p>
                            <p className="text-lg font-semibold">Calls Proportion</p>
                        </div>

                        <div className="flex flex-row justify-between pb-2">
                            <p>0xtransfer</p>
                            <p>74.45</p>
                        </div>

                        <div className="flex flex-row justify-between pb-2">
                            <p>0xapprove</p>
                            <p>25.54</p>
                        </div>

                        <div className="flex flex-row justify-between pb-2">
                            <p>0xmint</p>
                            <p>0.01</p>
                        </div>

                        <div className="flex flex-row justify-between pb-2">
                            <p>0xburnFrom</p>
                            <p>0.00</p>
                        </div>
                    </div>
                </div>

                <div className="w-full flex flex-row justify-between mt-5 pb-4">
                    <div className="w-[40%] bg-text-bg-gray rounded-lg text-center pt-20 h-[220px]">
                        <p className="text-2xl font-bold">520</p>
                        <p className="text-light-gray"> Total Addresses</p>
                    </div>

                    <div className="w-[60%] pl-5 pr-5">
                        <div className="flex flex-row justify-between pb-8">
                            <p className="text-lg font-semibold">TOP 5 Addresses</p>
                            <p className="text-lg font-semibold">Calls Proportion</p>
                        </div>

                        <div className="flex flex-row justify-between pb-2">
                            <p className="text-dark-red">0xtransfer</p>
                            <p>74.45</p>
                        </div>

                        <div className="flex flex-row justify-between pb-2">
                            <p className="text-dark-red">0xapprove</p>
                            <p>25.54</p>
                        </div>

                        <div className="flex flex-row justify-between pb-2">
                            <p className="text-dark-red">0xmint</p>
                            <p>0.01</p>
                        </div>

                        <div className="flex flex-row justify-between pb-2">
                            <p className="text-dark-red">0xburnFrom</p>
                            <p>0.00</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* Table data */}
        <div className="flex flex-row space-x-8 mt-10">
            <p className="bg-dark-yellow py-2 px-8 rounded-lg font-bold">Transactions</p>
            <p className="bg-dark-yellow py-2 px-11 rounded-lg font-bold">Contracts</p>
            <p className="bg-dark-yellow py-2 px-10 rounded-lg font-bold">Transfers</p>
        </div>
      
    </div>
  )
}

export default TokenDetailPage
