import React from 'react'
import Navbar from '../Shared/Navbar'
import Apointment from './Apointment'
import Header from './Header'
import Service from './Service'
import Footer from '../Shared/Footer'

export default function Home() {
  return (
    <div>
        <Navbar />
        <Header />
        <Service />
        <Apointment />
        <Footer />
    </div>
  )
}
