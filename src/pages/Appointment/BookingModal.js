import { format } from 'date-fns';
import React, { useContext } from 'react'
import { toast } from 'react-hot-toast';
import { AuthContext } from '../../Contexts/AuthProvider';

function BookingModal({ selectedAppointment, setSelectedAppointment, selected, refetch }) {
    const { name, slots, price } = selectedAppointment;
    const date = format(selected, "PP");

    const { user } = useContext(AuthContext);

    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const slot = form.slot.value;
        const phone = form.phone.value;

        const booking = {
            serviceName: selectedAppointment.name,
            appointmentDate: date,
            slot,
            client: name,
            email,
            phone,
            price: selectedAppointment.price
        }
        fetch('http://localhost:4000/api/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    setSelectedAppointment(null)
                    toast.success('Booking confirmed');
                    refetch();
                }
                else{
                    toast.error(data.msg);
                }
            })

    }
    return (
        <div>
            <input type="checkbox" id="booking" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{name}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-6'>
                        <input name='date' type="text" value={date} className="input input-bordered w-full" disabled />
                        <select name='slot' className="select select-bordered w-full">
                            {
                                slots?.map((slot, i) => <option key={i} value={slot}>{slot}</option>)
                            }
                        </select>
                        <input name='name' type="text" defaultValue={user?.displayName
                        } placeholder="Your Full Name" className="input input-bordered w-full" disabled />
                        <input name='email' type="email" defaultValue={user?.email} placeholder="Your Email" className="input input-bordered w-full" disabled />
                        <input name='phone' type="text" placeholder="Phone Number" className="input input-bordered w-full" required/>
                        <input type="submit" value="Submit" className='btn btn-accent text-gray-100 w-full' />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default BookingModal