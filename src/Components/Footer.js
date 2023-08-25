import React from 'react'
import {BsChatSquareDots} from 'react-icons/bs'
const Footer = () => {
  return (
    <div className='max-w-[1140px] w-full mt-14 py-5 m-auto border-t-[3px]'>
      <div className='flex items-center justify-center m-auto'>
        <BsChatSquareDots className='mr-2' size={30}/>
        <h1 className='text-xl text-center'>COMPANY</h1>
      </div>
    </div>
  )
}

export default Footer
