import React from 'react'
import Title from '../components/Title';
import { assets } from '../assets/assets';
import NewsletterBox from '../components/NewsletterBox';

const Contact = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 border-t'>
        <Title txt1={'CONTACT'} txt2={'OUR COLLEGE'}/>
      </div>
      
      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
        <img className='w-full md:max-w-[480px]' src="src/assets/uni2.png" alt="Contact" />
        
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='font-semibold text-xl text-gray-600'>Our College Address</p>
          <p className='text-gray-500'>123 University Street, <br />Campus Building, City, Country</p>
          <p className='text-gray-500'>Tel: (1) 555-0123 <br />Email: info@ourcollege.edu</p>
          
          <p className='font-semibold text-xl text-gray-600'>Admissions</p>
          <p className='text-gray-500'>Learn more about our programs and the admission process.</p>
          <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'>
            Explore Admissions
          </button>
          
          <p className='font-semibold text-xl text-gray-600'>Careers at Our College</p>
          <p className='text-gray-500'>Explore job openings and career opportunities at our college.</p>
          <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'>
            Explore Careers
          </button>
        </div>
      </div>
      
      <NewsletterBox/>
    </div>
  )
}

export default Contact
