import React from 'react'
import DataTable from 'react-data-table-component'
import Paper from '@mui/material/Paper'
import SortIcon from '@mui/icons-material/ArrowDownward'
import './dataTable.css'

const column = [
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
    name: 'department',
    selector: (row) => row.department,
    sortable: true,
  },
  {
    name: 'dateOfBirth',
    selector: (row) => row.dateOfBirth,
    sortable: true,
  },
  {
    name: 'street',
    selector: (row) => row.street,
    sortable: true,
  },
  {
    name: 'city',
    selector: (row) => row.city,
    sortable: true,
  },
  {
    name: 'state',
    selector: (row) => row.state,
    sortable: true,
  },
  {
    name: 'zipCode',
    selector: (row) => row.zipCode,
    sortable: true,
  },
]
let datas = ''

const isIndeterminate = (indeterminate) => indeterminate
const selectableRowsComponentProps = { indeterminate: isIndeterminate }

function DataTables() {
  if (localStorage.length !== 0) {
    datas = JSON.parse(localStorage.getItem('datas'))
  }
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
