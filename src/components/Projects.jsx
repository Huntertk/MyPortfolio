import React, { useContext, useEffect } from 'react'
import './projects.css'
import projectImg from '../assets/images/project-1.png'
import projectImgOne from '../assets/images/project-2.png'
import { BsGithub } from "react-icons/bs";
import { BsBrowserChrome } from "react-icons/bs";

import { Context } from './Context';
import Aos from 'aos';
import 'aos/dist/aos.css'


const Projects = () => {
    const context = useContext(Context)
    console.log(context.theme)

    useEffect(() => {
    Aos.init()
  },[])
  return (
    <div className='projects-main-container'>
      <div className={`projects-container ${context.theme ? "project-dark-theme" : "project-light-theme" }`}
       data-aos="fade-up"
     data-aos-anchor-placement="top-bottom"
      >
        <img src={projectImgOne} alt="" className='project-img'/>
        <h3>Youtube Clone</h3>
        <div className="project-button-container">
            <a href='https://github.com/Huntertk/YoutubeClone' target='_blank'><BsGithub className='project-btn-icon github' /></a>  
           <a href='https://react-youtube-clone-app-taufik.netlify.app' target='_blank'> <BsBrowserChrome className='project-btn-icon netlify' /> </a>
        </div>
      </div>


       <div className={`projects-container ${context.theme ? "project-dark-theme" : "project-light-theme" }`}
        data-aos="fade-up"
     data-aos-anchor-placement="top-bottom"
       >
        <img src={projectImg} alt="" className='project-img'/>
        <h3>Anonymously Tweet</h3>
        <div className="project-button-container">
           <a href='https://github.com/Huntertk/Anonymously-Tweet' target='_blank'><BsGithub className='project-btn-icon github' /></a>  
           <a href='https://react-anonymously-tweet-app-taufik.netlify.app' target='_blank'> <BsBrowserChrome className='project-btn-icon netlify' /> </a>
        </div>
      </div>
    </div>
  )
}

export default Projects
