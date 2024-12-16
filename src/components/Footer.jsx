import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
        <div>
            <img className='mb-5 w-32' src={assets.logo} alt="College Logo" />
            <p className='w-full md:w-2/3 text-gray-600'>
                Our college is dedicated to providing a comprehensive education that empowers students to excel in their chosen fields. We are committed to fostering a learning environment that encourages innovation, collaboration, and academic excellence.
            </p>
        </div>
        <div>
            <p className='text-xl font-medium mb-5'>
                ABOUT US
            </p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>Home</li>
                <li>Our Programs</li>
                <li>Admissions</li>
                <li>Contact Us</li>
            </ul>
        </div>
        <div>
            <p className='text-xl font-medium mb-5'>CONTACT</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>+1-800-123-4567</li>
                <li>info@ourcollege.edu</li>
                <li>123 University St., City, Country</li>
            </ul>
        </div>
      </div>
      <div>
        <hr />
        <p className='py-5 text-sm text-center'>© 2024 Our College - All Rights Reserved</p>
      </div>
    </div>
  )
}

export default Footer