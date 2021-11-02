import './App.css'
import { Route, Switch } from 'react-router-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Login from './components/Login'
import Home from './components/Home'

function App() {
  const [currentUser, setCurrentUser] = useState(null)

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
      <Router>
        <Switch>
          <Route exact path="/"><Login currentUser={currentUser} setCurrentUser={setCurrentUser}/></Route>
          <Route exact path="/home"><Home currentUser={currentUser} setCurrentUser={setCurrentUser}/></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
