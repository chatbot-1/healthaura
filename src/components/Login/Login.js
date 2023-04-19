import React from 'react'
import "./login.css"
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='login section'>
      <div className='login-container container'>
        <div className='login-content'>
          <h1 className='title login-title'>Login</h1>

          <div className='login-data'>

            <form action='#'>
              <div className='login-input'>
                <input type='email' placeholder='email or username'/>
                <input type='password' placeholder='password'/>
              </div>
              <div className='cred'>
                <button className='sign-button'>Sign In</button><br/>
                <br/>
                <a href='#'>Forget your password</a>
              </div>
              <div className='sign-with'>
                <button className='sign-button'><i class="uil uil-google "></i> Sign in with Google</button>
                <button className='sign-button'><i class="uil uil-facebook"></i> Sign in with facebook</button>
                <p className='dont'>
                  Don't have an acount ? 
                  <Link to="/signup"><a href='#'> Sign up</a></Link>
                </p>
              </div>
            </form>

          </div>

        </div>
      </div>
    </div>
  )
}

export default Login