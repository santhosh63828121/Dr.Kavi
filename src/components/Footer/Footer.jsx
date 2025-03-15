import React from "react";
import docLogo from '../../assets/Doc-logo.png';
import Location from '../../assets/location.png';
import Email from '../../assets/Email.png';
import Phone from '../../assets/Phone.png';


import '../Footer/Footer.css'

function Footer() {
    return(
        <div className="Footer">
            <div className="foot-top">
                <div className="foot-items">
                    <div className="foot-contentss">
                        <div className="logo-alt">
                        <img className="logo" src={docLogo} alt="" />
                        <h3>Dr. C. Kavi Arasi</h3> 
                        </div>
                        <p>Providing quality healthcare <br /> services with a personal Care</p>
                    </div>
                    <div className="foot-contents">
                        <img src={Location} alt="" />
                        <h3>123 Medical Center, <br />Chennai India. </h3> 
                    </div>
                    <div className="foot-contents">
                        <img src={Phone} alt="" />
                        <h3>+91 123 456 7890 </h3> 
                    </div>
                    <div className="foot-contents">
                        <img src={Email} alt="" />
                        <h3> dr.kaviarasi@gmail.com </h3> 
                    </div>
                   
                </div>
                <div className="foot-items">
                    <h3>Quick Links</h3>
                    <h4>Home</h4>
                    <h4>Service</h4>
                    <h4>About</h4>
                    <h4>Contact</h4>
                </div>
                <div className="foot-items">
                    <h3>Services</h3>
                    <h4>General Consultation</h4>
                    <h4>Online Consultation</h4>
                    <h4>Home Visits</h4>
                </div>
                <div className="foot-items">
                    <h3>Working Hours</h3>
                    <h4>Monday - Friday: 9AM - 6PM</h4>
                    <h4>Saturday: 9AM - 4PM</h4>
                    <h4>Sunday: Emergency Only</h4>
                </div>
            </div>
            <hr className="line" />
            <div className="Foot-last" >
                <h3>© 2025 Dr. C. Kavi Arasi. All rights reserved</h3>
                <h4>Designed by Santhosh Raj V | Developed by Santhosh D</h4>
            </div>
        </div>
    );
}

export default Footer;