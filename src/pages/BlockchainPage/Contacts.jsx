import React from 'react'
import { SearchBarExpand } from '../../components'
import { IoIosArrowForward } from "react-icons/io";

const Contacts = () => {
  return (
    <div>
      {/* Search Box */}
      <SearchBarExpand />

      {/* Contacts */}
      <div>
        <div>
          <p className='font-semibold'>Contacts</p>
          <p className='bg-dark-yellow'>Contacts VErification</p>
        </div>

        <div>
          <div>
            {/* first block */}
            <div className='shadow-lg'>
              <div className='flex justify-between'>
                <p>Contacts</p>
                <p>More <IoIosArrowForward /></p>
              </div>

              <div className='flex justify-between'>
                <div>
                  <p>********</p>
                  <p>Total</p>
                </div>
                <div>
                  <p className='text-green'>+12,232</p>
                  <p>Last 24h</p>
                </div>
              </div>
            </div>
            {/* Second Block */}
            <div className='shadow-lg'>
              <div className='flex justify-between'>
                <p>Verified Contacts</p>
                <p>More <IoIosArrowForward /></p>
              </div>

              <div className='flex justify-between'>
                <div>
                  <p>51,421</p>
                  <p>Total</p>
                </div>
                <div>
                  <p className='text-green'>+3</p>
                  <p>Percentage</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            {/* Pie chart */}
          </div>
        </div>
      </div>

      {/* View Contacts && All contacts */}
    </div>
  )
}

export default ContactsT