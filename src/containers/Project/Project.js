import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import './Project.css'
import { portfolioData } from '../../components/Utils/PortfolioData'
import AboutContent from '../../components/AboutContent/AboutContent'
import DoingProject from '../../components/DoingProject/DoingProject'

export default function Project() {
 
  const params = useParams()
    useEffect(() =>{
    }, [params])
   
    let project = portfolioData.find(project => project.id == params.id)

    const bgImg = require(`../../images/${project.img}`)

    function visitWebsite() {
      window.open(project.link)
    }
   
  return (
    <div className='project'>
        <div className='hero-img' style={ { backgroundImage: `url(${bgImg})` } } ></div>
        <div className='project-main'>
          <div className='project-about'>
              <AboutContent title={project.title} text={project.text} btnText='VISIT WEBSITE' onBtnClick={visitWebsite} skills1={project.skills1} skills2={project.skills2}/>
          </div>

          <div className='project-background'>
            <h2 className='project-background-title' >{project.title2}</h2>
            <p className='project-background-text'>{project.textBg}</p>
            
              <h2>{project.previewTitle}</h2>
              <img className='preview-img' src={require(`../../images/${project.previewimg1}`)} alt='' ></img>
              <img className='preview-img' src={require(`../../images/${project.previewimg2}`)} alt='' ></img>
            
          </div>
        </div>
        <DoingProject />
    </div>
  )
}
