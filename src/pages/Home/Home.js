import React from 'react'
import Navbar from '../Shared/Navbar'
import Header from './Header'
import Service from './Service'
import Footer from '../Shared/Footer'
import Makeappointment from './Makeappointment'
import Reviews from './Reviews'

export default function Home() {
  return (
    <div className='bg-base-200'>
        <Header />
        <Service />
        <Makeappointment />
        <Reviews />
    </div>
  )
}
