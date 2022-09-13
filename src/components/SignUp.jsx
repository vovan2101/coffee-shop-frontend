import React from 'react'
import './SignUp.css';
import { useNavigate } from 'react-router-dom'

export default function SignUp(props) {

    let navigate = useNavigate()

    const handleSubmit = e => {
        e.preventDefault()

        let password = e.target.password.value
        let confirmPass = e.target.confirmPass.value
        if (password !== confirmPass){
            props.flashMessage('Passwords do not match, please try again', 'danger')          
        } else {
            let myHeaders = new Headers()
            myHeaders.append('Content-Type', 'application/json')

            let formData = JSON.stringify({
                name: e.target.name.value,
                email: e.target.email.value,
                phoneNumber: e.target.phoneNumber.value,
                homeAddress: e.target.homeAddress.value,
                password: e.target.password.value
            })

            fetch('http://localhost:5000/auth/users', {
                method: 'POST',
                headers: myHeaders,
                body: formData,
            })
            .then(res => res.json())
            .then(data => {
                if (data.error){
                    console.error(data.error)
                } else {
                    props.flashMessage('You successfully signid up!', 'success')
                    navigate('/')
                }
            })
        }
    }

  return (
    <>
     
    <form id='form' onSubmit={handleSubmit}>
    <h3 id='signup' className="text-center">Sign Up</h3>
        <div className="form-group">
            <label id='label' htmlFor="email">Email:</label>
            <input type='text' className='form-control' placeholder='Enter Email' name='email' />
            <label id='label' htmlFor="name">Name:</label>
            <input type='text' className='form-control' placeholder='Enter Name' name='name' />
            <label id='label' htmlFor="phone_number">Phone Number:</label>
            <input type='text' className='form-control' placeholder='Enter Phone Number' name='phone_number' />
            <label id='label' htmlFor="address">Home Address:</label>
            <input type='text' className='form-control' placeholder='Enter Home Address' name='home_address' />
            <label id='label' htmlFor="password">Password:</label>
            <input type='password' className='form-control' placeholder='Enter Password' name='password' />
            <label id='label' htmlFor="confirmPass">Confirm Password:</label>
            <input type='password' className='form-control' placeholder='Enter Password Again' name='confirmPass' />

            <input id='button' type='submit' className='btn w-100 mt-3' value='Register' />
        </div>
    </form>
</>
  )
}
