import React from 'react'

const Contact = () => {
  return (
    <div id='contact'className='px-4 py-2 max-w-[1100px] m-auto'>
      <div className='text-center py-6'>
        <h1 className='font-bold text-[18px]'>Send us a Message</h1>
        <h3 >We're standing by!</h3>
      </div>
      <div className='sm:grid grid-cols-2'>
      <div>
        <img className='w-full md:h-full object-cover p-2 max-h-[500px] h-[200px]' src="https://images.unsplash.com/photo-1538964173425-93884d739596?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1035&q=80" alt="" />
      </div>
      <div >
        <form action="" className='grid grid-cols-2'>
            
                <input className='border m-2 p-2'  type="text" name="" id="" placeholder='First Name' />
                <input className='border m-2 p-2' type="text" name="" id="" placeholder='Last Name' />
                <input className='border m-2 p-2' type="email" name="" id="" placeholder='Email' />
                <input className='border m-2 p-2' type="text" name="" id="" placeholder='Phone' />
                <input className='col-span-2 border m-2 p-2'  type="text" name="" id="" placeholder='Address'/>
                <textarea name="" id="" cols="30" rows="10" className='col-span-2 border m-2 p-2' placeholder='write something'></textarea>
                <button className='col-span-2 m-2'>Submit</button>
        </form>
      </div>
      </div>
    </div>
  )
}

export default Contact
