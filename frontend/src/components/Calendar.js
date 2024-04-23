import React from 'react'
import { Calendar, dateFnsLocalizer } from 'react-big-calendar'
import format from 'date-fns/format'
import parse from 'date-fns/parse'
import startOfWeek from 'date-fns/startOfWeek'
import getDay from 'date-fns/getDay'
import enUS from 'date-fns/locale/en-US'

const locales = {
  'en-US': enUS,
}

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
})

function CalendarComponent() {
  const myEventsList = [
    {
      id: 1,
      title: 'Event 1',
      start: new Date(2024, 3, 25, 10, 0), // April 25, 2024, 10:00 AM
      end: new Date(2024, 3, 25, 12, 0), // April 25, 2024, 12:00 PM
    },
    {
      id: 2,
      title: 'Event 2',
      start: new Date(2024, 3, 26, 14, 0), // April 26, 2024, 2:00 PM
      end: new Date(2024, 3, 26, 16, 0), // April 26, 2024, 4:00 PM
    },
  ];

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