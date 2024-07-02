import React, { useState } from 'react'

const Contact = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState("");

  function validateForm() {
    const errors = {};
    if (!name) {
      errors.name = "Name is required";
    }
    if (!email) {
      errors.email = "Email is required";
    }
    else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Email is invalid";
    }

    if(!subject){
      errors.subject = "Subjet is required";
    }
    if(!message){
      errors.message = "Please write a message";
    }
    else if(message.length < 4){
      errors.message = "Message is too short";
    }
    return errors;
  }

  let handleSubmit = (e) => {
    e.preventDefault();
    const validateErrors = validateForm();
    if(Object.keys(validateErrors).length > 0){
      setErrors(validateErrors);
    }
    else{
      console.log("Form submitted");
    }
  }
  return (
    <div className='container mx-auto my-4 px-4'>
      <h1 className="text-lg font-bold">Contact us</h1>
      <form action="" onSubmit={handleSubmit} className='flex flex-col'>
        <label htmlFor="name" className='mt-4'>Name:</label>
        <input onChange={(e) => setName(e.target.value)} type="text" name='name' className='border-2 border-slate-300 px-2 py-2 rounded-md mt-2' />
        <p className='text-red-600 text-sm pt-2'>{errors.name}</p>

        <label htmlFor="email" className='mt-4'>Email:</label>
        <input onChange={(e) => setEmail(e.target.value)} type="email" name='email' className='border-2 border-slate-300 px-2 py-2 rounded-md mt-2' />
        <p className='text-red-600 text-sm pt-2'>{errors.email}</p>
        
        <label htmlFor="subject" className='mt-4'>Subject: </label>
        <select onChange={(e) => setSubject(e.target.value)} name="subject" className='border-2 border-slate-300 px-2 py-2 rounded-md mt-2'>
          <option value="">Select a subject</option>
          <option value="feedback">Feedback</option>
          <option value="suggestion">Suggestion</option>
          <option value="query">Query</option>
          <option value="complaint">Complaint</option>
        </select>
        <p className='text-red-600 text-sm pt-2'>{errors.subject}</p>
        
        <label htmlFor="message" className='mt-4'>Your message:</label>
        <textarea onChange={(e) => setMessage(e.target.value)} name="message" className='border-2 border-slate-300 px-2 py-2 rounded-md mt-2'></textarea>
        <p className='text-red-600 text-sm pt-2'>{errors.message}</p>
        <button type='submit' className='px-10 py-2 bg-orange-500 w-fit text-white mx-auto mt-4 rounded-md hover:bg-orange-700'>Send</button>
      </form>
    </div>
  )
}

export default Contact
