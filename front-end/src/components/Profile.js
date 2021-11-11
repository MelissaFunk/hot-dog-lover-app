import { useState } from 'react'

function Profile({ currentUser }) {
  const [updatedUser, setUpdatedUser] = useState(currentUser)
  const [clicked, setClicked] = useState(false)

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
    .then(user => {
      setUpdatedUser(user)
      setClicked(false)
    })
    e.target.reset()
  }

  const onClick = () => {
    setClicked(!clicked)
  }

  const changeInput = (e) => {
    setUpdatedUser({
      ...updatedUser,
      [e.target.name]: e.target.value
  })
  }
  
  return(
    <div>
      <h1>My Profile</h1>
      {clicked ?
      <form onSubmit={e => handleEdit(e)}>
        <label>Name: </label>
        <input type="text" name="name" value={updatedUser.name} onChange={changeInput}/>
        <label>Username: </label>
        <input type="text" name="username" value={updatedUser.username} onChange={changeInput}/>
        <label>Password: </label>
        <input type="password" name="password" value={updatedUser.password} onChange={changeInput}/>
        <button>Save</button>
      </form>
      : 
      <div>
        <button onClick={onClick}>Edit Profile</button>
        <label>Name: {updatedUser.name}</label>
        <label>Username: {updatedUser.username}</label>
        <label>Password: ******</label>
      </div>
      }
    </div>
  )
}

export default Profile