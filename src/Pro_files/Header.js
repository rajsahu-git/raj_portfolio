import React from 'react'
import './Header.css'
import pic from '../assets/images/pic.png'
import resume from '../assets/images/RAJ-KUMAR-SAHU.pdf'

function Header() {
  return (
    <div className='header'>
        <div className='left-side-section'>
            <div className='short-intro'>
                <h1 className='header-1'>Hello!</h1>
                <h2 className='hearder-2'>I build things for the web.</h2>
                <p className='paragraph'>I am a web developer specializing in building soft tech.I like making fun, interactive things with code.</p>
            </div>
            <div className='buttons'>
            {/* <button class="btn-1">
  <div class="original">Contact</div>
  <div class="letters">
    
    <span>C</span>
    <span>O</span>
    <span>N</span>
    <span>T</span>
    <span>A</span>
    <span>C</span>
    <span>T</span>

  </div>
</button> */}

<div class="button">
  <a href={resume} target="_blank" rel="noopener noreferrer" className="anchor">
    <span>Download CV</span>
  </a>
</div>
            </div>
        </div>
        <div>
            <img className='img' src={pic} alt="" srcset="" />
        </div>
    </div>
  )
}

export default Header