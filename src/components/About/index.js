import React from 'react';
import { LoremIpsum } from 'react-lorem-ipsum';
import "./about.css"

function About() {
    return (
        <section>
            <div className="center" id='about'>
                <h1 className="page-header">About Me</h1>
            </div>
            <div className='center'>
            <img
                src={require('../../assets/images/Kraig-550.jpg')}
                alt="about-me"
                className="photo"
            />
            </div>
            <div>
                <span>
                    <LoremIpsum p={2} />
                </span>
            </div>
        </section>
    );
}

export default About;