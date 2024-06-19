// import React from 'react'
import { IoIosArrowForward } from "react-icons/io";
import { SearchBarExpand } from '../../components';

const Accounts = () => {
  return (
    <div>
      {/* Search Box */}
      <SearchBarExpand/>
      
      {/* Accounts */}
      <div>
        <p className='font-semibold'>Accounts</p>

        {/* Number of Accounts */}
        <div className='shadow-lg'>
          <div className='flex flex-justify'>
            <p className='font-semibold'>Number of Accounts</p>
            <p>More <IoIosArrowForward /></p>
          </div>

          <div className='flex justify-between'>
            <div>
              <p>********</p>
              <p>Total</p>
            </div>
            <div>
              <p>+128,792</p>
              <p>Last 24h</p>
            </div>
          </div>
        </div>

        {/* Pox Holders */}
        <div className='shadow-lg'>
          <div className='flex flex-justify'>
            <p className='font-semibold'>Number of Accounts</p>
            <p>More <IoIosArrowForward /></p>
          </div>

          <div className='flex justify-between'>
            <div>
              <p>********</p>
              <p>Total</p>
            </div>
            <div>
              <p>+128,792</p>
              <p>Last 24h</p>
            </div>
          </div>
        </div>

        {/* Pox Active Accounts */}
        <div className='shadow-lg'>
          <div className='flex flex-justify'>
            <p className='font-semibold'>Number of Accounts</p>
            <p>More <IoIosArrowForward /></p>
          </div>

          <div className='flex justify-between'>
            <div>
              <p>********</p>
              <p>Total</p>
            </div>
            <div>
              <p>+128,792</p>
              <p>Last 24h</p>
            </div>
          </div>
        </div>
      </div>

      {/* Table Datas */}
      <div>
        
      </div>

    </div>
  )
}

export default Accounts