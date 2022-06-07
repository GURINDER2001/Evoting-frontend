import React from 'react'

import { Link, useHistory, useLocation } from 'react-router-dom'
const Navbar = () => {
  const location = useLocation();
  return (
    !location.pathname.includes('auth') && <div className='flex px-12 py-4 justify-between '>
      <h1 class="text-2xl font-bold text-dark-blue">
        Voting
      </h1>
      <div>
        <span className="mx-5 text-sm font-bold text-dark-blue"><Link to="/">HOME</Link></span>
        <span className="mx-5 text-sm font-bold text-dark-blue"><Link to="/list">ACTIVE EVENTS</Link></span>
        <span className="mx-5 text-sm font-bold text-dark-blue"><Link to="/list">ABOUT</Link></span>
      </div>
      <div>
        <button className='py-2 px-4 rounded text-dark-blue font-bold' ><Link to="/auth">SIGNUP</Link></button>
        <button className='bg-dark-blue py-2 px-4 rounded text-white font-medium' > <Link to="/create">START VOTE</Link></button>

      </div>
    </div>

  )
}

export default Navbar