import React from 'react'
import { Outlet, NavLink } from 'react-router-dom'

export default function HeaderNav() {
    return (
        <nav className='header-nav'>
            <ul className='header-nav-ul'>
                <li><NavLink style={{ color: '#f0c808', textDecoration: 'none' }} to='/'>HOME</NavLink></li>
                <li><NavLink style={{ color: '#f0c808', textDecoration: 'none' }} to='books'>Books</NavLink></li>


            </ul>
        </nav>
    )
}
