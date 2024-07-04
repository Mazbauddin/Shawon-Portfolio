import "./Banner.css";

const Banner = () => {
  return (
    <div className="container mx-auto">
      <div className="hero min-h-screen">
        {/* particles js here */}

        <div className="hero-content flex">
          <div className="w-1/2">
            <img
              src="https://i.ibb.co/c6rrzLY/My-pic.png"
              className="w-full  min-h-screen"
            />
          </div>
          <div className=" w-1/2">
            <h1 className="text-5xl font-bold">
              <span className="port-name">Md. Mazba Uddin Shawon</span>
            </h1>
            <p className="py-6 text-right">Frontend Developer</p>
            <p className="py-6 text-justify">
              I am a frontend developer from Bangladesh with 1 years of
              experience.
            </p>

            <div className="hero-action">
              <div href="#" className="hero-connect">
                Connect With Me
              </div>
              <div href="#" className="hero-resume">
                <a
                  href="https://drive.google.com/file/d/17L-nzwaSwyOPvyf14zH4ukNET1sspTU_/view?usp=drive_link"
                  download="FileName"
                >
                  Download My Resume
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
