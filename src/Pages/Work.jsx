import React, { useContext, useEffect } from 'react'
import projectData from '../../projectData.js'
import { BsGithub, BsBrowserChrome } from "react-icons/bs";
import './work.css'
import Aos from 'aos';
import 'aos/dist/aos.css'
import { Context } from '../components/Context.jsx';




const Work = () => {
  const context = useContext(Context)

  useEffect(() => {
    Aos.init()
  },[])

  const renderProject = projectData.map((project) => {
    return <div className={`work-project ${context.theme === false ? "work-light-mode" : null }`} key={project.id}
    data-aos="fade-up"
     data-aos-anchor-placement="top-bottom"
    >
        <img src={project.imageUrl} alt="image" className='work-project-image'/>
        <h1>{project.name}</h1>
        <p>{project.details}</p>
        <div className="work-project-language">
            {project.language.map((lang, index) => {
              return <span key={index}>{lang}</span>
            })}
        </div>
        <div className="work-icon">
          <a href={project.hostingUrl} target='_blank'><BsBrowserChrome /></a>
          
        </div>
      </div>
  })
  console.log(projectData);
  return (
    <>
      <h1 className='all-projects-container-heading'>All Projects</h1>
    <div className='work-main-container'>
      {renderProject}
    </div>
    </>
  )
}

export default Work
