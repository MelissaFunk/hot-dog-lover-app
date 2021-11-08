function Profile({ currentUser, setCurrentUser }) {

  function handleEdit(e) {
    e.preventDefault()

    fetch(`/users/${currentUser.id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: e.target.name.value })
    })
    .then(res => res.json())
    .then(setCurrentUser)
  }

  return(
    <div>
      <h1>My Profile</h1>
      <form onSubmit={handleEdit}>
        <label>Name: {currentUser.name} </label>
        <input type="text" name="name"/>
        <button>Update Name</button>
      </form>
    </div>
  )
}

export default Profile