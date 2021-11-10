import { useState} from "react"
import { useHistory } from "react-router-dom"

function Login({ setCurrentUser }) {
  const [userLog, setUserLog] = useState('')
  const [passLog, setPassLog] = useState('')
  const [nameSign, setNameSign] = useState('')
  const [userSign, setUserSign] = useState('')
  const [passSign, setPassSign] = useState('')
  const [errors, setErrors] = useState([])
  const history = useHistory()

  function onSignupSubmit(e) {
    e.preventDefault()
    const user = { name: nameSign, username: userSign, password: passSign}
  
    fetch('/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user)
    })
    .then(res => {
      if(res.ok) {
        res.json().then(user => {
          setCurrentUser(user)
          history.push('/find')
        })
      } else {
        res.json().then(errorData => setErrors(errorData.errors))
      } 
    })
  }

  function onLoginSubmit(e) {
    e.preventDefault()
    const user = { username: userLog, password: passLog}

    fetch('/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user)
    })
    .then(res => {
      if(res.ok) {
        res.json().then(user => {
          setCurrentUser(user)
          history.push('/find')
        })
      } else {
        res.json().then(errorData => setErrors(errorData.errors))
      } 
    })
  }

  return (
    <div>
      <form onSubmit={onSignupSubmit}>
        <label>Name: </label>
        <input type="text" value={nameSign} 
          onChange={e => setNameSign(e.target.value)}>
        </input>
        <label> Username: </label>
        <input type="text" value={userSign} 
          onChange={e => setUserSign(e.target.value)}>
        </input>
        <label> Password: </label>
        <input type="password" value={passSign} 
          onChange={e => setPassSign(e.target.value)}>
        </input>
        <button type="submit">Signup</button>
      </form>

      <form onSubmit={onLoginSubmit}>
        <label> Username: </label>
        <input type="text" value={userLog} onChange={e => setUserLog(e.target.value)}></input>
        <label> Password: </label>
        <input type="password" value={passLog} onChange={e => setPassLog(e.target.value)}></input>
        <button type="submit">Login</button>
      </form>
      {errors ? errors : null}
    </div>
  )
}

export default Login