// import theme_pattern from "../../assets/theme_pattern.svg";
import theme_pattern from "../../assets/mongoNew.png";

const About = () => {
  return (
    <section id="about" className="container mx-auto">
      <div className="heading">
        <div className="heading-title">
          <h1>About Me</h1>
          <img className="-rotate-12" src={theme_pattern} alt="" />
        </div>
      </div>

      <div className="hero min-h-screen border-2">
        {/* particles js here */}

        <div className="hero-content flex">
          <div className=" w-1/2">
            <h1 className="text-5xl font-bold">
              <span className="port-name">Md. Mazba Uddin Shawon</span>
            </h1>
            <p className="py-6 text-right">Frontend Developer</p>
            <p className="py-6 text-justify">
              A highly motivated and detail-oriented front-end developer seeking
              to leverage expertise in HTML, CSS, JavaScript, React.js, and
              modern UI frameworks like Tailwind CSS and Material-Tailwind to
              create user-friendly, responsive, and dynamic web applications.
              Passionate about delivering high-quality code and improving user
              experience through innovative solutions.
            </p>

            <div className="hero-action">
              <div
                href="#"
                className="hero-connect bg-gradient-to-r from-cyan-500 to-blue-500 text-white"
              >
                Connect With Me
              </div>
              <div href="#" className="about-resume">
                <a
                  href="https://drive.google.com/file/d/17L-nzwaSwyOPvyf14zH4ukNET1sspTU_/view?usp=drive_link"
                  download="FileName"
                  className=""
                >
                  Download My Resume
                </a>
              </div>
            </div>
          </div>
          <div className="w-1/2">
            <img
              src="https://i.ibb.co/c6rrzLY/My-pic.png"
              className="w-full  min-h-screen"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
