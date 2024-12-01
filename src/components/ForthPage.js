import React from 'react';
import imagee from '../image/imagee.jpg';

function ForthPage() {
    return (
        <div className='forth-page'>
            <h1>EXPLORE OUR CLIENT FEEDBACKS</h1>
            <div className='forth-page-content'>
            <div className='feedback-cards'>
                    <img src={imagee} alt='imagee' />

                    <div  className='feedback-content'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <p> Suspendisse varius enim in eros elementum tristique. </p>
                        <p>Duis cursus, mi quis viverra ornare, eros dolor interdum nulla,</p>
                    </div>

                    <div  className='feedback-content'>
                        <h4>Full Name</h4>
                        <p>Company Name</p>
                    </div>
                </div>

                <div className='feedback-cards'>
                    <img src={imagee} alt='imagee' />

                    <div  className='feedback-content'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <p> Suspendisse varius enim in eros elementum tristique. </p>
                        <p>Duis cursus, mi quis viverra ornare, eros dolor interdum nulla,</p>
                    </div>

                    <div  className='feedback-content'>
                        <h4>Full Name</h4>
                        <p>Company Name</p>
                    </div>
                </div>

                <div className='feedback-cards'>
                    <img src={imagee} alt='imagee' />

                    <div  className='feedback-content'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <p> Suspendisse varius enim in eros elementum tristique. </p>
                        <p>Duis cursus, mi quis viverra ornare, eros dolor interdum nulla,</p>
                    </div>

                    <div  className='feedback-content'>
                        <h4>Full Name</h4>
                        <p>Company Name</p>
                    </div>
                </div>

                <div className='feedback-cards'>
                    <img src={imagee} alt='imagee' />

                    <div  className='feedback-content'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <p> Suspendisse varius enim in eros elementum tristique. </p>
                        <p>Duis cursus, mi quis viverra ornare, eros dolor interdum nulla,</p>
                    </div>

                    <div  className='feedback-content'>
                        <h4>Full Name</h4>
                        <p>Company Name</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ForthPage;