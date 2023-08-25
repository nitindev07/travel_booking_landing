import React from 'react'

const Hero = () => {
  return (
    <div className='h-[90vh] w-full'>
      <img src="https://images.unsplash.com/photo-1505228395891-9a51e7e86bf6?ixlib=rb-4.0.36ixid-moM" className='w-full h-full object-cover' alt="/" />
      <div className='max-w-[1140px] m-auto'>
      <div className='absolute top-[40%]  md:-[50%]  flex flex-col max-w-[600px] text-white p-4'>
        <h1 className='font-bold text-3xl' >Find Your Special Trip</h1>
        <h2 className='text-4xl  italic py-4'>With Company</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi a magni eius illo facilis numquam nam velit iure, consectetur placeat delectus, labore, ea aliquam corporis enim dolorem exercitationem. Quas, repellat.</p>
      </div>
      </div>
    </div>
  )
}

export default Hero
