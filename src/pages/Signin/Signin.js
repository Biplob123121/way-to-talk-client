import React, { useContext, useState } from 'react'
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';
import useToken from '../../hooks/useToken';

function Signin() {

  const { register, handleSubmit } = useForm();
  const [loginErr, setLoginErr] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [token] = useToken(userEmail);
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || '/'

  if (token) {
    navigate(from, { replace: true });
  }

  const { signIn } = useContext(AuthContext);

  const handleSignin = data => {
    setLoginErr('')
    signIn(data.email, data.password)
      .then(result => {
        const user = result.user;
        setUserEmail(data.email);
      })
      .catch(error => setLoginErr(error.message))

  }

  return (
    <div className='h-screen flex justify-center items-center bg-base-200'>
      <div className='w-96 p-6 shadow-2xl'>
        <h2 className='text-2xl text-center font-semibold'>Sign In</h2>
        <form onSubmit={handleSubmit(handleSignin)}>
          <div className="form-control w-full">
            <label className="label"><span className="label-text">Email</span></label>
            <input type="email" {...register("email")} className="input input-bordered w-full" />
          </div>
          <div className="form-control w-full">
            <label className="label"><span className="label-text">Password</span></label>
            <input type="password" {...register("password")} className="input input-bordered w-full" />
            <label className="label"><span className="label-text">Forget Password?</span></label>
          </div>
          <input className='btn w-full btn-accent mt-4' value="Submit" type="submit" />
        </form>
        <p className='text-sm mt-2'>Don't have an account? <Link to={'/signup'} className="text-blue-400">Create an account</Link></p>
        <div className="divider">OR</div>
        <button className='btn btn-outline w-full'>Continue With Google</button>
      </div>
    </div>
  )
}

export default Signin