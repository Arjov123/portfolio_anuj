import React from 'react';
import '../css/mainpage.css';

function MainPage() {
  return (
    <div className='main-page'>
        <div className='main-page-text'>
            <text>Hello,</text><text className='gradient-text1'>I'm Jawad,</text>
            <br/>
            <text>ui/ux designer</text>
            <br/>
            <text>based in USA.</text>
            <p>
                I am a freelance ui/ux designer with experience of 3 yeaers. In this 3 years i</p>
                <p> have worked so many big companies and startups.
            </p>
            <button className='gradient-button-2'>GET IN TOUCH</button><button className='gradient-button'>VIEW ALL WORKS</button>
        </div>
        <div className='main-page-image'>
            <img src='https://i.ibb.co/9q53x7X/image-1.png' alt='main-page-image' />
        </div>
    </div>
  );
}

export default MainPage;