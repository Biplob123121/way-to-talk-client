import React from 'react'
import { Link } from 'react-router-dom'

function About() {
  return (
    <section>
      <div className="hero min-h-screen bg-base-200 px-6">
        <div className="hero-content flex-col lg:flex-row-reverse gap-6">
          <img src="/images/sir.jpg" className="w-full md:max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-4xl font-bold">Who I Am!</h1>
            <p className="py-6">I am Jhon Doe. I live in Canada. I am a citizen of Canada. Now, I am working here as a researcher in a Company.</p>
            <p>I am helping the Bangladeshi people to reach Canada. I can give you the information about the university, visa processing, cost information etc. I am an instructor for the unknown people.</p>
            <Link to={"/appointment"}><button className="btn btn-primary mt-6">Appointment</button></Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About