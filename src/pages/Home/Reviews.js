import React, { useState } from 'react'
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { useQuery } from '@tanstack/react-query';

SwiperCore.use([Navigation, Pagination, Autoplay]);

function Reviews() {

    const { data: reviews = [] } = useQuery({
        queryKey: ['reviews'],
        queryFn: async () => {
            const res = await fetch('https://way-to-talk-server.vercel.app/api/reviews');
            const data = await res.json();
            return data;
        }
    })

    return (
        <section className='bg-gray-200 py-6'>
            <h1 className='text-2xl font-bold text-gray-800 mb-4 text-center'>Our Client's Feedback:</h1>
            <div className="max-w-screen-lg mx-auto">
                <Swiper
                    className="my-4"
                    spaceBetween={10}
                    slidesPerView={1}
                    autoplay={{ delay: 3000 }}
                    navigation
                    pagination={{ clickable: true }}
                    breakpoints={{
                        580: {
                            slidesPerView: 1,
                            spaceBetween: 0,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 30,
                        },
                    }}
                >
                    {
                        reviews?.map(review => <SwiperSlide key={review._id} className="">
                            <div className="bg-gray-100 w-full h-64 flex justify-center items-center rounded-xl">
                                <div className='p-2'>
                                    <div className='flex flex-col justify-center items-center mb-3'>
                                        <div className="avatar mb-2">
                                            <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                                <img src={review.avatar} />
                                            </div>
                                        </div>
                                        <h2 className="text-lg font-bold text-gray-800">{review.name}</h2>
                                    </div>
                                    <div>
                                        <p>{review.review}</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>)
                    }
                </Swiper>
            </div>
        </section>
    )
}

export default Reviews