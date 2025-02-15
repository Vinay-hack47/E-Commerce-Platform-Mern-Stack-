import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <header className='fixed-nav-bar w-nav'>
      <nav className='max-w-screen-2xl mx-auto px-4 flex justify-between items-center'>
        <ul className='nav__links'>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/shop">Shop</Link></li>
          <li><Link to="/">Pages</Link></li>
          <li><Link to="/">Contacts</Link></li>
        </ul>

        {/*logo*/}
        <div className='nav__logo'>
          <Link to="/">Lebaba<span>.</span></Link>
        </div>

        {/*nav-icons*/}
        <div className='nav__icons relative'>
          <span><Link to="/search"><i className="ri-search-line"></i></Link></span>

          <span>
            <button className='hover:text-red-600'>
            <i className="ri-shopping-bag-4-line"></i>
            <sup className='text-sm inline-block px-1.5 text-white rounded-full bg-red-600'>0</sup>
            </button>
          </span>

          <span>
            <Link to="/login"><i class="ri-user-add-fill"></i></Link>
          </span>


        
        </div>
         
      </nav>
    </header>
  )
}

export default Navbar
