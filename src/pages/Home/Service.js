import React from 'react'
import { Link } from 'react-router-dom'
import SharedButton from '../../SharedButton/SharedButton'

function Service() {
    return (
        <section className='bg-base-200'>
            {/* <h1 className='text-2xl font-bold text-center uppercase'>My service</h1> */}
            <div className="hero">
                <div className="hero-content flex-col md:flex-row-reverse gap-6 px-6">
                    <img src="/images/sir.jpg" className="w-full md:max-w-sm rounded-lg shadow-2xl mt-[-60px]" />
                    <div>
                        <h1 className="text-2xl font-bold">Service Provides By Me!</h1>
                        <p className="py-6">Now, I live in Canada and I provide the information about Canada. I am providing some services. These are:</p>
                        <ul className='pb-3'>
                            <li>Information about Canadian University</li>
                            <li className='py-2'>Information about Canadian Visa Processing</li>
                            <li>Information about University Cost</li>
                        </ul>
                        <div>
                            <Link to='/appointment'><SharedButton>Services</SharedButton></Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Service