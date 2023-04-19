import React from 'react'
import { Link } from 'react-router-dom'
import "./signup.css"

const Signup = () => {
  return (
    <div className='signup section'>
      <div className='signup-container container'>
        <div className='signup-content'>
          <h1 className='title signup-title'>Sign Up</h1>

          <div className='signup-data'>

            <form action='#'>
              <div className='signup-input'>
                <input type='text' placeholder='first name'/>
                <input type='text' placeholder='last name'/>
                <input type='email' placeholder='email'/>
                <input type='password' placeholder='password'/>
                <input type='password' placeholder='re-enter the password'/>
              </div>
              <div className='cred'>
                <button className='signup-button'>Register</button><br/>
              </div>
              <div className='signup-with'>
                <p className='title'>or</p>
                <button className='signup-button'><i class="uil uil-google"></i> Sign up with Google</button>
                <button className='signup-button'><i class="uil uil-facebook"></i> Sign up with facebook</button>
                <p className='dont'>
                  Already have an acount ? 
                  <Link to="/login"><a href='#'> Sign In</a></Link>
                </p>
              </div>
            </form>

          </div>

        </div>
      </div>
    </div>
  )
}

export default Signup