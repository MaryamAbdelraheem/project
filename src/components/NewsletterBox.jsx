import React from 'react'

const NewsletterBox = () => {
    const onSubmitHandler = (event) => {
        event.preventDefault();
    }
  return (
    <div className='text-center'>
      <p className='text-2xl font-medium text-gray-800'>SUBSCRIBE</p>
      <p className='text-gray-400 mt-3'>Subscribe with your university email to receive notifications about our events, activities, and important updates. Stay connected and informed.</p>
      <form onSubmit={onSubmitHandler} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3'>
        <input className='w-full sm:flex-1 outline-none' type="email" placeholder='Enter your email' required/>
        <button className='bg-black text-white text-xs px-10 p-4' type='submit'>SUBSICRIBE</button>
      </form>
    </div>
  )
}

export default NewsletterBox
