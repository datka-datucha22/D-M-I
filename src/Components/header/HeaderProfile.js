import React from 'react'
import profilePicture from './profile.png'
import '../../css/header/header.css'

export default function HeaderProfile() {
    return (
        <img src={profilePicture} alt="Main Logo" className='header-profile' />
    )
}
