import React from 'react'
import img from '../assets/me.png'
import logo from '../assets/logo.png'

function NavBar() {
  return (
    <div className='nav-main'>
        <div className='logo'>
            <img src={logo} alt='img'/>
        </div>
        <div className='right-side'>
            <div className='dark-mode'>
            
            </div>
              <div className='profile'>
              <img src={img} alt='img'/>
            </div>

        </div>
      
    </div>
  )
}

export default NavBar