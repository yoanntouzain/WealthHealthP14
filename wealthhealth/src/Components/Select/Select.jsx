import React from 'react'

import Select from 'react-select'

function SelectOption(props) {
  return (
    <Select
      className="basic-single"
      classNamePrefix="select"
      id={props.id}
      name={props.name}
      options={props.options}
      required={true}
    />
  )
}
export default SelectOption
