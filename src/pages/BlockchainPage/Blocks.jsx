import React from 'react'
import { IoIosArrowForward } from "react-icons/io";
import { SearchBarExpand } from '../../components';

const Blocks = () => {
  return (
    <div>
      {/* Search Box */}
      <SearchBarExpand/>
      
      {/* Blocks */}
      <div>
        <p className='font-semibold text-lg flex justify-around px-4'>Blocks</p>
        {/* Number of blocks */}
        <div className='shadow-lg'>
          <p>Number of Blocks</p>
          <div className='flex flex-row justify-between'>
            <div>
              <p className='text-dark-red'>6051403</p>
              <p>Latest</p>
            </div>
            <div>
              <p>+28,892</p>
              <p>Yesterday</p>
            </div>
          </div>
        </div>

        {/* Block rewards */}
        <div className='shadow-lg'>
          <div className='flex justify-between'>
            <p>Block Rewards</p>
            <p>More <IoIosArrowForward />  </p>
          </div>

          <div className='flex justify-between'>
            <div>
              <p className='font-semibold'>8.87b POX</p>
              <p>=$1,078,347.123</p>
              <p>Total</p>
            </div>
            <div>
            <p className='font-semibold'>5,062,392 TRX</p>
              <p>=$1,078,347.123</p>
              <p>Yesterday</p>
            </div>
          </div>
        </div>

        {/* Stats on burned pox */}
        <div className='shadow-lg'>
          <div className='flex justify-between'>
            <p className='font-semibold'>Stats on Burned POX</p>
            <p>More <IoIosArrowForward />  </p>
          </div>

          <div className='flex justify-between'>
            <div>
              <p className='font-semibold'>8.87b POX</p>
              <p>=$1,078,347.123</p>
              <p>Total</p>
            </div>
            <div>
            <p className='font-semibold'>5,062,392 TRX</p>
              <p>=$1,078,347.123</p>
              <p>Yesterday</p>
            </div>
          </div>
        </div>
      </div>

      {/* StableCoins */}
      <div className='shadow-lg px-4'>
        <p>Only the first 10,000 records are displayed.</p>
        <div>
          <p>Block</p>
          <p>Age</p>
          <p>Producer</p>
          <p>Pox Count</p>
          <p>Consumed Energy/Bandwidth</p>
          <p>Burned POX</p>
          <p>Block Reward</p>
          <p>Status</p>
        </div>

        <div>
          {/* javascript map */}
        </div>
      </div>
    </div>
  )
}

export default Blocks