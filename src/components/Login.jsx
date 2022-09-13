import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Login.css'

export default function Login(props) {

    let navigate = useNavigate()

    const handleSubmit = async e => {
        e.preventDefault()

        let email = e.target.email.value
        let password = e.target.password.value

        let myHeaders = new Headers()
        myHeaders.append('Authorization', 'Basic ' + btoa(`${email}:${password}`))

        let response = await fetch('http://localhost:3000/auth/token', {
            method: 'POST',
            headers: myHeaders})
        
            if (response.ok){
                console.log('OK!')
                let data = await response.json()

                localStorage.setItem('token', data.token)

                props.login()
                props.flashMessage('Enjoy a coffee!', 'light')
                navigate('/')
            } else {
                props.flashMessage('Email or password are incorect, please try again', 'light')
            }
    }

  return (
    <>
        
        <form id='form2' onSubmit={handleSubmit}>
        <h3 id='login' className='text-center'>Login</h3>
            <div className="form-group">
            <label id='label' htmlFor="username">Username:</label>
            <input type='text' className='form-control' placeholder='Enter Username' name='username' />
                    
            <label id='label' htmlFor="password">Password:</label>
            <input type='password' className='form-control' placeholder='Enter Password' name='password' />
                    
            <input id='button' type='submit' className='btn w-100 mt-3' value='Login' />
            </div>
        </form>
    </>
  )
}
