import { Link } from "react-router-dom"

function NavBar() {

  return (
    <div>
      <Link to="/find"><button>Find</button></Link>
      <Link to="/create"><button>Create</button></Link>
      <Link to="/favorites/:id"><button>Favorites</button></Link>
      <Link to="/profile"><button>Profile</button></Link>
      <Link to="/logout"><button>Logout</button></Link>
    </div>
  )
}

export default NavBar

// <Route exact path="/find"><Find /></Route>
// <Route exact path="/restaurant/:id"><RestaurantDetails /></Route>
// <Route exact path="/create"><Create /></Route>
// <Route exact path="/favorites/:id"><Favorites /></Route>
// <Route exact path="/profile"><Profile /></Route>
// <Route exact path="/logout"><Logout /></Route>