import React from 'react'
import {AiFillPhone, AiOutlineClockCircle} from 'react-icons/ai'
import {BsChatSquareDots} from 'react-icons/bs'

const Topbar = () => {
  return (
    <div className='flex justify-between items-center px-4 py-2'>
      <div className='flex items-center'>
        <BsChatSquareDots className='mr-2'/>
        <h1 className='font-bold text-xl text-gray-700'>COMPANY</h1>
      </div>
      <div className='flex gap-10 items-center'>
          <div className='hidden md:flex items-center'>
            <AiOutlineClockCircle className='mr-2'/>
            <p className='text-sm text-gray-700'>9AM-5PM</p>
          </div>
          <div className='hidden md:flex items-center'>
            <AiFillPhone className='mr-2'/>
            <p className='text-sm text-gray-700'>+91 777-777-7777</p>
          </div>
          <button>Get a Free Quote</button>
      </div>
    </div>
  )
}

export default Topbar
