// import { useState } from "react";
// import { Link } from "react-router-dom";
// import Diamond from "../../assets/Doctor.png";
// import name from "../../assets/name.png";
// import tick from "../../assets/tick.png";
// import smile from "../../assets/smile.png";
// import beats from "../../assets/beats.png";
// import heart from "../../assets/heart.png";
// import doc from "../../assets/Doc-logo.png";
// import call from "../../assets/emg-call.png"
// import { FaBars, FaTimes } from "react-icons/fa";
// import "./Home.css";

// function Home() {

//   const [activeIndex, setActiveIndex] = useState(0);
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   // const menuItems = ["Home", "Service", "About me", "Contact", "Blogs"];
//   const menuItems = [
//     { name: "Home", id: "home" },
//     { name: "Services", id: "services" },
//     { name: "About", id: "about" },
//     { name: "Contact", id: "contact" },
//     { name: "Blog", id: "blog" }
//   ];

//   return (
//     <div className="homeover">
//       <header className="header">
//         <div className="doc-logo"><img src={doc} alt="" /> <h5>Dr. C. Kavi Arasi</h5></div>
//         <div className="menu-icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
//           {isMenuOpen ? <FaTimes /> : <FaBars />}
//         </div>


//         <nav className={`nav-menu ${isMenuOpen ? "active" : ""}`}>
//           <ul>
//             {menuItems.map((item, index) => (
//               <li key={index}>
//                 {/* <a
//                   href="#"
//                   className={activeIndex === index ? "active" : ""}
//                   onClick={() => {
//                     setActiveIndex(index);
//                     setIsMenuOpen(false);
//                   }}
//                 >
//                   {item}
//                 </a> */}
//                  <Link 
//                   to={item.path} 
//                   className={activeIndex === index ? "active" : ""} 
//                   onClick={() => {
//                     setActiveIndex(index);
//                     setIsMenuOpen(false);
//                   }}
//                 >
//                   {item.name}
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         </nav>
//         <div className="head-btn">
//           <button className="head-btn1"><img src={call} alt="" />Emergency</button>
//           <button className="head-btn2">Book Appointment</button>
//         </div>
//       </header>

//       {/* Home Section */}
//       <section id="home" className="home">
//         <div className="home-left">
//           <div className="img-con">
//             <div className="tick">
//               <img src={tick} alt="tick.png" />
//               <h6>Regular <br /> Chekeup</h6>
//             </div>
//             <div className="smile">
//               <img src={smile} alt="smile.png" />
//               <h6>4k+ <br /><span className="inter">happy Patients</span></h6>
//             </div>
//           </div>
//           <span className="doc-img"><img src={Diamond} alt="Doctor" /> </span>
//         </div>
//         <div className="home-right">
//           <span className="centerlize">
//             <h5>Hi I am <img src={name} alt="name" /></h5>
//             <h1>DR.C.KAVI ARASI</h1>
//             <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis culpa asperiores.</p>
//             <div className="home-btn" >
//               <button className="head-btn2" >Book Consultation</button>
//               <button className="home-btn3" >Learn More</button>
//             </div>
//           </span>
//           <img className="beate" src={beats} alt="beat" />
//           <img className="heart" src={heart} alt="heart" />
//         </div>
//       </section>
//     </div>
//   );
// }

// export default Home;



import { useState } from "react";
import Diamond from "../../assets/Doctor.png";
import name from "../../assets/name.png";
import tick from "../../assets/tick.png";
import smile from "../../assets/smile.png";
import beats from "../../assets/beats.png";
import heart from "../../assets/heart.png";
import doc from "../../assets/Doc-logo.png";
import call from "../../assets/emg-call.png";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Home.css";

function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: "Home", id: "home" },
    { name: "Services", id: "services" },
    { name: "About", id: "about" },
    { name: "Contact", id: "contact" },
    { name: "Blog", id: "blog" }
  ];

  return (
    <div className="homeover">
      <header className="header">
        <div className="doc-logo">
          <img src={doc} alt="Doctor Logo" />
          <h5>Dr. C. Kavi Arasi</h5>
        </div>
        <div className="menu-icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </div>

        <nav className={`nav-menu ${isMenuOpen ? "active" : ""}`}>
          <ul>
            {menuItems.map((item, index) => (
              <li key={index}>
                <a
                  href={`#${item.id}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="head-btn">
          <button className="head-btn1">
            <img src={call} alt="Emergency Call" /> Emergency
          </button>
          <button className="head-btn2">Book Appointment</button>
        </div>
      </header>

      {/* Home Section */}
      <section id="home" className="home">
        <div className="home-left">
          <div className="img-con">
            <div className="tick">
              <img src={tick} alt="Regular Checkup" />
              <h6>Regular <br /> Checkup</h6>
            </div>
            <div className="smile">
              <img src={smile} alt="Happy Patients" />
              <h6>4k+ <br /><span className="inter">Happy Patients</span></h6>
            </div>
          </div>
          <span className="doc-img">
            <img src={Diamond} alt="Doctor" />
          </span>
        </div>
        <div className="home-right">
          <span className="centerlize">
            <h5>Hi I am <img src={name} alt="name" /></h5>
            <h1>DR.C.KAVI ARASI</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis culpa asperiores.</p>
            <div className="home-btn">
              <button className="head-btn2">Book Consultation</button>
              <button className="home-btn3">Learn More</button>
            </div>
          </span>
          <img className="beate" src={beats} alt="beat" />
          <img className="heart" src={heart} alt="heart" />
        </div>
      </section>
    </div>
  );
}

export default Home;
