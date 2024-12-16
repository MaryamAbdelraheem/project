import React from 'react'
import { assets } from '../assets/assets'

const OurPolicy = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700'>
      <div>
        <img className='w-12 m-auto mb-5' src={assets.exchange_icon} alt="" />
        <p className='font-semibold'>Academic Resources</p>
        <p className='text-gray-400'>Access a variety of academic tools and resources to support your learning journey, including e-libraries, research databases, and study materials.</p>
      </div>
      <div>
        <img className='w-12 m-auto mb-5' src={assets.quality_icon} alt="" />
        <p className='font-semibold'>Student Support Services</p>
        <p className='text-gray-400'>We provide comprehensive support, including academic advising, counseling services, and career guidance, to help you achieve your goals.</p>
      </div>
      <div>
        <img className='w-12 m-auto mb-5' src={assets.support_img} alt="" />
        <p className='font-semibold'>Campus Events and Activities</p>
        <p className='text-gray-400'>Stay engaged with a wide range of campus events, workshops, and extracurricular activities designed to enrich your college experience.</p>
      </div>
    </div>
  )
}

export default OurPolicy
