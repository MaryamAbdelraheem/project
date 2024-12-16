import React from 'react'
import { assets } from '../assets/assets'

const Hero = () => {
  return (
    <div className='flex flex-col sm:flex-row  '>
        {/* hero left side */}
        <div className='w-full flex items-center justify-center py-10 sm:py-0'>
            <div className='text-[#414141]'>
                <div className='flex items-center gap-2'>
                    <p className='font-medium text-sm md:text-base'>WELCOME TO</p>
                    <p className='w-8 md:w-11 h-[1px] bg-[#414141]'></p>
                </div>

                <h1 className='text-[#7bb6de] prata-regular text-xl sm:py-3 lg:text-5xl leading-relaxed'>COMPUTERS&INFORMATION SCIENCE</h1>
                
                <div className='flex items-center justify-end gap-2'>
                    <p className='w-8 md:w-11 h-[1px] bg-[#414141]'></p>
                    <p className='font-semibold text-sm md:text-base'>WEBSITE</p>
                </div>
            </div>
        </div>
        {/* hero right side */}
        {/*<img className='w-full sm:w-1/2' src={assets.hero_img} alt="" />*/}
    </div>
    
  )
}

export default Hero
