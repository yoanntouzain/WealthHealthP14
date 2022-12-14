import React from 'react'

import Select from 'react-select'

function SelectOption() {
  const colourOptions = [
    { value: 'Sales', label: 'Sales' },
    { value: 'Marketing', label: 'Marketing' },
    { value: 'Engineering', label: 'Engineering' },
    { value: 'Human Resources', label: 'Human Resources' },
    { value: 'Legal', label: 'Legal' },
  ]

  return (
    <>
      <Select
        className="basic-single"
        classNamePrefix="select"
        name="Department"
        options={colourOptions}
      />
    </>
  )
}
export default SelectOption
