import "./Navbar.css";
import theme_pattern from "../../assets/nav_underline.svg";
import { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const [navbar, setNavbar] = useState(false);

  // sticky menu
  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener("scroll", changeBackground);
  // end sticky menu
  return (
    <div className="max-w-[1920px] mx-auto ">
      <div className={navbar ? "navbar active" : "navbar shadow-2xl"}>
        <header className="h-20  flex w-full dark:bg-[#120505] px-5 md:px-[50px] lg:px-[80px] xl:px-[120px] 2xl:px-[150px]">
          <div className="logo flex flex-shrink-0 items-center">
            {/* <img src={logo} alt="" /> */}
            <p className="text-4xl text-white">Mazba</p>
          </div>
          <div className="header-links md:contents font-medium text-base ">
            <ul className="ml-4 text-white  mr-auto w-full justify-center dark:text-orange-500 nav-menu flex items-center gap-16 text-xl">
              <li>
                <AnchorLink className="anchor-link" href="#home">
                  <p onClick={() => setMenu("home")}>Home</p>
                </AnchorLink>
                {menu === "home" ? <img src={theme_pattern} alt="" /> : <></>}
              </li>
              <li>
                <AnchorLink className="anchor-link" offset={150} href="#about">
                  <p onClick={() => setMenu("about")}>About Me</p>
                </AnchorLink>
                {menu === "about" ? <img src={theme_pattern} alt="" /> : <></>}
              </li>
              <li>
                <AnchorLink
                  className="anchor-link"
                  offset={420}
                  href="#services"
                >
                  <p onClick={() => setMenu("services")}>Services</p>
                </AnchorLink>
                {menu === "services" ? (
                  <img src={theme_pattern} alt="" />
                ) : (
                  <></>
                )}
              </li>
              <li>
                <AnchorLink className="anchor-link" offset={400} href="#work">
                  <p onClick={() => setMenu("work")}>Portfolio</p>
                </AnchorLink>
                {menu === "work" ? <img src={theme_pattern} alt="" /> : <></>}
              </li>
              <li>
                <AnchorLink
                  className="anchor-link"
                  offset={300}
                  href="#contact"
                >
                  <p onClick={() => setMenu("contact")}>Contact</p>
                </AnchorLink>
                {menu === "contact" ? (
                  <img src={theme_pattern} alt="" />
                ) : (
                  <></>
                )}
              </li>
              <div className=" flex items-center  justify-end w-full md:w-auto ">
                <div className="nav-connect">
                  <AnchorLink
                    className="anchor-link"
                    offset={300}
                    href="#contact"
                  >
                    Hire Me
                  </AnchorLink>
                </div>
              </div>
            </ul>
          </div>
        </header>
      </div>
    </div>
  );
};

export default Navbar;
