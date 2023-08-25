import React from 'react'

const Booking = () => {
  return (
    <div id='deals' className='max-w-[1140px] m-auto w-full p-4'>
      <form action="" className='md:flex gap-5 justify-between w-full items-center'>
         <div className='flex flex-col w-full '>
            <label htmlFor="destination">Destination</label>
            <select name="destination" className='border p-2  rounded-md md:w-full' id="">
                <option value="">Grand Antigue</option>
                <option value="">Key West</option>
                <option value="">Maldives</option>
                <option value="">Cozumel</option>
            </select>
        </div>
        <div className='flex md:gap-5 w-full mx-auto my-2'>
            <div className='flex flex-col lg:max-w-[250px] my-2'>
                <label htmlFor="checkIn">Check In</label>
                <input type="date" className='border p-2 rounded-md' name="checkIn" id="" />
            </div>
            <div className='flex flex-col lg:max-w-[250px] my-2 ml-2'>
                <label htmlFor="checkOut">Check Out</label>
                <input type="date" className='border p-2 rounded-md' name="checkOut" id="" />
            </div>
        </div>
        <div  className='flex  flex-col w-full my-2 mx-auto'>
            <label htmlFor="">Search</label>
            <button className='w-full mx-auto'>Rate & Availabiliy</button>
        </div>
      </form>
    </div>
  )
}

export default Booking
