import React from "react";
import test1 from '../../assets/test1.png';
import test2 from '../../assets/test2.png';
import test3 from '../../assets/test3.png';

import '../Testimonials/Testimonials.css'

function Testimonials() {
    return (
        <div className="test-head">
            <div className="start-head">
                <h1>Patient Testimonials</h1>
                <p>Read what our patients say about their experience with us.</p>
            </div>
            <div className="test-content">
                <div className="test-content1">
                    <div className="content-pic">
                        <img src={test1} alt="" />
                        <h2>Sarah Johnson <br /> <span>Cardiac Patient</span></h2>
                    </div>
                    <p>Dr. Kavi Arasi provided exceptional care <br />during my cardiac treatment. Her <br /> expertise and compassionate approach <br />made all the difference" </p>
                </div>
                <div className="test-content1">
                    <div className="content-pic">
                    <img src={test2} alt="" />
                    <h2>Sarah Johnson <br /> <span>Cardiac Patient</span></h2>
                    </div>
                    <p>The dental implant procedure was <br />smooth and painless. I'm extremely <br />
                     sotisfied with the results and  ongoing <br />care. </p>
                </div>
                <div className="test-content1">
                    <div className="content-pic">
                    <img src={test3} alt="" />
                    <h2>Sarah Johnson <br /> <span>Cardiac Patient</span></h2>
                    </div>
                    <p>Dr. Kavi Arasis surgical expertise and attention <br /> to detail ensured a successful procedure <br /> and quick recovery"</p>
                </div>
            </div>
        </div>
    );
}

export default Testimonials;