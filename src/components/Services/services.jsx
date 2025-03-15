import React from 'react';
import artical1 from '../../assets/Article-Icon1.png';
import artical2 from '../../assets/Article-Icon2.png'
import artical3 from '../../assets/Article-Icon3.png'

import '../Services/servuces.css';

function Service() {
  return (
    <section id='services' className="Service">
      <div className='service-head'>
        <h1>Our Medical Services</h1>
        <p>Comprehensive healthcare solutions tailored to your needs with the latest medical <br />technology and expertise.</p>
      </div>
      <div className='service-items'>
        <div className='service-items1'>
            <img src={artical1} alt="" />
            <h2>General Consultation</h2>
            <p>Comprehensive medical check-ups and <br />consultations for all age groups.</p>
        </div>
        <div className='service-items1'>
        <img src={artical2} alt="" />
            <h2>General Consultation</h2>
            <p>Virtual consultations from the comfort of <br />your home.
            </p>
        </div>
        <div className='service-items1'>
        <img src={artical3} alt="" />
            <h2>General Consultation</h2>
            <p>Medical care at your doorstep for <br />emergency situations.
            </p>
        </div>
      </div>
    </section>
  );
}

export default Service;