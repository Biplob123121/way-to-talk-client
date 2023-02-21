import React from 'react'
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

function Review() {

  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate()

  const handleReview = data => {
    const { name, email, review } = data;
    const newReview = {
      name,
      email,
      review
    }

    fetch('http://localhost:4000/api/reviews', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        authorization: `bearer ${localStorage.getItem('accessToken')}`
      },
      body: JSON.stringify(newReview)
    })
      .then(res => res.json())
      .then(data => {
        if (data.acknowledged) {
          toast.success('Thanks for your valuable feedback.')
          reset()
          navigate('/')
        }
      })
  }

  return (
    <div>
      <h2 className='text-2xl font-bold my-4 text-center'>Please, Give Your Opinion:</h2>
      <form onSubmit={handleSubmit(handleReview)} className='w-full md:w-1/2 mx-auto shadow-md p-3'>
        <div className="form-control w-full">
          <label className="label"><span className="label-text">Name</span></label>
          <input type="text" {...register("name")} className="input input-bordered w-full" />
        </div>
        <div className="form-control w-full">
          <label className="label"><span className="label-text">Email</span></label>
          <input type="email" {...register("email")} className="input input-bordered w-full" />
        </div>
        <div className="form-control w-full">
          <label className="label"><span className="label-text">Your Review</span></label>
          <textarea {...register("review")} className="textarea textarea-bordered"></textarea>
        </div>
        <input className='btn w-full btn-accent mt-4' value="Submit" type="submit" />
      </form>
    </div>
  )
}

export default Review