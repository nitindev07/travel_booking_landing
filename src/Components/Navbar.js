import React, { useState } from 'react'

import {
    FaFacebookF,
    FaTwitter,
    FaGooglePlusG,
    FaInstagram,FaBars
} from 'react-icons/fa'

const Navbar = () => {
const [toggle,settoggel]=useState(false)
const handletoggle= ()=>{
    settoggel( !toggle)
}
  return (
    <>
    <div className='w-full flex justify-between h-[50px] text-white absolute bg-gray-700/80 items-center p-3 '>
        <ul className='hidden md:flex gap-6'>
            <li><a href='/'>Home</a></li>
            <li><a href='#gallery'>Gallery</a></li>
            <li><a href='#deals'>Deals</a></li>
            <li><a href='#contact'>Contact</a></li>
        </ul>
      <div className='flex justify-between gap-10'>
        <FaFacebookF/>
        <FaTwitter/>
        <FaGooglePlusG/>
        <FaInstagram/>
      </div>
      <div className='md:hidden z-10'>
        <FaBars onClick={handletoggle} size={20}className='mr-4 cursor-pointer text-white'/>
      </div>
      <div onClick={handletoggle} className={`overflow-y-hidden z-10 md:hidden ease-in duration-300 bg-black/80 absolute px-4 py-7 flex flex-col text-gray-300 left-0 top-0 w-full h-screen ${ toggle ? "left-[0%]":"left-[-100%]"} `}>
      <ul className='h-full w-full text-2xl text-center pt-12'>
            <li className='py-8'><a href='/'>Home</a></li>
            <li className='py-8'><a href='#gallery'>Gallery</a></li>
            <li className='py-8'><a href='#deals'>Deals</a></li>
            <li className='py-8'><a href='#contact'>Contact</a></li>
        </ul>
        </div>
    </div>
    </>
  )
}

export default Navbar
