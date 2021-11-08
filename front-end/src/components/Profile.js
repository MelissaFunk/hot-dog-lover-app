import { useState } from 'react'

function Profile({ currentUser }) {
  const [updatedUser, setUpdatedUser] = useState(currentUser)

  function handleEdit(e) {
    e.preventDefault()

    fetch(`/users/${currentUser.id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 
        name: e.target.name.value, 
        username: e.target.username.value,
        password: e.target.password.value
      })
    })
    .then(res => res.json())
    .then(setUpdatedUser)
    e.target.reset()
  }

  return(
    <div>
      <h1>My Profile</h1>
      <form onSubmit={handleEdit}>
        <label>Name: {updatedUser.name} </label>
        <input type="text" name="name"/>
        <label>Username: {updatedUser.username} </label>
        <input type="text" name="username"/>
        <label>Password: </label>
        <input type="text" name="password"/>
        <button>Update Name</button>
      </form>
    </div>
  )
}

export default Profile