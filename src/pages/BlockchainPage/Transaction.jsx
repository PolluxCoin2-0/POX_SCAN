// import React from 'react'

import { ContactData } from "../../data/ContactData";
import PieChartComp from "../../components/PieChartComp";
import SimplePieChartComp from "../../components/SimplePieChartComp";
import SearchBarExpand from "../../components/SearchBarExpand";
import {IoSearch} from "react-icons/io5";
import {PiArrowBendDownLeftBold} from "react-icons/pi";
import {MdKeyboardArrowRight} from "react-icons/md";

const Transaction = () => {

  


  return (
    <div className="px-12 pb-12">

      <div>
        <SearchBarExpand/>
      </div>

      <div className="">

        <div className="flex flex-row justify-between pb-10">
          <p className="text-2xl font-bold">Transactions</p>
         
        </div>

        <div className=" flex flex-row justify-between w-full">
         <div className=" flex flex-col gap-10 w-[48%]">

          <div className="bg-white  py-6 gap-9 rounded-xl shadow-xl ">
            <div className="flex flex-row justify-between">
            <p className=" text-xl font-bold pl-12">Tnx Counts</p>
           
            </div>
           
            
            <div className=" flex flex-row justify-between gap-20 rounded-lg p-5">
             
             
            <div className="pl-8">
              <p className="text-xl font-bold">55,451,455,,254</p>
              <p className="text-light-gray  pt-5">Total</p>
              </div>

              <div>
              <p className="text-dark-green font-bold text-xl pr-20">+4,048,420</p>
              <p className="text-light-gray  pt-5"> Yesterday</p>
              </div>
              

            </div>
          </div>
          <div className="bg-white px-16 py-6 gap-9 rounded-xl shadow-xl">

            <div className="flex flex-row justify-between ">
            <p className=" text-xl font-bold "> Trading  Volume</p>
            
            </div>
           

            <div className=" flex flex-row justify-between gap-20 rounded-lg pt-6 pb-4" >
              <div>
                <p className="text-xl font-bold ">51,421 POX</p>
                <p className="font-bold">=$18, 294.13b</p>
                <p className="text-light-gray pt-5">Total</p>
              </div>

              <div>
                <p  className="text-xl font-bold text-dark-green ">+4,048,420 POX</p>
                <p className="font-bold">=$15.85b</p>
                <p className="text-light-gray pt-5">Yesterday</p>
              </div>
            </div>
          </div>
         </div>

         <div className="bg-white rounded-xl shadow-xl w-[48%] py-3">
          <div className="flex flex-row justify-between">
          <p className="font-bold text-xl pt-5 pl-8"> Daily Tnx Distribution</p>
          <div className="flex flex-row pr-10 pt-4">
            <p>More</p>
            <MdKeyboardArrowRight className="mt-1 text-xl"/>
            </div>
          </div>
        

          <div className="flex flex-row justify-between">
          <div className=" h-80 w-[70%] text-center">
           <SimplePieChartComp />
          </div>


          </div>
         </div>

        </div>
      </div>

      
        
        
        <div>
        

        <div className="bg-white rounded-xl p-10 mt-16">
        < div className=" flex flex-row justify-between">
          <div>
          <p className=""> <span className="text-lg font-bold">36,045  </span>  <span className="font-bold text-light-gray">A total of 10000 transactions(s)</span></p>
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

export default Transaction;