import About from "./Components/About/About";
import Banner from "./Components/Banner/Banner";
import Education from "./Components/Education/Education";
import MyProject from "./Components/MyProject/MyProject";
import Navbar from "./Components/Navbar/Navbar";
import Skills from "./Components/Skills/Skills";
import Testimonial from "./Components/Testimonial/Testimonial";
import theme_pattern from "./assets/theme_pattern.svg";

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
        <MyProject />
      </div>
      {/* Testimonial */}
      <div>
        <div className="about-title">
          <h1 className="text-red-500">Testimonial</h1>
          <img src={theme_pattern} alt="" />
        </div>
        <div className="parallax para-2">
          <Testimonial />
        </div>
      </div>
      {/* Education */}
      <div>
        <div className="about-title">
          <h1 className="text-red-500">Education</h1>
          <img src={theme_pattern} alt="" />
        </div>
        <div className="parallax para-2">
          <Education />
        </div>
      </div>
    </div>
  );
};

export default App;
