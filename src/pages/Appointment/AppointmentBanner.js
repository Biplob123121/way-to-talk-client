import { format } from 'date-fns'
import React, { useState } from 'react'
import { DayPicker } from 'react-day-picker'

function AppointmentBanner() {
    const [selected, setSelected] = useState(new Date())
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
                        <p>Your selected Date: {format(selected, "PP")}</p>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default AppointmentBanner