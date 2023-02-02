import React from 'react'
import Navbar from '../Shared/Navbar'
import Header from './Header'
import Service from './Service'
import Footer from '../Shared/Footer'
import Makeappointment from './Makeappointment'

export default function Home() {
  return (
    <div>
        <Header />
        <Service />
        <Makeappointment />
        <Footer />
    </div>
  )
}
