import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Picker from '../../Components/Picker/Picker'
import Select from '../../Components/Select/Select'
import './home.css'
import { Modals } from 'modal-component-wealth-health-p14-v4'

let array = []
const departmentOptions = [
  { value: 'Sales', label: 'Sales' },
  { value: 'Marketing', label: 'Marketing' },
  { value: 'Engineering', label: 'Engineering' },
  { value: 'Human Resources', label: 'Human Resources' },
  { value: 'Legal', label: 'Legal' },
]

const stateOptions = [
  { value: 'Alabama', label: 'Alabama' },
  { value: 'Alaska', label: 'Alaska' },
  { value: 'American Samoa', label: 'American Samoa' },
  { value: 'Arizona', label: 'Arizona' },
  { value: 'Arkansas', label: 'Arkansas' },
  { value: 'California', label: 'California' },
  { value: 'Colorado', label: 'Colorado' },
  { value: 'Connecticut', label: 'Connecticut' },
  { value: 'Delaware', label: 'Delaware' },
  { value: 'District Of Columbia', label: 'District Of Columbia' },
  {
    value: 'Federated States Of Micronesia',
    label: 'Federated States Of Micronesia',
  },
  { value: 'Florida', label: 'Florida' },
  { value: 'Georgia', label: 'Georgia' },
  { value: 'Guam', label: 'Guam' },
  { value: 'Hawaii', label: 'Hawaii' },
  { value: 'Idaho', label: 'Idaho' },
  { value: 'Illinois', label: 'Illinois' },
  { value: 'Indiana', label: 'Indiana' },
  { value: 'Iowa', label: 'Iowa' },
  { value: 'Kansas', label: 'Kansas' },
  { value: 'Kentucky', label: 'Kentucky' },
  { value: 'Louisiana', label: 'Louisiana' },
  { value: 'Maine', label: 'Maine' },
  { value: 'Marshall Islands', label: 'Marshall Islands' },
  { value: 'Maryland', label: 'Maryland' },
  { value: 'Massachusetts', label: 'Massachusetts' },
  { value: 'Michigan', label: 'Michigan' },
  { value: 'Minnesota', label: 'Minnesota' },
  { value: 'Mississippi', label: 'Mississippi' },
  { value: 'Missouri', label: 'Missouri' },
  { value: 'Montana', label: 'Montana' },
  { value: 'Nebraska', label: 'Nebraska' },
  { value: 'Nevada', label: 'Nevada' },
  { value: 'New Hampshire', label: 'New Hampshire' },
  { value: 'New Jersey', label: 'New Jersey' },
  { value: 'New Mexico', label: 'New Mexico' },
  { value: 'New York', label: 'New York' },
  { value: 'North Carolina', label: 'North Carolina' },
  { value: 'North Dakota', label: 'North Dakota' },
  { value: 'Northern Mariana Islands', label: 'Northern Mariana Islands' },
  { value: 'Ohio', label: 'Ohio' },
  { value: 'Oklahoma', label: 'Oklahoma' },
  { value: 'Oregon', label: 'Oregon' },
  { value: 'Palau', label: 'Palau' },
  { value: 'Pennsylvania', label: 'Pennsylvania' },
  { value: 'Puerto Rico', label: 'Puerto Rico' },
  { value: 'Rhode Island', label: 'Rhode Island' },
  { value: 'South Carolina', label: 'South Carolina' },
  { value: 'South Dakota', label: 'South Dakota' },
  { value: 'Tennessee', label: 'Tennessee' },
  { value: 'Texas', label: 'Texas' },
  { value: 'Utah', label: 'Utah' },
  { value: 'Vermont', label: 'Vermont' },
  { value: 'Virgin Islands', label: 'Virgin Islands' },
  { value: 'Virginia', label: 'Virginia' },
  { value: 'Washington', label: 'Washington' },
  { value: 'West Virginia', label: 'West Virginia' },
  { value: 'Wisconsin', label: 'Wisconsin' },
  { value: 'Wyoming', label: 'Wyoming' },
]

//console.log(array)
function Home() {
  const [displayModal, setDisplayModal] = useState(false)
  const [dateBirth, onChangeBirth] = useState(new Date())
  const [dateStart, onChangeStart] = useState(new Date())

  function saveForm(e) {
    e.preventDefault()
    const firstName = document.getElementById('first-name').value
    const lastName = document.getElementById('last-name').value
    const dateOfBirth = dateBirth.toLocaleDateString()
    const startDate = dateStart.toLocaleDateString()
    const street = document.getElementById('street').value
    const city = document.getElementById('city').value
    const state = document.getElementsByName('state')[0].value
    const zipCode = document.getElementById('zip-code').value
    const department = document.getElementsByName('department')[0].value
    if (localStorage.length !== 0) {
      array = []
      array.push(...JSON.parse(localStorage.getItem('datas')))
      array.push({
        firstName: firstName,
        lastName: lastName,
        dateOfBirth: dateOfBirth,
        startDate: startDate,
        street: street,
        city: city,
        state: state,
        zipCode: zipCode,
        department: department,
      })
    } else {
      array.push({
        firstName: firstName,
        lastName: lastName,
        dateOfBirth: dateOfBirth,
        startDate: startDate,
        street: street,
        city: city,
        state: state,
        zipCode: zipCode,
        department: department,
      })
    }
    //console.log(array)
    let localStorageData = localStorage.setItem('datas', JSON.stringify(array))
    displayModal ? setDisplayModal(false) : setDisplayModal(true)
    return localStorageData
  }

  function closeModal() {
    displayModal ? setDisplayModal(false) : setDisplayModal(true)
  }

  return (
    <main className="main-home">
      <div className="title">
        <h1>HRnet</h1>
      </div>
      <div className="container">
        <Link to="/testDataTable">test Data Table</Link>
        <Link to="/employee-list">View Current Employees</Link>
        <h2>Create Employee</h2>
        <form action="#" id="create-employee" onSubmit={saveForm}>
          <label htmlFor="first-name">First Name</label>
          <input type="text" id="first-name" required />

          <label htmlFor="last-name">Last Name</label>
          <input type="text" id="last-name" required />

          <label htmlFor="date-of-birth">Date of Birth</label>
          <Picker
            id="date-of-birth"
            date={dateBirth}
            change={onChangeBirth}
            required
          />

          <label htmlFor="start-date">Start Date</label>
          <Picker id="start-date" date={dateStart} change={onChangeStart} />

          <fieldset className="address">
            <legend>Address</legend>

            <label htmlFor="street">Street</label>
            <input id="street" type="text" required />

            <label htmlFor="city">City</label>
            <input id="city" type="text" required />

            <label htmlFor="state">State</label>
            <Select name="state" id="state" options={stateOptions} />

            <label htmlFor="zip-code">Zip Code</label>
            <input id="zip-code" type="number" required />
          </fieldset>

          <label htmlFor="department">Department</label>
          <Select
            name="department"
            id="department"
            options={departmentOptions}
          />
          <Modals
            buttonValue={'Save'}
            classNameModal={`${displayModal ? 'display-modal' : ''}`}
            close={closeModal}
            message={'Employee Created!'}
          />
        </form>
      </div>
    </main>
  )
}
export default Home
