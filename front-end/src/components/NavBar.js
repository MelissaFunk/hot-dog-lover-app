import { Link } from "react-router-dom"
import Logout from './Logout'
import { useHistory } from "react-router"
import { useState } from "react"

function NavBar({ setCurrentUser }) {
  const [buttonPopup, setButtonPopup] = useState(false)
  const history = useHistory()

  const handleLogout = () => {
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
  
  return (
    <div>
      <main>
        <Link to="/find"><button>Find</button></Link>
        <Link to="/create"><button>Create</button></Link>
        <Link to="/favorites"><button>Favorites</button></Link>
        <Link to="/profile"><button>Profile</button></Link>
        <button onClick={() => setButtonPopup(true)}>Logout</button>
      </main>

      <Logout trigger={buttonPopup} setTrigger={setButtonPopup} handleLogout={handleLogout}></Logout>
    </div>
  )
}
  
export default NavBar
