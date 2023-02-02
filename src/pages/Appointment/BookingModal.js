import React from 'react'

function BookingModal({ selectedAppointment }) {
    const {name} = selectedAppointment;
    return (
        <div>
            <input type="checkbox" id="booking" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{name}</h3>
                    <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                </div>
            </div>
        </div>
    )
}

export default BookingModal