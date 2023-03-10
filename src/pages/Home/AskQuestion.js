import React from 'react'
import { useForm } from 'react-hook-form';

function AskQuestion() {

    const {register, handleSubmit} = useForm()

    const handleQuestion = data =>{
        console.log(data);
    }

    return (
        <section className='py-12 w-full md:w-3/4 mx-auto'>
            <h1 className="text-2xl text-center font-bold px-6">Ask Your Question</h1>
            <form onSubmit={handleSubmit(handleQuestion)} className='w-full md:w-1/2 mx-auto shadow-md p-3'>
                <div className="form-control w-full">
                    <label className="label"><span className="label-text">Name</span></label>
                    <input type="text" {...register("name")} className="input input-bordered w-full" />
                </div>
                <div className="form-control w-full">
                    <label className="label"><span className="label-text">Email</span></label>
                    <input type="email" {...register("email")} className="input input-bordered w-full" />
                </div>
                <div className="form-control w-full">
                    <label className="label"><span className="label-text">Your Question</span></label>
                    <textarea {...register("question")} className="textarea textarea-bordered"></textarea>
                </div>
                <input className='btn w-full btn-accent mt-4' value="Submit" type="submit" />
            </form>
        </section>
    )
}

export default AskQuestion