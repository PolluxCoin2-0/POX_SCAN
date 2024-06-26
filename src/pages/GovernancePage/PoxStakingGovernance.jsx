// import React from 'react'
 import SearchBarExapnd from "../../components/SearchBarExpand";
 import GovStack from "../../assets/Govstack.png";
 import GovPox from "../../assets/Govpox.png";
 import Poximg from "../../assets/PoxImg.png";
 import justLend from "../../assets/justland.png";
 import LineChartComp from "../../components/LineChart";
 import iconPledge from "../../assets/iconpledge.png";
 import iconPower from "../../assets/power.png";
 import iconReward from "../../assets/Reward.png";
 import icon from "../../assets/icon.png";
 import svg from "../../assets/SVG.png";
 import { HiArrowUpRight} from "react-icons/hi2";
import {IoIosArrowForward} from "react-icons/io";
import { FaArrowRightLong} from "react-icons/fa6";

const PoxStakingGovernance = () => {
  return (
    <div className="bg-light-sky-blue">
      <div>
        <SearchBarExapnd />
      </div>


      <div className="flex flex-row justify-around  bg-white m-12 rounded-lg ">
       <div className="w-[40%] pt-10">
       <p className="text-4xl font-bold mt-10 ">POX STAKING GOVERNANCE</p>

       <p className="pt-4 mt-10 text-lg font-bold"> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s</p>
      <div>
        
      </div>
       <button className="bg-dark-yellow py-2 px-6 rounded-xl text-black cursor-pointer mt-20">
       Connect Wallet <FaArrowRightLong/>
     </button>

     <button className="bg-dark-yellow py-2 px-6 rounded-xl text-black cursor-pointer mt-20 ml-20">
       Stake
     </button>
       
       
       </div>

       <div className=" w-[40%] pt-5 mt-10 flex justify-end items-center">
         <img src={GovStack}
         alt="governance pox img"
         className="w-[455] h-[377] "
         />
       </div>
      </div>
    
      <div className=" flex flex-row justify-evenly w-full "> 
      <div className="bg-white py-7 px-20  w-[20%] rounded-2xl ">
       <p className=" text-md text-light-gray">Total POX staked</p>
       <p className="text-2xl font-bold pt-3">6,2345,7853,009</p>
      
      </div> 

      <div className="bg-white py-7 px-20 w-[20%] rounded-2xl ">
      <p className=" text-md text-light-gray">POX Staking Rate</p>
      <p className="text-2xl font-bold pt-3">52.52%</p>
      
      </div>

      <div className="bg-white py-7 px-20  w-[20%] rounded-2xl ">
      <p className=" text-md text-light-gray">Total POX Reward Distribution</p>
      <p className="text-2xl font-bold pt-3">6,2345,7853,00</p>
      </div>

      <div className="bg-white py-7 px-20 w-[20%] rounded-2xl ">
      <p className=" text-md text-light-gray">Highest APY</p>
      <p className="text-2xl font-bold pt-3">4.15%</p>
      </div>
      
      </div>
    
      <div className="flex flex-row justify-between pt-10">
         <div className=" ">
           <img src={GovPox}
           alt="alt image"
           className="w-[472] h-[400] pl-16"
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
         <div className=" text-center ">
           <p className="font-bold text-4xl pt-11">Contribute to Governance</p>
           <p className="text-md text-light-gray pt-4" >Get voting rewards and free resources in return</p>
         </div>

         <p className="text-lg font-bold p-7">A More Flexible and Efficient Staking Method</p>

         <div className="flex flex-row justify-between p-10 w-full">
           <div className=" bg-white  px-10 py-28 rounded-xl w-[60%]">
            <p className="font-bold text-xl">Get Pox for Governance</p>
            <p className="text-light-gray">By staking pox, you can obtain POX power which can be used to vote for SRS you support and earn rewards.</p>

            
            <div className="">

              <div className="flex flex-row justify-around pt-14">
                <div>
                  <img src={iconPledge}
                  alt="lock icon"
                  className=""
                  />

                  <p>Stake POX</p>
                </div>
                <div>Get POX power</div>
                <div>
                  <img src={iconPower}
                  alt=" power icon"
                  className=" "
                  />
                  <p>POx Power</p>
                  
                  </div>             
             </div>

              <div className="flex flex-row justify-around pt-14">
                <div>
                  <img src={iconPower}
                  alt=""
                  className="pl-7"
                  />

                   <p className="pl-7">POX power</p>
                </div>

                <div>Vote for SRS and get voting rewards</div>
                <div>

                  <img src={iconReward}
                  alt=""
                  className=" "
                  />

                  <p>Voting Rewards</p>
                  </div>             
               </div>
            </div>
           </div>



           <div className="flex flex-row  bg-white justify-evenly ml-5 rounded-xl p-5 w-[40%]">
             <div className="w-[40%] ">
              <p className=" pt-10 text-xl font-bold">Get resources for free Transaction</p>
              <p className="pt-8 text-light-gray leading-7">By staking POX, you can obtain free resources on the network to cover the fee of transaction.
              The resources used will dynamically recover to the original amoung after a certain period.</p>
               
               <img src={icon} 
               alt="icon image "
               className=" pl-40 pt-5"
               />

               <HiArrowUpRight
               size={20}
               className="cursor-default"/>
             </div>

             <div className="w-[40%] items-start ">
              <p className=" pt-10 text-xl font-bold">Delegate Idle Resources to Others</p>
              <p className="pt-8 text-light-gray leading-6">You my delegate idle resources to others and can reclaim the resources anytime.</p>

              <img src={svg}
              alt=" "
              className="pl-44 pt-20"
              />

              < HiArrowUpRight
              size={20}
              className="cursor-pointer "
              />

             </div>
           </div>
         </div>
      
      </div>
    
      <div  className="m-4 ">
         <p className="pl-10 text-2xl font-bold ">Calculate your Staking Rewards</p>
          
          <div className=" bg-white m-6 rounded-lg">

            <div className="flex flex-row justify-around p-10 ">

              <div className="flex flex-col justify-start ">
                <p className=" font-bold text-xl "> I want to stake</p>
                <div className="flex flex-row  border-2 rounded-lg  px-40 py-2 mt-6 ">
                  <p className="font-bold  ">10000</p>
                  <div className="flex flex-row">
                  <img src ={Poximg} 
                  alt="pox img"
                  className="w-[18] h-[18]"/>
                  <p>POX</p>
                  </div>

                  
                
                </div>
                <p className="mt-6 font-bold">Est. Rewards   <span className="text-light-brown text-xl">+1244.181000</span></p>
              </div>

              < div className="flex flex-row ">
                <p className="font-bold text-xl"  >Highest APY</p>
                <p className="text-light-brown font-bold text-xl">4.15%</p>
                
                <LineChartComp />
                
                
              </div>
            </div>

            <div>
              <p className="pl-40 text-light-gray">* The estimated POX reward here are calculated based on the staking duration selected and the POX amount entered. The actual API and POX rewards may vary.</p>
            </div>



            <div className="flex justify-center mt-10">
            <button className="bg-dark-yellow py-2 px-32 font-bold rounded-md text-black cursor-pointer flex flex-row mb-10" >
              <p>Stake Now </p>
               <p className="pt-1 pl-2 font-bold"><IoIosArrowForward/></p>
               
        </button>
        
            </div>
          </div>


      </div>
    
      <div className="bg-white m-10 rounded-lg flex flex-row justify-between">
         <div className="p-16">
          <p className="font-bold text-xl">Stake POX on JustLend DAO</p>
          <p className="pt-5 "><span className="">Easy Staking</span> Stake POX to get sPOX directly</p>
          <p className="pt-5"><span>Higher Yields</span> Staking API consist of voting API  and Energy rental API.</p>
          <p className="pt-5"><span>Safe & Reliable</span> DAO governance and contract audit ensure your asset security together</p>  
          <button className="bg-dark-yellow py-2 px-32 font-bold rounded-md text-black cursor-pointer mt-10 " >
              Go to JustLend DAO
          </button>
        
          </div>

         <div>

          <img src={justLend}
          alt="justlend image"
          className="p-10"
          />
         </div>

      </div>
    
      <div></div>
    
    
    </div>
  )
}

export default PoxStakingGovernance;