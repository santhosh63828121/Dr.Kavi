// import Home from "./components/Home/Home"
// import Service from "./components/Services/services";
// import ServiceOutline from "./components/Service-outline/Service-outline";
// import Testimonials from "./components/Testimonials/Testimonials";
// import About from "./components/About/about";
// import Blog from "./components/Blogs/Blog";
// import AppointmentForm from "./components/contact/AppointmentForm";
// import Footer from "./components/Footer/Footer";
// import { BrowserRouter } from "react-router-dom";
// import './App.css'
// import React from "react";

// function App() {

//   return (
//     <>
//        <BrowserRouter>
//             <Home/>
//             <Service/>
//             <ServiceOutline/>
//             <Testimonials/>
//             <About/>
//             <Blog/>
//             <AppointmentForm />
//             <Footer/>
//         </BrowserRouter>
//     </>
//   )
// }

// export default App




import Home from "./components/Home/Home";
import Service from "./components/Services/services";
import ServiceOutline from "./components/Service-outline/Service-outline";
import Testimonials from "./components/Testimonials/Testimonials";
import About from "./components/About/About";
import Blog from "./components/Blogs/Blog";
import AppointmentForm from "./components/contact/AppointmentForm";
import Footer from "./components/Footer/Footer";
import './App.css';
import React from "react";

function App() {
  return (
    <>
      <Home />
      <Service />
      <ServiceOutline />
      <Testimonials />
      <About />
      <Blog />
      <AppointmentForm />
      <Footer />
    </>
  );
}

export default App;


