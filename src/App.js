import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Navbar from "./components/Navbar";
import SignUp from "./components/SignUp";
import { useState } from 'react';
import Alert from "./components/Alert";

function App(props) {

  const now = new Date()

  const [message, setMessage] = useState(null)
  const [category, setCategory] = useState(null)
  const [loggedIn, setLoggedIn] = useState((localStorage.getItem('token') && new Date(localStorage.getItem('expiration')) > now) ? true : false)

  const flashMessage = (message, category) => {
    setMessage(message)
    setCategory(category)
}

  const login = () => {
    setLoggedIn(true)
  }

  const logout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('expiration')
    setLoggedIn(false)
  }

  return (
   <>
    <Navbar logout={logout} loggedIn={loggedIn}/>
    <div className="container">
    { message ? <Alert message={message} category={category} flashMessage={flashMessage}/> : null}
      <Routes>
        <Route path='/' element={< Home />}/>
        <Route path='/signup' element={< SignUp flashMessage={flashMessage}/>} />
        <Route path='/login' element={< Login flashMessage={flashMessage} login={login}/>} />
      </Routes>
    </div>
   </>
  )
}

export default App;
