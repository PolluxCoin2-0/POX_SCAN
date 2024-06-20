// import React from 'react'
 import SearchBar from "./SearchBar";
 import GovStack from "../../assets/Govstack.png";
 import GovPox from "../../assets/Govpox.png";
 

const PoxStakingGovernance = () => {
  return (
    <div className="bg-light-sky-blue">
      <div>
        <SearchBar />
      </div>


      <div className="flex flex-row justify-evenly bg-white m-12 rounded-lg ">
       <div className="w-[40%] pt-10">
       <p className="text-3xl font-bold mt-10 ">POX STAKING GOVERNANCE</p>
       <p className="pt-4 mt-10 text-lg font-bold"> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
       <button className="bg-dark-yellow py-2 px-6 rounded-xl text-black cursor-pointer mt-10">
       Connect Wallet
     </button>
       
       </div>

       <div className=" w-[40%] pt-5 mt-10 ">
         <img src={GovStack}
         alt="governance pox img"
         className="w-[455] h-[377]"
         />
       </div>
      </div>
    
      <div className=" flex flex-row justify-evenly "> 
      <div className="bg-white py-7 px-20  rounded-2xl ">
       <p className=" text-md text-light-gray">Total POX staked</p>
       <p className="text-2xl font-bold pt-3">6,2345,7853,009</p>
      
      </div> 

      <div className="bg-white py-7 px-20 rounded-2xl ">
      <p className=" text-md text-light-gray">POX Staking Rate</p>
      <p className="text-2xl font-bold pt-3">52.52%</p>
      
      </div>

      <div className="bg-white py-7 px-20  rounded-2xl ">
      <p className=" text-md text-light-gray">Total POX Reward Distribution</p>
      <p className="text-2xl font-bold pt-3">6,2345,7853,00</p>
      </div>

      <div className="bg-white py-7 px-20 rounded-2xl ">
      <p className=" text-md text-light-gray">Highest APY</p>
      <p className="text-2xl font-bold pt-3">4.15%</p>
      </div>
      
      </div>
    
      <div className="flex flex-row justify-between pt-10">
         <div className=" p-10">
           <img src={GovPox}
           alt="alt image"
           className="w-[472] h-[400]"
           />
         </div>


         <div className=" ">

            <p className="font-bold text-3xl">Governance Model</p>
            <p className="text-sm text-light-gray pt-4">Open, transparent and all on-chain</p>

            <div>
               <div> 
                
                
                 <p className="text-xl font-bold w-[40%] pt-10 mt-3">Vote in Elections</p>
                 <p className="text-sm text-light-gray text-wrap w-[80%]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever s</p>
               </div>

               <div>
              

                <p className="text-xl font-bold pt-10">Source the Network</p>
                <p className="text-sm text-light-gray w-[80%]"> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever s</p>
               
               </div>

               <div>
                
                 <p className="text-xl font-bold pt-10">Share Block Rewards</p>
                 <p className="text-sm text-light-gray w-[80%]"> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever s</p>
               </div>
            </div>
         </div>
         
      </div>
    
      <div className="">
         <div className="flex flex-col items-center ">
           <p className="font-bold text-4xl pt-11">Contribute to Governance</p>
           <p className="text-md text-light-gray pt-4" >Get voting rewards and free resources in return</p>
         </div>

         <p className="text-lg font-bold p-7">A More Flexible and Efficient Staking Method</p>

         <div className="flex flex-row justify-between p-5 w-full">
           <div className=" bg-white  px-10 py-28 rounded-xl w-[60%]">
            <p className="font-bold text-lg ">Get Pox for Governance</p>
            <p className="text-light-gray">By staking pox, you can obtain POX power which can be used to vote for SRS you support and earn rewards.</p>
           </div>



           <div className="flex flex-row  bg-white justify-evenly ml-5 rounded-xl p-5 w-[40%]">
             <div className="w-[40%] ">
              <p className="font-bold">Get resources for free Transaction</p>
              <p className="">By staking POX, you can obtain free resources on the network to cover the fee of transaction.
              The resources used will dynamically recover to the original amoung after a certain period.</p>
             </div>

             <div className="w-[40%] items-start ">
              <p className="font-bold">Delegate Idle Resources to Others</p>
              <p>You my delegate idle resources to others and can reclaim the resources anytime.</p>
             </div>
           </div>
         </div>
      
      </div>
    
      <div></div>
    
      <div></div>
    
      <div></div>
    
    
    </div>
  )
}

export default PoxStakingGovernance