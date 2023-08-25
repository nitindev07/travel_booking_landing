import React from 'react'

const Gallery = () => {
  return (
    <>
    <div className='px-4 py-16 max-w-[1140px] m-auto' id='gallery'>
    <h1 className='text-center font-bold m-4'>Gallery</h1>
    <div className='sm:grid grid-cols-6  '>
    <div className='my-2 sm:ml-5 sm:mx-1 mx-4 col-span-3' >
      <img src="https://images.unsplash.com/photo-1615571022219-eb45cf7faa9d?ixliberb-4.0.361xid-mo%20A3fDBBMHG98by" alt="" />
    </div>
    <div className='col-span-3'>
        <div className='grid grid-cols-2 gap-4 mx-4 py-2 '>
            <div>
            <img src="https://www.holidayhometimes.com/wp-content/uploads/2021/02/grant-durr-lQkSp1wba1Q-unsplash-1.jpg" alt="" />
            </div>
            <div>
            <img src="https://images.unsplash.com/photo-1519046904884-53103b34b206?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJlYWNofGVufDB8fDB8fHww&auto=format&fit=crop&w=1000&q=60" alt="" />
            </div>
        </div>
        <div className='grid grid-cols-2 gap-4 py-2 px-4'>
            <div>
            <img src="https://images.unsplash.com/photo-1554254464-7046778097bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80" alt="" />
            </div>
            <div>
            <img className='w-full h-[89%]' src="https://images.unsplash.com/photo-1600210492493-0946911123ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80" alt="" />
            </div>
        </div>
    </div>
    </div>
    </div>
    </>
  )
}

export default Gallery
