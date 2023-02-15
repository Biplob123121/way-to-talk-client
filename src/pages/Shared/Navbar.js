import React, { useContext, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import { BiMenu } from 'react-icons/bi';
import { MdClose } from 'react-icons/md';
import { AuthContext } from '../../Contexts/AuthProvider';

function Navbar() {

  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate()

  let activeStyle = {
    color: "orange",
  };

  const handleSignOut = () => {
    logOut()
      .then(() => { navigate('/') })
      .catch(error => console.log(error));
  }

  const [toggle, setToggle] = useState(false);

  return (
    <nav className='bg-gray-800 sticky top-0 z-40'>
      <div className='flex justify-between bg-gray-800 text-gray-100 px-6 py-3'>
        <div className='flex justify-center items-center pb-6 md:pb-0 pl-2 md:pl-0'>
          <label htmlFor="dashboard-drawer" className="cursor-pointer lg:hidden"><BiMenu size={26} /></label>
          <NavLink to="/">
            <h1 className='ml-2 text-2xl font-bold uppercase'>Way To Talk</h1>
          </NavLink>
        </div>
        <div className={`flex flex-col md:flex-row md:items-center left-0 w-full md:w-auto font-semibold absolute md:static  bg-gray-800 duration-700 ${toggle ? 'top-20' : 'top-[-490px]'}`} onClick={() => setToggle(!toggle)}>
          <NavLink to='/'
            className="px-3 py-1 hover:bg-gray-400 rounded-md hover:text-orange-400"
            style={({ isActive }) => isActive ? activeStyle : undefined}>Home</NavLink>

          <NavLink to='/appointment'
            className="px-3 py-1 hover:bg-gray-400 rounded-md hover:text-orange-400"
            style={({ isActive }) => isActive ? activeStyle : undefined}>Appointment</NavLink>

          <NavLink to='/about'
            className="px-3 py-1 hover:bg-gray-400 rounded-md hover:text-orange-400"
            style={({ isActive }) => isActive ? activeStyle : undefined}>About</NavLink>

          <NavLink to='/contact'
            className="px-3 py-1 hover:bg-gray-400 rounded-md hover:text-orange-400"
            style={({ isActive }) => isActive ? activeStyle : undefined}>Contact</NavLink>
          {
            user?.uid ? <>
              <NavLink to='/dashboard'
                className="px-3 py-1 hover:bg-gray-400 rounded-md hover:text-orange-400"
                style={({ isActive }) => isActive ? activeStyle : undefined}>Dashboard</NavLink>
              <button onClick={handleSignOut}>sign Out</button>
            </>
              :
              <NavLink to={'/signin'} className="px-3 py-1 pb-4 md:pb-0 hover:bg-gray-400 rounded-md hover:text-orange-400"
                style={({ isActive }) => isActive ? activeStyle : undefined}>sign In</NavLink>
          }
        </div>
        <div onClick={() => setToggle(!toggle)} className='md:hidden cursor-pointer absolute top-4 right-4'>
          {
            toggle ? <MdClose size={26} /> : <BiMenu size={26} />
          }
        </div>
      </div>
    </nav>
  )
}

export default Navbar
