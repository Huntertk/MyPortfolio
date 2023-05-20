import React, { useContext } from 'react'
import logo from '../assets/images/portfoliologo.png'
import { BsMoonStarsFill,BsFillSunFill } from "react-icons/bs";
import './header.css'
import { Context } from './Context'
import { NavLink } from 'react-router-dom';

const Header = () => {
    const context = useContext(Context)

  return (
    <div className='header-container'>

     <NavLink to='/'><img src={logo} alt="logo" className={`${context.theme ? 'rotate-center dark-mode-img' : null} header-logo`}/></NavLink>
      <div className="header-menu-container">
        <div onClick={context.handleChangeTheme} className={`icon-container`}>
            {
                context.theme ? <BsFillSunFill className='rotate-center' /> : <BsMoonStarsFill className='rotate-center' />
            }
        </div>
        <NavLink to='projects'><p>Projects</p></NavLink>
        <p>About</p>
      </div>
    </div>
  )
}

export default Header
