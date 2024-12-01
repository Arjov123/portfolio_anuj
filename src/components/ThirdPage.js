import React from 'react';
import imagee from '../image/imagee.jpg';
import '../css/thirdpage.css';


function ThirdPage() {
    return (
        <div>
            <h1>MY Client Projects</h1>
            <div className='third-page'>
                <div className='third-page-text'>
                    <p><text>WEB DESIGN</text></p>
                    <p>I have done more that 500+ web designs with 5 star feedbacks.</p>
                </div>
                <div className='third-page-image'>
                    <img src={imagee} alt='third-page-image' />
                </div>
                <div className='third-page-project'>
                    <p><text>500+ project</text></p>
                </div>
            </div>


            <div className='third-page'>
                <div className='third-page-text'>
                    <p><text>APP DESIGN</text></p>
                    <p>Did so many complex app designs with top brands and start ups.</p>
                </div>
                <div className='third-page-image'>
                    <img src={imagee} alt='third-page-image' />
                </div>
                <div className='third-page-project'>
                    <p><text>350+ project</text></p>
                </div>
            </div>


            <div className='third-page'>
                <div className='third-page-text'>
                    <p><text>DASHBOARD</text></p>
                    <p>I have designed so many complex dashboards of saas, e-commerce, etc.</p>
                </div>
                <div className='third-page-image'>
                    <img src={imagee} alt='third-page-image' />
                </div>
                <div className='third-page-project'>
                    <p><text>500+ project</text></p>
                </div>
            </div>
        </div>
    )
}

export default ThirdPage;