import React from 'react'

const Contact = () => {
  return (
    <div className='container mx-auto my-4'>
      <h1 className="text-lg font-bold">Contact us</h1>
      <form action="" className='flex flex-col'>
        <label htmlFor="name" className='mt-4'>Name:</label>
        <input type="text" name='name' className='border-2 border-slate-300 px-2 py-2 rounded-md mt-2'/>
        <label htmlFor="email" className='mt-4'>Email:</label>
        <input type="email" name='email' className='border-2 border-slate-300 px-2 py-2 rounded-md mt-2'/>
        <label htmlFor="message" className='mt-4'>Your message:</label>
        <textarea name="message" className='border-2 border-slate-300 px-2 py-2 rounded-md mt-2'></textarea>
        <button className='px-10 py-2 bg-orange-500 w-fit text-white mx-auto mt-4 rounded-md hover:bg-orange-700'>Send</button>
      </form>
    </div>
  )
}

export default Contact
