import React from 'react'
import './Skill.css'
import js from '../assets/images/js.png'
import python from '../assets/images/python.png'
import react from '../assets/images/react.png'
import django from '../assets/images/django.png'
import git from '../assets/images/github.png'
import css from '../assets/images/css.png'
import html from '../assets/images/html.png'
import tailwindcss from '../assets/images/tailwind-css.png'

function Skill() {
  return (
    <div className='section'>
        <div className="loader">
    <span> &lt;</span>
    <span>SKILL's</span>
    <span> / &gt;</span>
    </div>


        <ul className='section-elements'>
        <li className="element">
            <div className='js-logo'>
                <img  src={js} alt="sfd" />
                <h3>JavaScript</h3>
            </div>
        </li>
            <li className='element'>
                <div className="python-logo">
                    <img src={python} alt="python" />
                    <h3>Python</h3>
                </div>
            </li>
            <li className='element'>
                <div className="react-logo">
                    <img src={react} alt="react" />
                    <h3>React</h3>
                </div>
            </li>
            <li className='element'>
                <div className="django-logo">
                <img src={django} alt="django" />
                <h3>Django</h3>
                </div>
            </li>
            <li className='element'>
                <div className="tailwind-css-logo">
                    <img src={tailwindcss} alt="tailwind-css" />
                    <h3>Taildwind css</h3>
                </div>
            </li>
            <li className='element'>
                <div className="css-logo">
                    <img src={css} alt="css" />
                    <h3>CSS</h3>
                </div>
            </li>
            <li className='element'>
                <div className="html-logo">
                    <img src={html} alt="html" />
                    <h3>HTML</h3>
                </div>
            </li>
            <li className='element'>
                <div className="git-logo">
                    <img src={git} alt="git" />
                    <h3>GIT</h3>
                </div>
            </li>
        </ul>
    </div>
  )
}

export default Skill