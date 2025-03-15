import React, { useState } from "react";
import axios from "axios";
import '../contact/AppointmentForm.css'
import tweet from '../../assets/Tweet.png';
import insta from '../../assets/insta.png';
import facebook from '../../assets/Facebook.png';
import email from '../../assets/Email.png';
import phone from '../../assets/Phone.png';
import location from '../../assets/location.png';

const AppointmentForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        age: "",
        email: "",
        problem: "",
        date: "",
        time: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post("https://booked-appointments.vercel.app/api/book-appointment", formData);
            alert("Appointment booked successfully!");
            setFormData({ name: "", age: "", email: "", problem: "", date: "", time: "" });
        } catch (error) {
            console.error("Error booking appointment:", error);
        }
    };

    return (
        <section id="contact" className="appointment">
            <div className="appointment-right">
                <div className="appiontment-con">
                    <h1>Get in Touch</h1>
                    <p>Schedule an appointment or reach out for any inquiries. We're here to help</p>
                    <div className="name-arrange">
                        <img src={location} alt="" />
                        <h3>123 Medical Center, Chennai, India</h3>
                    </div>
                    <div className="name-arrange">
                        <img src={phone} alt="" />
                        <h3>+91 123 456 7890</h3>
                    </div>
                    <div className="name-arrange">
                        <img src={email} alt="" />
                        <h3>dr.kaviarasi@gmail.com</h3>
                    </div>

                </div>
                <div className="social-media">
                    <img src={facebook} alt="" />
                    <img src={insta} alt="" />
                    <img src={tweet} alt="" />
                </div>
            </div>
            <div className="form-container">
                <h2>Book an Appointment</h2>
                <form onSubmit={handleSubmit}>
                    <input type="text" name="name" placeholder="  Name" value={formData.name} onChange={handleChange} required />
                    <input type="text" name="age" placeholder="  Age" value={formData.age} onChange={handleChange} required />
                    <input type="email" name="email" placeholder="  Email" value={formData.email} onChange={handleChange} required />
                    <textarea name="problem" placeholder="Describe your problem" value={formData.problem} onChange={handleChange} required></textarea>
                    <input type="date" name="date" value={formData.date} onChange={handleChange} required />
                    <input type="time" name="time" value={formData.time} onChange={handleChange} required />
                    <button type="submit">Confirm Booking</button>
                </form>
            </div>
        </section>
    );
};

export default AppointmentForm;
