import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";

const About = () => {
  return (
    <section>
      <div className="heading">
        <div className="heading-title">
          <h1>About Me</h1>
          <img src={theme_pattern} alt="" />
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
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio non
              cum illo accusamus maxime inventore minus quae nobis obcaecati
              eaque culpa aspernatur, saepe provident sequi fuga molestias
              beatae nesciunt sunt.
            </p>

            <div className="hero-action">
              <div href="#" className="hero-connect">
                Connect With Me
              </div>
              <div href="#" className="hero-resume">
                Download My Resume
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
