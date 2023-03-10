import React, { useContext } from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'
import { AuthContext } from '../Contexts/AuthProvider'
import useAdmin from '../hooks/useAdmin'
import DashboardNavbar from '../pages/Shared/DashboardNavbar'


function DashboardLayout() {
  const { user } = useContext(AuthContext);
  const [isAdmin] = useAdmin(user?.email)
  return (
    <div>
      <DashboardNavbar />
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
            {
              isAdmin && <>
                <li className='hover:bg-gray-400 rounded-lg'><Link to={'/dashboard/all-user'}>All User</Link></li>
              </>
            }
          </ul>
        </div>
      </div>
    </div>
  )
}

export default DashboardLayout