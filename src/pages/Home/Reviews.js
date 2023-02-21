import { useQuery } from '@tanstack/react-query'
import React from 'react'

function Reviews() {

    const { data: reviews = [] } = useQuery({
        queryKey: ['reviews'],
        queryFn: async () => {
            const res = await fetch('http://localhost:4000/api/reviews');
            const data = await res.json();
            return data;
        }
    })
    return (
        <section className='px-6'>
            <h1 className="text-3xl font-bold px-4">Client Feedback</h1>
            <div className="carousel carousel-end space-x-4 p-6 rounded-box">
                {
                    reviews.map(review =>
                        <div key={review._id} className="carousel-item">
                            <div className="card w-96 bg-base-100 shadow-xl">
                                <div className="card-body">
                                    <div className="avatar">
                                        <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                            <img src={review.avatar} />
                                        </div>
                                    </div>
                                    <h2 className="card-title">Name: {review.name}</h2>
                                    <p>{review.review}</p>
                                </div>
                            </div>
                        </div>)
                }
            </div>
        </section>
    )
}

export default Reviews