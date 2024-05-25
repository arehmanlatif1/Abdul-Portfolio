import React from 'react'
import "./LoadingPage.css"
import Lottie from 'lottie-react';
import loadingAnimation from "../../gif-files/Loading.json"

const LoadingPage = () => {
  return (
    <div className="loading-container">
      <Lottie animationData={loadingAnimation} loop={true} style={{ width: '30rem' }} />
      <p className="loading-text">Loading<span className="typing-animation">...</span></p>
      <h2 className='loading-title'>Abdul Rehman</h2>
    </div>
  );
};
export default LoadingPage;