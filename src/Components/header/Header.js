import React from 'react'
import '../../css/header/header.css'

import HeaderNav from './HeaderNav'
import HeaderLogo from './HeaderLogo'
import { Outlet, NavLink } from 'react-router-dom'
import HeaderProfile from './HeaderProfile'

export default function Header() {
    return (
        <>
            <div className='header'>
                <HeaderLogo />
                <HeaderNav />
                <HeaderProfile />
            </div>
            <Outlet />
        </>
    )
}
