import React from 'react';
import '../css/mainpage.css';
import imagee from '../image/imagee.jpg';

function MainPage() {
  return (
    <div className='main-page'>
      <div className='main-page-text'>
      <text>Hello,I'm Jawad,</text>
      <text>ui/ux designer</text>
      <text>based in USA.</text>
        <p>I am a freelance ui/ux designer with experience of 3 yeaers. In this 3 years i have worked so many big companies and startups.</p>
        <div className='main-page-buttons'>
          <button className='gradient-button'>GET IN TOUCH</button><button className='non-gradient-button'>VIEW ALL WORKS</button>
        </div>
      </div>
      <div className='main-page-image'>
        <img src={imagee} alt='main-page-image' />
      </div>
    </div>
    
  );
}

export default MainPage;