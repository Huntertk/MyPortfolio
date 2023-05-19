import React, { useContext } from 'react'
import './home.css'
import { BsGithub, BsTwitter } from "react-icons/bs";
import { SiNetlify } from "react-icons/si";
import avatarImg from '../assets/images/developer-avatar.png'
import { Context } from '../components/Context'
import Skills from '../components/Skills';


const Home = () => {
  const context  = useContext(Context)

  return (
    <div className='home-container'>
      <h1 
      className={`home-container-developer-heading 
      ${context.theme ? 'home-dark-mode': 'home-light-mode'}`}
      >MD TAUFIK</h1>

      <h3 className={`home-container-developer-speciality 
      ${context.theme ? 'developer-speciality-dark-mode': 'developer-speciality-light-mode'}`}
      >Front End Developer</h3>
      <p className='home-developer-about'>Hi !! I am a skilled Front End Developer with over 6 Months of experience in creating responsive and accessible web applications. My includes HTML, CSS, JavaScript and Advance React framework.
    </p>
    <div className="home-social-icons-container">
      <BsGithub className='icon-github' />
      <BsTwitter className='icon-twitter' />
      <SiNetlify className='icon-netlify' />
    </div>

    <img src={avatarImg} alt="avatar-image" className='avatar-img' />

    <Skills />
    </div>
  )
}

export default Home
