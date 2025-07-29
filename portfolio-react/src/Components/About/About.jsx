import React from 'react'
import './About.css'
import theme_pattern from "../../assets/theme_pattern.svg"
import about_img from "../../assets/about_img.png"

const About = () => {
    return (
        <div id ='about' className = 'about'>
         <div className="about-title">
            <h1>About Me</h1>
            <img src ={theme_pattern} alt = ''/>
         </div>
         <div className="about-sections">
            <div className="about-left">
                <img src={about_img} alt="" />
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>Confident, calm, and always up for a challenge — I love taking the lead, communicating ideas clearly, and learning as I go.</p>
                    <p>Heading sponsorships at Club Pratibimb taught me how to manage, multitask, and solve real-world problems while making things happen.</p>
                </div>
                <div className="about-skills">
                    <div className="about-skill"><p>HTML & CSS</p><hr style = {{width:"80%"}} /></div>
                    <div className="about-skill"><p>React JS</p><hr style = {{width:"65%"}} /></div>
                    <div className="about-skill"><p>Data Structures & Algorithms</p><hr style = {{width:"70%"}} /></div>
                    <div className="about-skill"><p>MySQL</p><hr style = {{width:"70%"}} /></div>
                    <div className="about-skill"><p>Trading</p><hr style = {{width:"59%"}} /></div>
                </div>
            </div>
         </div>
         <div className="about-achievements">
            <div className="about-achievement">
                <h1>100+</h1>
                <p>LeetCode Qoestions</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1>7.37</h1>
                <p>Average CGPA</p>
            </div>
            <hr/>
            <div className="about-achievement">
                <h1>AIR 16449</h1>
                <p>JEE ADVANCED</p>
            </div>
         </div>
        </div>
    )
}

export default About