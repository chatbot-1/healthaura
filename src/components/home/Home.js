import React from 'react'
import { Link } from 'react-router-dom'
import Icons from './Social'
import Move from './Scroll'
import "./home.css"
import Info from '../info/Info'
import Register from '../register/Register'
import Data from '../data/Data'
import Credit from '../credit/Credit'
import Devices from '../devices/Devices'
import Profile from '../profile/Profile'

const Home = () => {
  return (
    <>
      <section className="home section">
        <div className="home-container container">

          <div className='navbar'>
            <h1 className='logo'>The Health.Aura</h1>
            <div className='nav-list'>
              <ul>
                <li>  Home</li>
                <li>About</li>
                <li>Services</li>
                <li>Health Card</li>
                <li>Contact Us</li>
              </ul>
            </div>
              <i className="uil uil-user"></i>
          </div>

          <div className="home-content" id='home'>
            <div className="data">
              <h4>Welcome to the health aura</h4>
              <h1>
                Your <br />Pocket <span className='health-span'>Healthcare</span>  <br/>Solution.
              </h1>

            </div>
            <Icons />
          </div>
          <Move />

        </div>
      </section>

      <Info />
      <Register />
      <Data />
      <Credit />
      <Devices/>
      <Profile/>

    </>
  )
}

export default Home