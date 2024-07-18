import React from 'react'
import './MyWork.css'
import Netflix from '../assets/images/netflix_clone.png'
import youtube from '../assets/images/youtube_clone.png'
import crm from '../assets/images/CRM.png'


function MyWork() {
  return (
    <div className='my_work_container'>
        <div className='my_work_heading'>My Work</div>
        <div className='projects'>
          <div className='netflix'>
            <img src={Netflix}  alt=''/>
            <div className="btn">
              <a target="_blank" rel="noreferrer" href='https://netflix-black-one.vercel.app/' className='btn-4'>Visit</a>
              <a target="_blank" rel="noreferrer" href='https://github.com/rajsahu-git/neura_flicks' className='btn-3'>Code</a>
            </div>
          </div>
          <div className='youtube'>
            <img src={youtube} alt="" />
            <div className="btn">
              <a target="_blank" rel="noreferrer" href='https://you-tube-clone-two-drab.vercel.app/' className='btn-4'>Visit</a>
              <a target="_blank" rel="noreferrer" href='https://github.com/rajsahu-git/YouTube' className='btn-3'>Code</a>
            </div>
            </div>
          <div className='crm'>
            <img src={crm} alt="" />
            <div className="btn">
              <a target="_blank" rel="noreferrer" href='https://crm12.pythonanywhere.com/' className='btn-4'>Visit</a>
              <a target="_blank" rel="noreferrer" href='https://github.com/rajsahu-git/CRM' className='btn-3'>Code</a>
            </div>
            </div>
        </div>
    </div>
  )
}

export default MyWork