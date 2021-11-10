import { Link } from "react-router-dom"

function NavBar() {
  
  return (
    <div>
      <Link to="/find"><button>Find</button></Link>
      <Link to="/create"><button>Create</button></Link>
      <Link to="/favorites"><button>Favorites</button></Link>
      <Link to="/profile"><button>Profile</button></Link>
      <Link to="/logout"><button>Logout</button></Link>
    </div>
  )
}

export default NavBar
