import { BrowserRouter as Router } from 'react-router-dom'
import { Switch, Route } from 'react-router-dom'
import React from 'react'
import NavBar from './NavBar'
import Find from './Find'
import RestaurantDetails from './RestaurantDetails'
import Create from './Create'
import Favorites from './Favorites'
import Profile from './Profile'
import Logout from './Logout'


function Home({ currentUser, setCurrentUser }) {

  return (
    <div>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/find"><Find /></Route>
          <Route exact path="/restaurant/:id"><RestaurantDetails currentUser={currentUser}/></Route>
          <Route exact path="/create"><Create /></Route>
          <Route exact path="/favorites"><Favorites currentUser={currentUser}/></Route>
          <Route exact path="/profile"><Profile currentUser={currentUser} setCurrentUser={setCurrentUser}/></Route>
          <Route exact path="/logout"><Logout setCurrentUser={setCurrentUser}/></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default Home;