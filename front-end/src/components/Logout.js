import { useHistory } from "react-router-dom"

function Logout({ setCurrentUser }) {
   const history = useHistory()

  function handleLogout() {
    fetch("/logout", {
        method: "DELETE"
    })
    .then(resp => {
        if (resp.ok) {
            setCurrentUser({})
            history.push("/")
        }
    })
}

  return(
    <div className="popup">
      <div className="popup_inner">
        <h1>Are you sure you want to logout?</h1>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </div>
  )
}

export default Logout