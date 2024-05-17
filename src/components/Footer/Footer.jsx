import React from 'react'
import backgb from "../../gif-files/Bottom.json"
import Lottie from 'lottie-react'
import "./Footer.css"
function Footer() {
  return (
    <div className='footer-container'>
        <div className="lottie-container">
            <Lottie animationData={backgb} loop={true} />
            </div>
    </div>
  )
}

export default Footer