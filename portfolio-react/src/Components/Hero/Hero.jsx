import React from 'react'
import { Link } from 'react-scroll';
import './Hero.css'
import profile_img from '../../assets/profile_img.jpg'
import myResume from '../../assets/Resume_Mrudul_Kumar_Mehta.pdf';

const Hero = () => {
    return(
        <div id ='home' className = "hero">
            <img src = {profile_img} alt =""/>
            <h1><span>I'm Mrudul Mehta</span>, Student at SGSITS Indore.</h1>
            <p>A dedicated and confident individual, eager to learn and grow. Open to opportunities where I can contribute with hard work, passion, and a problem-solving mindset.</p>
            <div className="hero-action">
                <Link to="contact" smooth={true} duration={500} className="hero-connect">
                    Connect with me
                </Link>
                <div className="hero-resume"  onClick={() => window.open(myResume, '_blank')}  style={{ cursor: 'pointer' }}>
                    My resume
                </div>
            </div>
        </div>
    )
}

export default Hero