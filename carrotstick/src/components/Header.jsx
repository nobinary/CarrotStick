import React from 'react'
// import {NavLink} from 'react-router-dom'
import '../styles/Header.css'

const Header= (props) => {
    return(
        <div className='header'>
            <p className='header_txt'>{props.header}</p>
        </div>
    )
}

export default Header