import React from 'react'
import NavBar from './NavBar'
// import Footer from './Footer'
import Footer from "./Footer";
import './Contact.css'
import { CgMail } from "react-icons/cg";
import { FaWhatsapp } from "react-icons/fa6"; 
import { TiSocialInstagram } from "react-icons/ti";


function Contact() {
  return (
    <div className='contacts'>
      <NavBar />
      <section className='contact-section'>
        <div className='Contact'>
          <div className='contact-heading'>
          <h1>Get In Touch</h1>
          </div>
          <div className='contact-detail'>
            <div className='contact-item'>
              <div className='gmail'>
              <CgMail className='gmail-logo' />
              <h5>Gmail</h5>
              <p>rajkumarsahu8824@gmail.com</p>
              <a target="_blank" rel="noreferrer" href="mailto:rajkumarsahu8824@gmail.com">Send Mail</a>
              </div>
              <div className='whatsapp'>
              <FaWhatsapp />
                <h5>What's App</h5>
                <p>8239688824</p>
                <a target="_blank" rel="noreferrer" href="https:///api.whatsapp.com/send?phone=+918239688824">Send Message</a>
              </div>
              <div className='instagram'>
              <TiSocialInstagram />
                <h5>Instagram</h5>
                <p>@rajsahuIg</p>
                <a target="_blank" rel="noreferrer" href="#insta">Insta</a>
              </div>
            </div>
            <div className='mail-contact'>
              <form action="" className='contact-form'>
                <input type="text" name='name' placeholder='Enter Your Name' required />
                <input type="email" name="email" placeholder='Enter Your Email' required />
                <textarea name="message" cols="30" rows="10" placeholder='Your Message' required ></textarea>
                <button type='submit' className='submit-btn'>Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default Contact