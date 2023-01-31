import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import { BiMenu } from 'react-icons/bi';
import { MdClose } from 'react-icons/md';

function Navbar() {

  const navItems = [
    { name: "Home", link: "/" },
    { name: "Blogs", link: "/blogs" },
    { name: "About", link: "/about" },
    { name: "Contact", link: "/contact" },
  ]
  let activeStyle = {
    color: "orange",
  };

  const [toggle, setToggle] = useState(false);

  return (
    <nav className='bg-gray-800 sticky top-0 z-40'>
      <div className='flex justify-between bg-gray-800 text-gray-100 px-6 py-3'>
        <NavLink to="/">
          <h1 className='pb-6 md:pb-0 pl-2 md:pl-0 text-2xl font-bold uppercase'>Way To Talk</h1>
        </NavLink>
        <div className={`flex flex-col md:flex-row md:items-center left-0 w-full md:w-auto font-semibold absolute md:static  bg-gray-800 duration-700 ${toggle ? 'top-20' : 'top-[-490px]'}`}>
          {
            navItems?.map((item, i) =>
              <NavLink to={item.link} key={i}
                style={({ isActive }) => isActive ? activeStyle : undefined}
                className="px-3 hover:bg-gray-400 rounded-md hover:text-orange-400">
                <h2>{item.name}</h2>
              </NavLink>)
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
