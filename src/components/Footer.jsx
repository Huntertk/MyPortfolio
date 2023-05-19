import React from 'react'
import { BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";
import './footer.css'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-icon-container">
            <a href='https://github.com/Huntertk' target='_blank'><BsGithub /></a>
            <BsInstagram />
            <BsTwitter />
        </div>
      <h3>© 2023 MD TAUFIK All rights reserved.</h3>
    </div>
  )
}

export default Footer
