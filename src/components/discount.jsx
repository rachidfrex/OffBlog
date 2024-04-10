import React from 'react'
import discount from '../assets/images/discount.jpg'

function Discount() {
  return (
    <div 
    className=' grid grid-cols-1 lg:grid-cols-2 items-center px-20 mt-20 gap-9 w-full '
    >
       <div className='flex flex-col  items-center   '>
            <h1
            className='text-7xl font-semibold text-black leading-tight text-center min-w-[400px] '
            
            >Get 50% off on your first products</h1>
            <button
            className='bg-black text-white text-lg px-5  py-2  w-32 rounded-md  transition duration-500 ease-in-out mt-10'
            
            >
                Shop Now
            </button>
        </div>
        <div>
            <img src={discount} alt="discount" className=" object-FILL rounded-lg " />

        </div>
       

    </div>
  )
}

export default Discount