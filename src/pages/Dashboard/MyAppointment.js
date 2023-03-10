import React, { useContext } from 'react'
import { useQuery } from '@tanstack/react-query'
import { AuthContext } from '../../Contexts/AuthProvider'
import Loading from '../../LoadingSpinner/Loading';
import { Link } from 'react-router-dom';
import { toast } from 'react-hot-toast';

function MyAppointment() {
    const { user } = useContext(AuthContext);
    const { data: bookings = [], isLoading, refetch } = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async () => {
            const res = await fetch(`https://way-to-talk-server.vercel.app/api/bookings?email=${user?.email}`, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            });
            const data = await res.json();
            return data;
        }
    })

    if (isLoading) {
        return <Loading />
    }
    if (bookings.length === 0) {
        return <h3 className='text-2xl font-bold'>You have No Appointment..</h3>
    }

    const handleCancelAppointment = id => {
        fetch(`https://way-to-talk-server.vercel.app/api/bookings/${id}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.message) {
                    toast.success("Appointment is cancelled..")
                    refetch();
                }
            })
    }

    return (
        <div>
            <h2 className='text-2xl font-bold mb-4'>My Appointment</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Payment</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings?.map((booking, i) =>
                                <tr className="hover" key={booking._id}>
                                    <th>{i + 1}</th>
                                    <td>{booking.serviceName}</td>
                                    <td>{booking.appointmentDate}</td>
                                    <td>{booking.slot}</td>
                                    <td>
                                        {
                                            booking.price && !booking.paid && <Link
                                                to={`/dashboard/payment/${booking._id}`}>
                                                <button className='btn btn-primary btn-sm'>Pay Now</button>
                                            </Link>
                                        }
                                        {
                                            booking.price && booking.paid && <span className='text-success'>Paid</span>
                                        }
                                    </td>
                                    <td>
                                        {
                                            booking.paid ? <p>Completed</p> : <button onClick={() => handleCancelAppointment(booking._id)} className='btn btn-sm btn-warning'>Cancel</button>
                                        }
                                    </td>
                                </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default MyAppointment