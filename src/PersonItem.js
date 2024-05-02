import React from 'react'


function PersonItem({ id, first_name, last_name, email, gender, deletePerson }) {

  const handleClick = (id) => {
    deletePerson(id)
  }
  return (
    <div>
      <p>{first_name} - {last_name}</p>
      <p><span>{email}</span></p>
      <button onClick={() => handleClick(id)}>Delete</button>
    </div>
  )

}

export default PersonItem