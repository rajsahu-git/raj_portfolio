import React from 'react'
import './Blog.css'
import Blog1 from '../assets/images/blog-1.png'
import Blog2 from '../assets/images/blog-2.png'
import Blog3 from '../assets/images/blog-3.png'


function Blog() {
  return (
    <div className='blog'>
      <div className="blog-section">
        <h1 className='blog-title'>Blog</h1>
        <div className='blog-container'>
          <div className="blog-1">
            <img src={Blog1} alt=""/>
            <div className="blog-detail">
              <h2 className='blog-heading'>JavaScript Events: Understanding How to Respond to User Actions</h2>
              <h4 className='author'>Raj sahu</h4>
              <p className='time'>4 min. read</p>
              <a target="_blank" rel="noreferrer"  href="https://rajblog.hashnode.dev/javascript-events-understanding-how-to-respond-to-user-actions" className='btn-7'>Read</a>
            </div>
          </div>
          <div className="blog-2">
            <img src={Blog2} alt="" />
            <div className="blog-detail">
              <h2 className='blog-heading'>JavaScript Object Destructuring</h2>
              <h4 className='author'>Raj sahu</h4>
              <p className='time'>3 min. read</p>
              <a target="_blank" rel="noreferrer"  href="https://rajblog.hashnode.dev/javascript-object-destructuring" className='btn-7'>Read</a>
            </div>
          </div>
          <div className="blog-3">
            <img src={Blog3} alt="" />
            <div className="blog-detail">
              <h2 className='blog-heading'>Javascript Prototype: An Object-Oriented Programming Introduction</h2>
              <h4 className='author'>Raj sahu</h4>
              <p className='time'>8 min. read</p>
              <a target="_blank" rel="noreferrer"  href="https://rajblog.hashnode.dev/javascript-prototype-an-object-oriented-programming-introduction" className='btn-7'>Read</a>
            </div>
          </div>
        </div>
      </div>
      </div>
  )
}

export default Blog