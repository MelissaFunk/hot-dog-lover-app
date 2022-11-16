import './App.css'
import { Route, Switch } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Login from './components/Login'
import NavBar from './components/NavBar'
import Find from './components/Find'
import RestaurantDetails from './components/RestaurantDetails'
import Create from './components/Create'
import Favorites from './components/Favorites'
import Profile from './components/Profile'
import Logout from './components/Logout'

function App() {
  const [currentUser, setCurrentUser] = useState({})

  useEffect(() => {
    fetch('/me')
    .then(res => {
      if(res.ok) {
        res.json().then(user => setCurrentUser(user))
      }
    })
  }, [])

  return (
    <div>
        {currentUser.name ? <NavBar setCurrentUser={setCurrentUser}/> : null}
        <Switch>
          <Route exact path="/"><Login setCurrentUser={setCurrentUser}/></Route>
          <Route exact path="/find"><Find /></Route>
          <Route exact path="/details/:id"><RestaurantDetails currentUser={currentUser}/></Route>
          <Route exact path="/create"><Create currentUser={currentUser}/></Route>
          <Route exact path="/my-favorites"><Favorites currentUser={currentUser} /></Route>
          <Route exact path="/my-profile"><Profile currentUser={currentUser} /></Route>
          <Route exact path="/logout"><Logout setCurrentUser={setCurrentUser}/></Route>
        </Switch> 
    </div>
  );
}

export default App;
