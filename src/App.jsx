import About from "./Components/About/About";
import Banner from "./Components/Banner/Banner";
import Contact from "./Components/Contact/Contact";
import Education from "./Components/Education/Education";
import Footer from "./Components/Footer/Footer";
import MyProject from "./Components/MyProject/MyProject";
import Navbar from "./Components/Navbar/Navbar";
import Skills from "./Components/Skills/Skills";
import Testimonial from "./Components/Testimonial/Testimonial";
import theme_pattern from "./assets/mongoNew.png";
import toast, { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="parallax-banner">
        <Banner></Banner>
      </div>
      <div>
        <About />
      </div>
      <div>
        <Skills />
      </div>
      {/* My Latest Project */}
      <div>
        <div className="heading">
          <div className="heading-title">
            <h1>My Latest Project</h1>
            <img className="-rotate-12" src={theme_pattern} alt="" />
          </div>
        </div>
        <div className="parallax para-3">
          <MyProject />
        </div>
      </div>
      {/* Testimonial */}
      <div>
        <div className="heading">
          <div className="heading-title">
            <h1>Testimonials</h1>
            <img src={theme_pattern} className="-rotate-12" alt="" />
          </div>
        </div>
        <div className="parallax para-2">
          <Testimonial />
        </div>
      </div>
      {/* Education */}
      <div>
        <div className="heading">
          <div className="heading-title">
            <h1>Education</h1>
            <img className="-rotate-12" src={theme_pattern} alt="" />
          </div>
        </div>
        <div className="">
          <Education />
        </div>
      </div>
      {/* contact */}
      <div>
        <div className="heading">
          <div className="heading-title">
            <h1>Get In Touch</h1>
            <img className="-rotate-12" src={theme_pattern} alt="" />
          </div>
        </div>
        <div className="">
          <Contact />
        </div>
      </div>
      {/* Footer */}
      <div>
        <Footer />
      </div>
      <Toaster />
    </div>
  );
};

export default App;
