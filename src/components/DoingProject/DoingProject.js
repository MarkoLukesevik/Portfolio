import React from 'react'
import './DoingProject.css'
import Button from '../Button/Button'

export default function DoingProject() {
  return (
    <div className='doing-project'>
        <h1>Interested in doing a project together?</h1>
        <span></span>
        <Button btnText={'CONTACT ME'} link={'/contact'} />
    </div>
  )
}