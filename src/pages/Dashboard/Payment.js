import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react'
import { useLoaderData } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';


const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_KEY);

function Payment() {
  const booking = useLoaderData();

  return (
    <div>
      <h2 className='text-2xl font-bold'>Payment for {booking.serviceName}</h2>
      <p>Please pay <strong>${booking.price}</strong> for your appointment on {booking.appointmentDate} at {booking.slot}</p>

      <div className='w-1/2 my-12 bg-green-200 px-2 py-4'>
        <Elements stripe={stripePromise}>
          <CheckoutForm
            booking={booking}
          />
        </Elements>
      </div>
    </div>
  )
}

export default Payment