import React from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import './picker.css'

function Picker(props) {
  return (
    <div style={{ display: 'flex' }}>
      <Calendar
        className={props.attribut}
        value={props.date}
        onChange={props.change}
      />
    </div>
  )
}
export default Picker
