import React from 'react'
import { BsArrowRight } from "react-icons/bs";
import "./Subc.css"
function Subc() {
  return (
    <div className='container'>
        <div className='section-7-input'>
          <input type="email" placeholder='Enter Your Email Address' />
          <button type='submit'><BsArrowRight className='subc-icon'/></button>
        </div>
    </div>
  )
}

export default Subc
