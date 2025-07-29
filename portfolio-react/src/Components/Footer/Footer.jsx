import React from 'react'
import './Footer.css'
import footer_logo from '../../assets/name.png'
import user_icon from '../../assets/user_icon.svg'

const Footer = () => {
    return (
        <div className= 'footer'>
            <div className="footer-top">
                <div className="footer-top-left">
                    <img src = {footer_logo} alt =""/>
                    <p>Running on ambition, caffeine, and a ‘let’s make it happen’ mindset.</p>
                </div>
                <div className="footer-top-right">
                    <div className="footer-email-input">
                        <img src ={user_icon} alt=""/>
                        <input type="email" placeholder="Enter Your E-Mail" />
                    </div>
                    <div className="footer-subscribe">Subscribe</div>
                </div>
            </div>
            <hr />
            <div className="footer-bottom">
                <p className="footer-bottom-left">© 2025 Mrudul Mehta. All rights</p>
                <div className="footer-bottom-right">
                    <p>Term of Services</p>
                    <p>Privacy Policy</p>
                    <p>Connect with me</p>
                </div>
            </div>
        </div>
    )
}

export default Footer