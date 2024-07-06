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
    <div>
      <div>
        <Navbar />
      </div>
      <div className="parallax-banner">
        <Banner></Banner>
      </div>
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
      <div>
        <About />
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
        <div className="parallax para-3 pb-20">
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
        <div className="parallax para-3 pb-20">
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
        <div className="parallax para-2">
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
        <div className=" parallax para-2 pt-40 pb-10">
          <Contact />
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
