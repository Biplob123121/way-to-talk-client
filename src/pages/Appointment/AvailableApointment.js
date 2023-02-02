import React, { useEffect, useState } from 'react'
import AppointDetails from './AppointDetails'
import BookingModal from './BookingModal'

function AvailableApointment() {

    const [appointments, setAppointments] = useState([])
    const [selectedAppointment, setSelectedAppointment] = useState({})

    useEffect(() => {
        fetch("services.json")
            .then(res => res.json())
            .then(data => setAppointments(data))
    }, [])

    console.log(appointments)

    return (
        <section className='bg-base-200 px-6 py-12'>
            <h1 className='text-center mb-6'>Available Apointment</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    appointments.map(appointment => <AppointDetails
                        key={appointment._id}
                        appointment={appointment}
                        setSelectedAppointment = {setSelectedAppointment}
                    ></AppointDetails>)
                }
            </div>
            <BookingModal selectedAppointment ={selectedAppointment}/>
        </section>
    )
}

export default AvailableApointment