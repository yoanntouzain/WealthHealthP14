import React from 'react'
import DataTable from 'react-data-table-component'
import Paper from '@mui/material/Paper'
import SortIcon from '@mui/icons-material/ArrowDownward'
import './dataTable.css'

const column = [
  {
    name: 'city',
    selector: (row) => row.city,
    sortable: true,
  },
  {
    name: 'dateOfBirth',
    selector: (row) => row.dateOfBirth,
    sortable: true,
  },
  {
    name: 'department',
    selector: (row) => row.department,
    sortable: true,
  },
  {
    name: 'firstName',
    selector: (row) => row.firstName,
    sortable: true,
  },
  {
    name: 'lastName',
    selector: (row) => row.lastName,
    sortable: true,
  },
  {
    name: 'startDate',
    selector: (row) => row.startDate,
    sortable: true,
  },
  {
    name: 'state',
    selector: (row) => row.state,
    sortable: true,
  },
  {
    name: 'street',
    selector: (row) => row.street,
    sortable: true,
  },
  {
    name: 'zipCode',
    selector: (row) => row.zipCode,
    sortable: true,
  },
]

const data = [
  {
    dateOfBirth: '12/07/2022',
    department: 'Marketing',
    firstName: 'Yoann',
    lastName: 'Touzain',
    startDate: '12/15/2022',
    state: 'AL',
    street: '7, rue des palmiers',
    city: 'Montcorbon',
    zipCode: '45220',
  },
  {
    dateOfBirth: '12/07/2022',
    department: 'Marketing',
    firstName: 'Yoann',
    lastName: 'Touzain',
    startDate: '12/15/2022',
    state: 'AL',
    street: '7, rue des palmiers',
    city: 'Montcorbon',
    zipCode: '45220',
  },
]

const isIndeterminate = (indeterminate) => indeterminate
const selectableRowsComponentProps = { indeterminate: isIndeterminate }

function DataTables() {
  localStorage.setItem('data', JSON.stringify(data))
  let datas = JSON.parse(localStorage.getItem('data'))
  console.log(localStorage)
  return (
    <div className="App">
      <Paper>
        <DataTable
          columns={column}
          data={datas}
          defaultSortField="title"
          sortIcon={<SortIcon />}
          pagination
          selectableRowsComponentProps={selectableRowsComponentProps}
        />
      </Paper>
    </div>
  )
}

export default DataTables
