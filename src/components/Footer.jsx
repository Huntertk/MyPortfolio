import React from 'react'
import { BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";
import './footer.css'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-icon-container">
            <BsGithub />
            <BsInstagram />
            <BsTwitter />
        </div>
      <h3>© 2023 MD TAUFIK All rights reserved.</h3>
    </div>
  )
}

export default Footer
