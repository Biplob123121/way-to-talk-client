import React from 'react'

function AppointDetails({ appointment, setSelectedAppointment }) {
    const { name, slots, price } = appointment;
    return (
        <div className="card bg-base-100 shadow-xl">
            <div className="card-body text-center">
                <h2 className="text-xl font-bold">{name}</h2>
                <p>{slots.length > 0 ? `${slots[0]}` : "Try Another Day"}</p>
                <p>{slots.length > 0 ? `${slots.length} ${slots.length > 1 ? "spaces" : "space"} available` : '0 space available'}</p>
                <span className='text-sm font-semibold'>Service Charge: ${price}</span>
                <div className="card-actions justify-center">
                    <label disabled={slots.length === 0} onClick={() => setSelectedAppointment(appointment)} htmlFor="booking" className="btn btn-primary">Book Appointment</label>
                </div>
            </div>
        </div>
    )
}

export default AppointDetails