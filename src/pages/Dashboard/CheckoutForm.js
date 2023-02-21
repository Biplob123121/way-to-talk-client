import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react'

function CheckoutForm({ booking }) {

    const [cardError, setCardError] = useState('');
    const [success, setSuccess] = useState('');
    const [processing, setProcessing] = useState(false);
    const [transactionId, setTransactionId] = useState('');
    const [clientSecret, setClientSecret] = useState("");
    const stripe = useStripe();
    const elements = useElements();

    const { price, client, email } = booking;

    useEffect(() => {
        fetch("http://localhost:4000/create-payment-intent", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify({ price }),
        })
            .then((res) => res.json())
            .then((data) => setClientSecret(data.clientSecret));
    }, []);

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        if (card === null) {
            return;
        }
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            setCardError(error.message)
        } else {
            setCardError('')
        }

        setSuccess('')
        setProcessing(true)
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: client,
                        email: email
                    },
                },
            },
        );


        if (confirmError) {
            setCardError(confirmError.message);
            return;
        }
        if (paymentIntent.status === "succeeded") {
            const paymentDetails = {
                transactionId: paymentIntent.id,
                email: email,
                price: price
            }
            fetch('http://localhost:4000/api/payments', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                },
                body: JSON.stringify(paymentDetails)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.acknowledged === true) {
                        updateBooking(booking._id);
                        setTransactionId(paymentIntent.id);
                    }
                })
        }
        setProcessing(false)
    }

    const updateBooking = id => {
        fetch(`http://localhost:4000/api/bookings/${id}`, {
            method: 'PUT',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.modified) {
                    setSuccess("Congratz, Your payment successfully done.");
                }
            })
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className='btn btn-primary btn-sm mt-4' type="submit" disabled={!stripe || !clientSecret || processing}>
                    Pay now
                </button>
            </form>
            <p className='text-red-500 py-4'>{cardError}</p>
            {
                success && <div>
                    <p>{success}</p>
                    <p>Your Transaction id: <span className='font-bold'>{transactionId}</span></p>
                </div>
            }
        </>
    )
}

export default CheckoutForm