import About from "./Components/About/About";
import Banner from "./Components/Banner/Banner";
import Navbar from "./Components/Navbar/Navbar";

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
    </div>
  );
};

export default App;
