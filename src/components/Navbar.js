import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { FaMagic } from 'react-icons/fa'
import Logo from '../images/Cryp.svg'
import Logo1 from '../images/Cryp (1).svg'


const Navbar = () => { 
  return (
    <Link to="/">
        <div className="navbar">
            <img className="icon" src={Logo1} />
        </div>
    </Link>
  )
}

export default Navbar