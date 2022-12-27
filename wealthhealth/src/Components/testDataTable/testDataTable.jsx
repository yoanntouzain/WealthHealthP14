//import React, { useState } from 'react'
//
//import DataTable from 'react-data-table-component'
////
//// const columns = [
////   {
////     name: 'Title',
////     selector: (row) => row.title,
////     sortable: true,
////   },
////   {
////     name: 'Year',
////     selector: (row) => row.year,
////     sortable: true,
////   },
//// ]
////
//const data = [
//  {
//    id: 1,
//    title: 'Beetlejuice',
//    year: '1988',
//  },
//  {
//    id: 2,
//    title: 'Ghostbusters',
//    year: '1984',
//  },
//  {
//    id: 3,
//    title: 'jungle',
//    year: '1995',
//  },
//  {
//    id: 4,
//    title: 'zebulon',
//    year: '1963',
//  },
//]
////
//// function MyComponent() {
////   return <DataTable columns={columns} data={data} />
//// }
////
//// export default MyComponent
//
//
//function MyComponent() {
//  const [filterText, setFilterText] = useState('')
//  const [resetPaginationToggle, setResetPaginationToggle] = useState(false)
//  const filteredItems = data.filter(
//    (item) =>
//      item.name && item.name.toLowerCase().includes(filterText.toLowerCase())
//  )
//
//  const subHeaderComponentMemo = React.useMemo(() => {
//    const handleClear = () => {
//      if (filterText) {
//        setResetPaginationToggle(!resetPaginationToggle)
//        setFilterText('')
//      }
//    }
//
//    return (
//      <FilterComponent
//        onFilter={(e) => setFilterText(e.target.value)}
//        onClear={handleClear}
//        filterText={filterText}
//      />
//    )
//  }, [filterText, resetPaginationToggle])
//
//  return (
//    <DataTable
//      title="Contact List"
//      columns={columns}
//      data={filteredItems}
//      pagination
//      paginationResetDefaultPage={resetPaginationToggle} // optionally, a hook to reset pagination to page 1
//      subHeader
//      subHeaderComponent={subHeaderComponentMemo}
//      selectableRows
//      persistTableHead
//    />
//  )
//}
//
//export default MyComponent
//
