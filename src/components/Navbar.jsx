import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css';


export default function Navbar(props) {
  return (

    <>
    
    <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mt-4 mb-4 border-bottom">
      <a href="/" className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
        <img src="./pictures/logo.png" alt="" />
      </a>

      <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
        <Link to="/" className="nav-link px-2 text-light">Home</Link>
        <Link to="#" className="nav-link px-2 text-light">Menu</Link>
        <Link to="#" className="nav-link px-2 text-light">Products</Link>
        {props.loggedIn ?
        <>
        <Link to="/logout" className="nav-link px-2 text-light">Logout</Link>
        </>
        :
        <>
        <Link to="/signup" className="nav-link px-2 text-light">SignUp</Link>
        <Link to="/login" className="nav-link px-2 text-light">Login</Link>
        </>
        }
      </ul>

      <div className="col-md-3 text-end">
      <Link to="/" id='icon' className="fas fa-shopping-cart text-light"></Link>
      </div>
    </header>

</>
  )
}
