import React from 'react'


const Navbar = () => {
  return (
    <div className='nav-bar'>
      <div className="left-side">
        <h3>Truvoo</h3>
      </div>

      <div className="middle">
        <ul>
          <li>Booking</li>
          <li>Package</li>
          <li>Pricing</li>
          <li>Shop</li>
          <li>Contact</li>
        </ul>
      </div>

      <div className="right-side">
        <img src="public/images/speech-bubble.png" alt="" />
        <img src="public/images/shopping-bag.png" alt="" />
        <img src="public/images/user.png" alt="" />
      </div>
    </div>
  )
}

export default Navbar