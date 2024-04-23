import React, { useEffect, useState } from 'react'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import { getEvents } from '../API'
const localizer = momentLocalizer(moment)

function CalendarComponent() {
  const [myEventsList, setMyEventsList] = useState([])
  useEffect(() => {
    const fetchEvents = async () => {
      const response = await getEvents()
      if (response.success){
        setMyEventsList(response.msg)
      }
    }
    fetchEvents()
  },[])

  return (
    <div className='calendar-container'>
      <Calendar className='calendar'
        localizer={localizer}
        events={myEventsList}
        startAccessor="start"
        endAccessor="end"
      />
    </div>
  )
}

export default CalendarComponent