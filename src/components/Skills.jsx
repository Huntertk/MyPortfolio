import React from 'react'
import { DiReact,DiJava,DiBootstrap,DiSass } from "react-icons/di";
import { SiJavascript,SiHtml5,SiCss3, SiTailwindcss } from "react-icons/si";
import './skills.css'
import Marquee from 'react-fast-marquee'


const Skills = () => {
  return (
            <Marquee>
        <div className='skills-icon-container'>
            <div className="icon">
                <DiJava />
            </div>
            <div className="icon">
                <DiReact />
            </div>
            <div className="icon">
                <SiJavascript />
            </div>
            <div className="icon">
                <SiHtml5 />
            </div>
            <div className="icon">
                <SiCss3 />
            </div>
            <div className="icon">
                <SiTailwindcss />
            </div>
            <div className="icon">
                <DiBootstrap />
            </div>
            <div className="icon">
                <DiSass />
            </div>
        </div>
    </Marquee>
  )
}

export default Skills
