import AnchorLink from "react-anchor-link-smooth-scroll";
import "./Banner.css";
import { FaDownload } from "react-icons/fa";

const Banner = () => {
  return (
    <div id="home" className="max-w-6xl mx-auto">
      <div className="hero min-h-screen">
        {/* particles js here */}

        <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-5 banner-area items-center">
          <div className="col-span-2 profile-img">
            <img
              src="https://i.ibb.co/c6rrzLY/My-pic.png"
              className="w-full profile-image lg:min-h-screen"
            />
          </div>
          <div className="banner-content col-span-3 sm:mt-10 md:mt-20 lg:mt-20">
            <h1 className="text-5xl font-bold text-right">
              <span className="port-name">Md. Mazba Uddin Shawon</span>
            </h1>
            <p className="py-6 text-right md:text-3xl lg:text-3xl pr-3 font-bold">
              Frontend Developer
            </p>
            <p className="pb-6 text-right">
              I am a frontend developer from Bangladesh with 1 years of
              experience.
            </p>

            <div className="hero-action justify-end">
              <div
                href="#"
                className="hero-connect bg-gradient-to-r from-cyan-500 to-blue-500"
              >
                <AnchorLink
                  className="anchor-link"
                  offset={400}
                  href="#contact"
                >
                  Connect With Me
                </AnchorLink>
              </div>
              <div href="#" className="hero-resume">
                <a
                  href="https://drive.google.com/file/d/17L-nzwaSwyOPvyf14zH4ukNET1sspTU_/view?usp=drive_link"
                  download="FileName"
                  className="flex items-center"
                >
                  <FaDownload className="mr-3" /> <span>Download Resume</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
