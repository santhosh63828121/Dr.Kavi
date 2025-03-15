import React from "react";
import Left from '../../assets/self.png';
import education from '../../assets/education.png';
import languages from '../../assets/Languages.png';
import anotomy from '../../assets/anotomy.png';
import experience from '../../assets/experience.png';
import '../About/About.css'
function About() {
    return (
        <section id="about" className="about-head">
            <div className="about-main">
                <div className="about-left">
                    <img src={Left} alt="Doctor-img" />
                </div>
                <div className="about-right">
                     <h1>About Dr. C. Kavi Arasi</h1>
                     <p>With over 2 years of dedicated medical practice, I specialize in providing comprehensive healthcare solutions in Surgery, Cardiology, Dentistry, and Implantology.</p>
                     <div className="about-content">
                        <div className="about-division">
                        <div className="about-content1">
                            <img src={education} alt="" />
                            <h3>Education</h3>
                            <h4>MBBS</h4>
                        </div>
                        <div  className="about-content1">
                        <img src={languages} alt="" />
                            <h3>Languages</h3>
                            <h4>English, Tami</h4>
                        </div>
                        </div>
                        <div className="about-division">
                        <div  className="about-content1">
                        <img src={anotomy} alt="" />
                            <h3> Awards</h3>
                            <h4> Honor in Anatomy</h4>
                        </div>
                        <div  className="about-content1">
                        <img src={experience} alt="" />
                            <h3>Experience</h3>
                            <h4>2+ Years</h4>
                        </div>
                        </div>
                     </div>
                </div>
            </div>
        </section>
    );
}

export default About;