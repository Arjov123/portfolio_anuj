import React from 'react';
import '../css/footer.css';

function Footer() {
    return (
        <footer>
            <div className='footer-top'>
                <div className='footer-top-content'>
                    <p><text>Have An Awesome Project Idea? Let's Discuss</text></p>
                </div>
                <button className='gradient-button2'>Start Project</button>
            </div>

            <div className='footer'>
                <div className='footer-text'>
                    <h3>Jawad.com</h3>
                    <p>i am a freelance ui/ux designer with experience of 3 years. in this 3</p>
                    <p>years i have worked so many big companies & startups.</p>
                </div>

                <div className='footer-links'>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#aboutme">About Me</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>
            </div>

        </footer>
    );
}

export default Footer;