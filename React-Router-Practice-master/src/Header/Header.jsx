import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Header() {
  return (
    <div className='sticky flex items-center justify-around w-full px-10 py-5 border'>
      <nav className='flex flex-row items-center justify-between w-full mx-auto bg-white'>
        <Link to='/' >
            <div className='flex items-center gap-0 text-3xl font-bold'>
                <p className='text-gray-400 '>your</p>
                <p className='text-orange-500 '>Logo</p>
            </div>
        </Link>
        <ul className='flex flex-row items-center justify-around space-x-5 font-bold'>
            <li>
                <NavLink to='/' className={({isActive}) => ( isActive ? 'text-orange-500' : 'text-gray-700') }>
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink to='/about' className={({isActive}) => ( isActive ? 'text-orange-500' : 'text-gray-700') }>
                    About
                </NavLink>
            </li>
            <li>
                <NavLink to='/contact' className={({isActive}) => ( isActive ? 'text-orange-500' : 'text-gray-700') }>
                    Contact
                </NavLink>
            </li>
            <li>
                <NavLink to='/github' className={({isActive}) => ( isActive ? 'text-orange-500' : 'text-gray-700') }>
                    GitHub
                </NavLink>
            </li>
            <li>
                <NavLink to='/user' className={({isActive}) => ( isActive ? 'text-orange-500' : 'text-gray-700') }>
                    User
                </NavLink>
            </li>
        </ul>
        <div className='flex flex-row items-center justify-between gap-5 '>
            <button>Login</button>
            <button className='p-3 text-white bg-orange-500 rounded-lg '>Get Started</button>
        </div>
      </nav>
    </div>
  )
}

export default Header
