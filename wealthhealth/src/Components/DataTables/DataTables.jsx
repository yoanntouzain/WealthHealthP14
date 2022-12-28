import React from 'react'
import styled from 'styled-components'
import DataTable from 'react-data-table-component'

// const fakeUsers = [
//   {
//     firstname: 'AurÃ©lien',
//     lastname: 'Vaast',
//   },
//   {
//     firstname: 'Yoann',
//     lastname: 'Touzain',
//   },
// ]
// console.log(fakeUsers)

const fakeUsers = JSON.parse(localStorage.getItem('datas'))
console.log(fakeUsers)

const TextField = styled.input`
  height: 32px;
  width: 200px;
  border-radius: 3px;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border: 1px solid #e5e5e5;
  padding: 0 32px 0 16px;

  &:hover {
    cursor: pointer;
  }
`

const ClearButton = styled.button`
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  height: 34px;
  width: 32px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`

const FilterComponent = ({ filterText, onFilter, onClear }) => (
  <>
    <TextField
      id="search"
      type="text"
      placeholder="Filter By Name"
      aria-label="Search Input"
      value={filterText}
      onChange={onFilter}
    />
    <ClearButton type="button" onClick={onClear}>
      X
    </ClearButton>
  </>
)

const columns = [
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
function Filtering() {
  const [filterText, setFilterText] = React.useState('')
  const [resetPaginationToggle, setResetPaginationToggle] =
    React.useState(false)
  const filteredItems = fakeUsers.filter(
    (item) =>
      (item.firstName &&
        item.firstName.toLowerCase().includes(filterText.toLowerCase())) ||
      (item.lastName &&
        item.lastName.toLowerCase().includes(filterText.toLowerCase())) ||
      (item.startDate &&
        item.startDate.toLowerCase().includes(filterText.toLowerCase())) ||
      (item.department &&
        item.department.toLowerCase().includes(filterText.toLowerCase())) ||
      (item.dateOfBirth &&
        item.dateOfBirth.toLowerCase().includes(filterText.toLowerCase())) ||
      (item.street &&
        item.street.toLowerCase().includes(filterText.toLowerCase())) ||
      (item.city &&
        item.city.toLowerCase().includes(filterText.toLowerCase())) ||
      (item.state &&
        item.state.toLowerCase().includes(filterText.toLowerCase())) ||
      (item.zipCode &&
        item.zipCode.toLowerCase().includes(filterText.toLowerCase()))
  )

  const subHeaderComponentMemo = React.useMemo(() => {
    const handleClear = () => {
      if (filterText) {
        setResetPaginationToggle(!resetPaginationToggle)
        setFilterText('')
      }
    }

    return (
      <FilterComponent
        onFilter={(e) => setFilterText(e.target.value)}
        onClear={handleClear}
        filterText={filterText}
      />
    )
  }, [filterText, resetPaginationToggle])

  return (
    <DataTable
      columns={columns}
      data={filteredItems}
      pagination
      paginationResetDefaultPage={resetPaginationToggle} // optionally, a hook to reset pagination to page 1
      subHeader
      subHeaderComponent={subHeaderComponentMemo}
      persistTableHead
    />
  )
}
export default Filtering
