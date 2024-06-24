// import React from 'react'

import { ContactData } from "../../data/ContactData";
// import { IoIosArrowForward } from "react-icons/io";
import PieChartComp from "../../components/PieChartComp";
import SearchBarExpand from "../../components/SearchBarExpand";
import {IoSearch} from "react-icons/io5";
import {PiArrowBendDownLeftBold} from "react-icons/pi";
import Pagination from "../../components/Pagination.jsx";

const Contacts = () => {

  


  return (
    <div className="bg-light-sky-blue">

      <div>
        <SearchBarExpand/>
      </div>

      <div className="m-12">

        <div className="flex flex-row justify-between ">
          <p className="text-xl font-bold">Contacts</p>
          <button className="bg-dark-yellow py-2 px-16 font-bold text-xl rounded-xl text-black cursor-pointer  " >
              Contracts Verification
          </button>
        </div>

        <div className=" flex flex-row justify-between">
         <div className=" flex flex-col gap-10">

          <div className="bg-white px-16 py-6 gap-9 rounded-xl ">
            <p className="  text-xl font-bold ">Contacts</p>

            
            <div className=" flex flex-row justify-between gap-20 rounded-lg p-5">
             
             
            <div className="">
              <p>.................</p>
              <p className="text-light-gray font-bold">Total</p>
              </div>

              <div>
              <p className="text-dark-green font-bold text-xl">+17,792</p>
              <p className="text-light-gray font-bold">Last 24h</p>
              </div>
              

            </div>
          </div>
          <div className="bg-white px-16 py-6 gap-9 rounded-xl">
            <p className=" text-xl font-bold ">
            Verified Contacts
            </p>

            <div className=" flex flex-row justify-between gap-20 rounded-lg p-5" >
              <div>
                <p className="text-xl font-bold text-dark-green">51,421</p>
                <p className="text-light-gray">Total</p>
              </div>

              <div>
                <p  className="text-xl font-bold text-dark-green">+3</p>
                <p className="text-light-gray">Percentage</p>
              </div>
            </div>
          </div>
         </div>

         <div className="bg-white px-80 py-6">
          <p className="font-bold text-xl p-0">24h Top Contracts</p>

          <div>
            <div className="w-full">
               <PieChartComp />
            </div>

            <div className=" flex flex-row justify-between ">
              <div className="">

                <p className=""><span className="px-2 py-1 bg-lightest-gray rounded-md"> SC</span>  <span className="px-2 py-1 bg-lightest-gray text-dark-red rounded-md">USDT Token </span></p>
                <p className=""><span className="px-2 py-1 bg-lightest-gray rounded-md"> SC</span>  <span className="px-2 py-1 bg-lightest-gray text-dark-red rounded-md">USDT Token </span></p>
                <p><span className="px-2 py-1 bg-lightest-gray rounded-md"> SC</span>  <span className="px-2 py-1 bg-lightest-gray text-dark-red rounded-md">USDT Token </span></p>
                <p><span className="px-2 py-1 bg-lightest-gray rounded-md"> SC</span>  <span className="px-2 py-1 bg-lightest-gray text-dark-red rounded-md">USDT Token </span></p>
                <p><span className="px-2 py-1 bg-lightest-gray rounded-md"> SC</span>  <span className="px-2 py-1 bg-lightest-gray text-dark-red rounded-md">USDT Token </span></p>
                <p><span className="px-2 py-1 bg-lightest-gray rounded-md"> SC</span>  <span className="px-2 py-1 bg-lightest-gray text-dark-red rounded-md">USDT Token </span></p>
                <p><span className="px-2 py-1 bg-lightest-gray rounded-md"> SC</span>  <span className="px-2 py-1 bg-lightest-gray text-dark-red rounded-md">USDT Token </span></p>
                
                </div>

              <div></div>
            </div>
          </div>
         </div>

        </div>
      </div>

      
        <div className="flex flex-row justify-start gap-8 m-12">
        <button className="bg-dark-yellow shadow-lg py-5 px-9 font-bold text-xl rounded-xl text-black cursor-pointer  " >
              Verified Contract
          </button>
          <button className="shadow-lg py-5 px-16 font-bold text-xl rounded-xl text-black cursor-pointer  " >
              All Contract
          </button>
        </div>
        
        <div>
        

        <div className="bg-white rounded-xl p-10 m-12">
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
                <div className="flex flex-row justify-evenly p-5 border-b-2 border-lightest-gray  rounded-xl m-12">

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