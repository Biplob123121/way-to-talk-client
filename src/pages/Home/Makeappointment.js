import React from 'react'
import { Link } from 'react-router-dom'
import SharedButton from '../../SharedButton/SharedButton'

function Makeappointment() {
    return (
        <section className='bg-base-200 py-16'>
            <div className="hero">
                <div className="hero-content flex-col md:flex-row gap-6 px-6">
                    <img src="/images/appointment.jpg" className="w-full md:max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <span className='text-sm text-blue-500 font-bold'>Appointment</span>
                        <h1 className='text-2xl font-bold'>Make an appointment Today!</h1>
                        <p className="py-6">We are ready to help you. If you want to know any information, please make an appointment today. After appointment, we will send you a meet up link and you can join at the appointmenting time. We will give you all information, what you want to know.</p>
                        <Link to={"/appointment"}><SharedButton>Appointment</SharedButton></Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Makeappointment