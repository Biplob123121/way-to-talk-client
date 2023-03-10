import React from 'react'
import { useForm } from 'react-hook-form';

function Contact() {
  const { register, handleSubmit } = useForm();


  const handleMessage = data => {
    console.log(data)
  }


  return (
    <section className='p-2 text-gray-600 mx-6'>
      <h1 className='text-2xl font-bold text-gray-700 mb-4'>Contact Us</h1>
      <hr />
      <div className='grid grid-cols-1 md:grid-cols-2 gap-16'>
        <form onSubmit={handleSubmit(handleMessage)} className="shadow-md p-2 mt-2">
          <div className="form-control w-full">
            <label className="label"><span className="label-text">Your Name</span></label>
            <input type="text" {...register("name")} className="input input-bordered w-full" />
          </div>
          <div className="form-control w-full">
            <label className="label"><span className="label-text">Your Email</span></label>
            <input type="email" {...register("email")} className="input input-bordered w-full" />
          </div>
          <div className="form-control w-full">
            <label className="label"><span className="label-text">Subject</span></label>
            <input type="text" {...register("subject")} className="input input-bordered w-full" />
          </div>
          <div className="form-control w-full">
            <label className="label"><span className="label-text">Your Message</span></label>
            <textarea type="text" {...register("msg")} className="textarea textarea-bordered w-full" />
          </div>
          <input className='btn w-full md:w-1/2 btn-accent mt-4' value="Send Message" type="submit" />
        </form>
        <div className='mt-8 text-info'>
          <h3 className='text-md'><span className='font-bold'>Active Time:</span> 9 am to 11pm</h3>
          <h3 className='text-md mt-2'><span className='font-bold'>Phone :</span>+8801750659659</h3>
          <h3 className='text-md mt-2'><span className='font-bold'>Whatsapp:</span>+8801750659659</h3>
          <h3 className='text-md mt-2'><span className='font-bold'>Whatsapp:</span>+8801750659659</h3>
          <h3 className='text-md my-2'><span className='font-bold'>Email:</span>biplobkb123@gmail.com</h3>
          <p>If you have any questions, please contact us.</p>
        </div>
      </div>
    </section>
  )
}

export default Contact