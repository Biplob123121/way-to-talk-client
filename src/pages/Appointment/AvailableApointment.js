import { useQuery } from '@tanstack/react-query'
import { format } from 'date-fns'
import React, { useState } from 'react'
import Loading from '../../LoadingSpinner/Loading'
import AppointDetails from './AppointDetails'
import BookingModal from './BookingModal'

function AvailableApointment({ selected }) {

    // const [appointments, setAppointments] = useState([])
    const [selectedAppointment, setSelectedAppointment] = useState(null)
    const date = format(selected, "PP")

    const { data: appointments = [], isLoading, refetch } = useQuery({
        queryKey: ['appointments', date],
        queryFn: async () => {
            const res = await fetch(`https://way-to-talk-server.vercel.app/api/appointments?date=${date}`);
            const data = await res.json();
            return data;
        }
    })
    // useEffect(() => {
    //     fetch("https://way-to-talk-server.vercel.app/api/appointments")
    //         .then(res => res.json())
    //         .then(data => setAppointments(data))
    // }, [])
    if(isLoading){
        return <Loading></Loading>
    }

    return (
        <section className='bg-base-200 px-6 py-12'>
            <h1 className='text-center mb-6 text-blue-500 font-bold'>Available Apointment {format(selected, "PP")}</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    appointments.map(appointment => <AppointDetails
                        key={appointment._id}
                        appointment={appointment}
                        setSelectedAppointment={setSelectedAppointment}
                    ></AppointDetails>)
                }
            </div>
            {
                selectedAppointment &&
                <BookingModal
                    selectedAppointment={selectedAppointment}
                    selected={selected}
                    refetch = {refetch}
                    setSelectedAppointment={setSelectedAppointment}
                />
            }
        </section>
    )
}

export default AvailableApointment