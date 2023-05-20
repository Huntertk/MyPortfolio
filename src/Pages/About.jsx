import React from 'react'
import './about.css'
import avatarImg from '../assets/images/developer-avatar.png'

const About = () => {
  return (
    <div className='about-main-container'>
        <h1>About Me</h1>
        <img src={avatarImg} alt="image" className='avatar-img'/>
        <div className="about-container-details">
            <p className='about-developer-heading'>MD TAUFIK</p>
            <div className="underline"></div>
            <p className='about-speciality'>Front End Developer</p>
            <p className='about-me-details'>I am a third year of college student and currently i am learning fronted end development in react.</p>
            <p>Contact me :- factsofuniverse8@gmail.com</p>
        </div>
    </div>
  )
}

export default About
