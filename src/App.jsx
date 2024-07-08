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
import Wave from "react-wavify";

const App = () => {
  return (
    <div className="bg-white dark:bg-white text-slate-500 dark:text-slate-700">
      <div>
        <Navbar />
      </div>
      {/* Banner */}
      <div className="parallax-banner">
        <Banner></Banner>
      </div>
      {/* About */}
      <div>
        <Wave
          className="wave-area"
          fill="#ffffff"
          paused={false}
          style={{ display: "flex" }}
          options={{
            height: 80,
            amplitude: 40,
            speed: 0.2,
            points: 7,
          }}
        />
        <div className="heading">
          <div className="heading-title">
            <h1 className="">About</h1>
            <img src={theme_pattern} className="-rotate-12" alt="" />
          </div>
        </div>
        <div className="parallax para-2 about-section">
          <About />
        </div>
      </div>
      {/* Skills */}
      <div>
        <Wave
          className="wave-area"
          fill="#ffffff"
          paused={false}
          style={{ display: "flex" }}
          options={{
            height: 80,
            amplitude: 40,
            speed: 0.2,
            points: 7,
          }}
        />
        <div className="heading">
          <div className="heading-title">
            <h1>Skills</h1>
            <img src={theme_pattern} className="-rotate-12" alt="" />
          </div>
        </div>
        <div className="parallax para-3 pb-20 skills-section">
          <Skills />
        </div>
      </div>
      {/* My Latest Project */}
      <div>
        <Wave
          className="wave-area"
          fill="#ffffff"
          paused={false}
          style={{ display: "flex" }}
          options={{
            height: 80,
            amplitude: 40,
            speed: 0.2,
            points: 7,
          }}
        />
        <div className="heading">
          <div className="heading-title">
            <h1>My Latest Project</h1>
            <img className="-rotate-12" src={theme_pattern} alt="" />
          </div>
        </div>
        <div className="parallax para-3 pb-20 project-section">
          <MyProject className="" />
        </div>
      </div>
      {/* Testimonial */}
      <div>
        <Wave
          className="wave-area"
          fill="#ffffff"
          paused={false}
          style={{ display: "flex" }}
          options={{
            height: 80,
            amplitude: 40,
            speed: 0.2,
            points: 7,
          }}
        />
        <div className="heading">
          <div className="heading-title">
            <h1>Testimonials</h1>
            <img src={theme_pattern} className="-rotate-12" alt="" />
          </div>
        </div>
        <div className="parallax para-2 testimonial-section">
          <Testimonial />
        </div>
      </div>
      {/* Education */}
      <div>
        <Wave
          className="wave-area"
          fill="#ffffff"
          paused={false}
          style={{ display: "flex" }}
          options={{
            height: 80,
            amplitude: 40,
            speed: 0.2,
            points: 7,
          }}
        />
        <div className="heading">
          <div className="heading-title">
            <h1>Education</h1>
            <img className="-rotate-12" src={theme_pattern} alt="" />
          </div>
        </div>
        <div className="parallax-half para-2 education-section">
          <Education />
        </div>
      </div>
      {/* Contact */}
      <div>
        <Wave
          className="wave-area"
          fill="#ffffff"
          paused={false}
          style={{ display: "flex" }}
          options={{
            height: 80,
            amplitude: 40,
            speed: 0.2,
            points: 7,
          }}
        />
        <div className="heading">
          <div className="heading-title">
            <h1>Get In Touch</h1>
            <img className="-rotate-12" src={theme_pattern} alt="" />
          </div>
        </div>
        <div className="parallax para-3 pt-10 contact-section">
          <Contact className="" />
        </div>
      </div>
      {/* Footer */}
      <div>
        <Wave
          className="wave-area"
          fill="#111827"
          paused={false}
          style={{ display: "flex" }}
          options={{
            height: 80,
            amplitude: 40,
            speed: 0.2,
            points: 7,
          }}
        ></Wave>
        <Footer />
      </div>
    </div>
  );
};

export default App;
