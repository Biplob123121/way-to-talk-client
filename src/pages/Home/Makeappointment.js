import React from 'react'
import { Link } from 'react-router-dom'

function Makeappointment() {
    return (
        <section className='bg-base-200 py-16'>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row gap-6">
                    <img src="/images/appointment.jpg" className="w-full md:max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <span className='text-sm text-blue-500 font-bold'>Appointment</span>
                        <h1 className='text-3xl font-bold'>Make an appointment Today!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <Link to={"/appointment"}><button className="btn btn-primary">Appointment</button></Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Makeappointment