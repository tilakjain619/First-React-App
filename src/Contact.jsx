import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
const Contact = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch
  } = useForm()

  const onSubmit = (data) => console.log(data);


  return (
    <div className='container mx-auto my-4 px-4'>
      <h1 className="text-lg font-bold">Contact us</h1>
      <form action="" onSubmit={handleSubmit(onSubmit)} className='flex flex-col'>
        <label htmlFor="name" className='mt-4'>Name:</label>
        <input {...register("name", { required: "Name is required" })} type="text" name='name' className='border-2 border-slate-300 px-2 py-2 rounded-md mt-2' />
        {errors.name && <p className='text-red-600 text-sm pt-2'>{errors.name.message}</p>}

        <label htmlFor="email" className='mt-4'>Email:</label>
        <input {...register("email", { required: "Email is required", pattern: { value: /\S+@\S+\.\S+/, message: "Email is invalid" } })} type="email" name='email' className='border-2 border-slate-300 px-2 py-2 rounded-md mt-2' />
        {errors.email && <p className='text-red-600 text-sm pt-2'>{errors.email.message}</p>}

        <label htmlFor="subject" className='mt-4'>Subject: </label>
        <select {...register("subject", { required: "Select a subject" })} name="subject" className='border-2 border-slate-300 px-2 py-2 rounded-md mt-2'>
          <option value="">Select a subject</option>
          <option value="feedback">Feedback</option>
          <option value="suggestion">Suggestion</option>
          <option value="query">Query</option>
          <option value="complaint">Complaint</option>
        </select>
        {errors.subject && <p className='text-red-600 text-sm pt-2'>{errors.subject.message}</p>}

        <label htmlFor="userMessage" className='mt-4'>Your message:</label>
        <textarea {...register("userMessage", { required: "Message is empty", minLength: {value: 5, message: "Message is too short"}})} name="userMessage" className='border-2 border-slate-300 px-2 py-2 rounded-md mt-2'></textarea>
        {errors.userMessage && <p className='text-red-600 text-sm pt-2'>{errors.userMessage.message}</p>}
        <button type='submit' className='px-10 py-2 bg-orange-500 w-fit text-white mx-auto mt-4 rounded-md hover:bg-orange-700'>Send</button>
      </form>
    </div>
  )
}

export default Contact;