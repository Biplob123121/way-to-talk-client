import React from 'react'

function AppointDetails({ appointment, setSelectedAppointment }) {
    const {name, slots} = appointment;
    return (
        <div className="card bg-base-100 shadow-xl">
            <div className="card-body text-center">
                <h2 className="text-xl font-bold">{name}</h2>
                <p>{slots[0]}</p>
                <p>{slots.length} spaces available</p>
                <div className="card-actions justify-center">
                    <label onClick={() =>setSelectedAppointment(appointment)} htmlFor="booking" className="btn btn-primary">Book Appointment</label>
                </div>
            </div>
        </div>
    )
}

export default AppointDetails