import React from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'
import Navbar from '../pages/Shared/Navbar'

function DashboardLayout() {
  return (
    <div>
      <Navbar></Navbar>
      <div className="drawer drawer-mobile bg-base-200">
        <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content p-4">
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-52 text-base-100 bg-gray-600">
            <li className='hover:bg-gray-400 rounded-lg'><Link to={'/dashboard'}>My Appointment</Link></li>
            <li className='hover:bg-gray-400 rounded-lg'><Link to={'/dashboard/review'}>Review</Link></li>
            <li className='hover:bg-gray-400 rounded-lg'><Link to={'/dashboard/all-user'}>All User</Link></li>
          </ul>

        </div>
      </div>
    </div>
  )
}

export default DashboardLayout