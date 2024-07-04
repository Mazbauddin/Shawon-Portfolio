import About from "./Components/About/About";
import Banner from "./Components/Banner/Banner";
import Education from "./Components/Education/Education";
import Footer from "./Components/Footer/Footer";
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
        <div className="heading">
          <div className="heading-title">
            <h1>Testimonials</h1>
            <img src={theme_pattern} alt="" />
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
            <img src={theme_pattern} alt="" />
          </div>
        </div>
        <div className="parallax para-2">
          <Education />
        </div>
      </div>
      {/* Footer */}
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default App;
