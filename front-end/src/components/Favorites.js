function Favorites({ currentUser }) {

  return(
    <div>
      <h1>Favorites</h1>
      <p>{currentUser.name}</p>
    </div>
  )
}

export default Favorites