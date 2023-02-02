import { format } from 'date-fns'
import React, { useState } from 'react'
import { DayPicker } from 'react-day-picker'

function AppointmentBanner({selected, setSelected}) {
    
    return (
        <header>
            <div className="hero bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse gap-16">
                    <img src="/images/appointBanner.jpg" className=" w-full md:max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <DayPicker
                            mode='single'
                            selected={selected}
                            onSelect={setSelected}
                        ></DayPicker>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default AppointmentBanner