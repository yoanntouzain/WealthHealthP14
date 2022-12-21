import React, { useState } from 'react'

const data = []

function ouix() {
  const [displayModal, setDisplayModal] = useState(false)

  function saveForm() {
    const firstName = document.getElementById('first-name').value
    const lastName = document.getElementById('last-name').value
    data.push(firstName, lastName)
    displayModal ? setDisplayModal(false) : setDisplayModal(true)
  }

  function closeModal() {
    displayModal ? setDisplayModal(false) : setDisplayModal(true)
  }

  return (
    <form action="" onSubmit={saveForm}>
      <label htmlFor="email">email</label>
      <input type="email" name="email" id="email" required />
      <label htmlFor="password">password</label>
      <input type="password" name="password" id="password" required />
      <Modals
        classNameModal={`${displayModal ? 'display-modal' : ''}`}
        close={closeModal}
        message={"you're login"}
      />
    </form>
  )
}

export default ouix
