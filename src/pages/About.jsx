import React from 'react'
import Title from '../components/Title';
import { assets } from '../assets/assets';
import NewsletterBox from '../components/NewsletterBox';

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title txt1={'ABOUT'} txt2={'OUR COLLEGE'}/>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src="src/assets/uni.png" alt="University Building" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>Our College was founded with a deep commitment to providing world-class education in the fields of computer science, engineering, and technology. We aim to nurture the next generation of innovators, thinkers, and leaders who will make an impact on society and the world.</p>
          <p>Since our establishment, we have grown to become a leading institution that offers a wide range of programs designed to equip students with the skills they need to excel in a rapidly evolving digital world. Our curriculum is continually updated to reflect the latest advancements in technology and the needs of the industry.</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>Our mission is to provide high-quality education that empowers students to become experts in their chosen fields. We foster a culture of excellence, creativity, and critical thinking, ensuring that our graduates are well-prepared to meet the challenges of the modern world.</p>
        </div>
      </div>
      
      <div className='text-xl py-4'>
        <Title txt1={'WHY'} txt2={'CHOOSE OUR COLLEGE'}/>
      </div>
      
      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Education:</b>
          <p className='text-gray-600'>We provide an education that is not only of the highest academic standard but also prepares students for real-world challenges.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>State-of-the-art Facilities:</b>
          <p className='text-gray-600'>Our campus is equipped with modern classrooms, laboratories, and research centers that provide the perfect environment for learning and growth.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Industry Connections:</b>
          <p className='text-gray-600'>We have strong relationships with leading companies in the tech and engineering sectors, providing students with valuable internship and career opportunities.</p>
        </div>
      </div>
      
      <NewsletterBox/>
    </div>
  )
}

export default About