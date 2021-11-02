import { useHistory } from "react-router-dom"

function Logout({ setCurrentUser }) {
   const history = useHistory()

  function handleLogout() {
    fetch("/logout", {
        method: "DELETE"
    })
    .then(resp => {
        if (resp.ok) {
            setCurrentUser(null)
            history.push("/")
        }
    })
}

  return(
    <div>
      <h1>Logout</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Logout