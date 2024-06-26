// import React from 'react'

import { ContactData } from "../../data/ContactData";
import PieChartComp from "../../components/PieChartComp"
import SearchBarExpand from "../../components/SearchBarExpand";
import {IoSearch} from "react-icons/io5";
import {PiArrowBendDownLeftBold} from "react-icons/pi";
import {MdKeyboardArrowRight} from "react-icons/md";

const Contacts = () => {

  


  return (
    <div className="bg-light-sky-blue px-12 pb-12">

      <div>
        <SearchBarExpand/>
      </div>

      <div className="">

        <div className="flex flex-row justify-between pb-10">
          <p className="text-2xl font-bold">Contacts</p>
          <button className="bg-dark-yellow py-2 px-16 font-bold text-xl rounded-xl text-black cursor-pointer  " >
              Contracts Verification
          </button>
        </div>

        <div className=" flex flex-row justify-between w-full">
         <div className=" flex flex-col gap-10 w-[48%]">

          <div className="bg-white  py-6 gap-9 rounded-xl shadow-xl ">
            <div className="flex flex-row justify-between">
            <p className=" text-xl font-bold pl-12">Contacts</p>
            <div className="flex flex-row pr-16">
            <p>More</p>
            <MdKeyboardArrowRight className="mt-1 text-xl"/>
            </div>
            </div>
           
            
            <div className=" flex flex-row justify-between gap-20 rounded-lg p-5">
             
             
            <div className="pl-8">
              <p >............................................</p>
              <p className="text-light-gray  pt-5">Total</p>
              </div>

              <div>
              <p className="text-dark-green font-bold text-xl pr-10">+18,792</p>
              <p className="text-light-gray  pt-5">Last 24h</p>
              </div>
              

            </div>
          </div>
          <div className="bg-white px-16 py-6 gap-9 rounded-xl shadow-xl">

            <div className="flex flex-row justify-between ">
            <p className=" text-xl font-bold "> Verified Contacts </p>
            <div className="flex flex-row pr-5">
            <p>More</p>
            <MdKeyboardArrowRight className="mt-1 text-xl"/>
            </div>
            </div>
           

            <div className=" flex flex-row justify-between gap-20 rounded-lg pt-6 pb-6" >
              <div>
                <p className="text-xl font-bold ">51,421</p>
                <p className="text-light-gray pt-5">Total</p>
              </div>

              <div>
                <p  className="text-xl font-bold text-dark-green">+3</p>
                <p className="text-light-gray pt-5">Percentage</p>
              </div>
            </div>
          </div>
         </div>

         <div className="bg-white rounded-xl shadow-xl w-[48%] py-3">
          <p className="font-bold text-xl pt-5 pl-8 ">24h Top Contracts</p>

          <div className="flex flex-row  justify-between">
          <div className=" h-80 w-[40%]">
           <PieChartComp />
          </div>


            <div className=" flex flex-row justify-between ">
              <div className=" pr-20 space-y-5">

                <p className=""><span className="px-2 py-1 bg-lightest-gray rounded-md"> SC</span>  <span className="px-2 py-1 bg-lightest-gray text-dark-red rounded-md">USDT Token </span></p>
                <p className=""><span className="px-2 py-1 bg-lightest-gray rounded-md"> SC</span>  <span className="px-2 py-1 bg-lightest-gray text-dark-red rounded-md">USDT Token </span></p>
                <p><span className="px-2 py-1 bg-lightest-gray rounded-md"> SC</span>  <span className="px-2 py-1 bg-lightest-gray text-dark-red rounded-md">USDT Token </span></p>
                <p><span className="px-2 py-1 bg-lightest-gray rounded-md"> SC</span>  <span className="px-2 py-1 bg-lightest-gray text-dark-red rounded-md">USDT Token </span></p>
                <p><span className="px-2 py-1 bg-lightest-gray rounded-md"> SC</span>  <span className="px-2 py-1 bg-lightest-gray text-dark-red rounded-md">USDT Token </span></p>
                <p><span className="px-2 py-1 bg-lightest-gray rounded-md"> SC</span>  <span className="px-2 py-1 bg-lightest-gray text-dark-red rounded-md">USDT Token </span></p>
                <p><span className="px-2 py-1 bg-lightest-gray rounded-md"> SC</span>  <span className="px-2 py-1 bg-lightest-gray text-dark-red rounded-md">USDT Token </span></p>
                
                </div>

              <div className="pr-10 space-y-5">
                <p>2,035,198 calls <span className="text-light-gray">(99.03%)</span></p>
                <p>6,035 calls <span className="text-light-gray">(88.05%)</span></p>
                <p>7,987 calls <span className="text-light-gray">(88.75%)</span></p>
                <p>8,345 calls <span className="text-light-gray">(77.5%)</span></p>
                <p>2,305 calls <span className="text-light-gray">(75.66%)</span></p>
                <p>1,234 calls <span className="text-light-gray">(75.66%)</span></p>
                <p>5,098 calls <span className="text-light-gray">(65.54%)</span></p>
              
              </div>
            </div>
          </div>
         </div>

        </div>
      </div>

      
        <div className="flex flex-row justify-start gap-8 pt-20 pb-10">
        <button className="bg-dark-yellow shadow-lg py-5 px-9 font-bold text-xl rounded-xl text-black cursor-pointer  " >
              Verified Contract
          </button>
          <button className="shadow-lg py-5 px-16 font-bold text-xl rounded-xl bg-white text-black cursor-pointer  " >
              All Contract
          </button>
        </div>
        
        <div>
        

        <div className="bg-white rounded-xl p-10 ">
        < div className=" flex flex-row justify-between">
          <div>
          <p className=""> <span className="text-lg font-bold">36,045  </span>  <span className="font-bold text-light-gray">contracts in total</span></p>
          </div>
          
          
          <div className="flex flex-row justify-between px-32 rounded-md  border-2 border-lightest-gray">
          <IoSearch className=" text-xl pt-4 w-10 h-10 text-light-gray"/>
          
          <input
          className="bg-white h-12 w-full  rounded-lg text-sm  focus:outline-none placeholder:text-light-gray placeholder:font-medium"
          type="search"
          name="search"
          placeholder="Search by Contract Accounts/Name"
        />

        <PiArrowBendDownLeftBold className="w-10 h-10 pt-4  text-light-gray"/>
          </div>
          
          
        </div>

          <div className="flex flex-row justify-evenly bg-lightest-gray p-2 m-3 rounded-xl">
            <p>Account</p>
            <p>Contract</p>
            <p>Number of Calls </p>
            <p>POX Balance </p>
            <p>Version</p>
            <p>License</p>
            <p>Created On</p>
            <p>Verified On</p>
            <p>Setting</p>
            
            
        </div>
        

       
          {ContactData.map ((contact, index) => {
            return (
              <>
                <div className="flex flex-row justify-evenly p-5 border-b-2 border-lightest-gray  rounded-xl ">

                  <p><span className="px-3 py-1 bg-lightest-gray rounded-lg">SC</span>{contact.Account} <span className="px-3 py-1 bg-lightest-gray rounded-lg">USDT Token</span></p>
                  <p>{contact.Contract}</p>
                  <p>{contact.NumberOfCalls}</p>
                  <p>{contact.POXBalance}</p>
                  <p>{contact.Version}</p>
                  <p>{contact.Licence}</p>
                  <p>{contact.CreatedOn}</p>
                  <p>{contact.VerifiedOn}</p>
                  <p>{contact.Settings}</p>
                
                </div>
              </>
            )
          })}


     




      </div>
      </div>
      </div>
    
  );
};

export default Contacts;