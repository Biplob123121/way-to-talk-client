import React from 'react'

function Service() {
    return (
        <section className='bg-base-200'>
            {/* <h1 className='text-2xl font-bold text-center uppercase'>My service</h1> */}
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row-reverse gap-6 px-6">
                    <img src="/images/sir.jpg" className="w-full md:max-w-sm rounded-lg shadow-2xl mt-[-60px]" />
                    <div>
                        <h1 className="text-3xl font-bold">Service Provides By Me!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Service