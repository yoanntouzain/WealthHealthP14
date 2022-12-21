import React from 'react'
import DatePicker from 'react-date-picker'
// import Calendar from 'react-calendar'
// import 'react-calendar/dist/Calendar.css'
import 'react-date-picker/dist/DatePicker.css'
import 'react-calendar/dist/Calendar.css'
import './picker.css'

function Picker(props) {
  return (
    <div style={{ display: 'flex' }}>
      <DatePicker
        calendarIcon={null}
        clearIcon={null}
        id={props.id}
        value={props.date}
        onChange={props.change}
        required={true}
        showLeadingZeros={true}
      />
    </div>
  )
}
export default Picker
