import React from 'react'
import { Link } from 'react-router-dom'
import DataTables from '../../Components/DataTable/DataTable'
import './employee-list.css'

function EmployeeList() {
  return (
    <main className="container-employee-list">
      <div id="employee-div" className="container">
        <h1>Current Employees</h1>
        <DataTables />
        <Link to="/">Home</Link>
      </div>
    </main>
  )
}

export default EmployeeList
