import React, { useState } from 'react'
import AppointmentBanner from './AppointmentBanner'
import AvailableApointment from './AvailableApointment'

function Appointment() {
  const [selected, setSelected] = useState(new Date())
  return (
    <div>
      <AppointmentBanner
        selected={selected}
        setSelected={setSelected}
      />
      <AvailableApointment
        selected={selected}
      />
    </div>
  )
}

export default Appointment