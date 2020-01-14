import React from 'react'
import {NavLink} from 'react-router-dom'
import '../styles/FrontPage.css'

const FrontPage = () => {
    return(
        <div className='fp_main'>
            <div className="fp_logo"></div>
            <p className='define'>Habits define you.</p>
            <p className='pick'>Pick yours.</p>
            <NavLink to="/overview">
            <button className="fp_button">Sign In</button>
            </NavLink>
        </div>
    )
}

export default FrontPage