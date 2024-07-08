import "./Navbar.css";
import theme_pattern from "../../assets/nav_underline.svg";
import { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import menu_Open from "../../assets/menu_open.svg";
import { IoCloseSharp } from "react-icons/io5";

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const [navbar, setNavbar] = useState(false);
  const [isOpen, isSetOpen] = useState(false);

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
        <header className="h-20  flex w-full  px-5 md:px-[50px] lg:px-[80px] xl:px-[120px] 2xl:px-[150px]">
          <div className="logo flex w-3/4 md:w-1/4 lg:w-1/4 items-center">
            {/* <img src={logo} alt="" /> */}
            <a
              className=" text-2xl md:text-4xl lg:text-4xl text-white font-bold"
              href="/"
            >
              Mazba Uddin
            </a>
          </div>
          <div className="header-links md:contents font-medium text-base ">
            <ul
              // ref={menuRef}
              className="ml-4 text-white  mr-auto  justify-center dark:text-white nav-menu flex items-center gap-16 text-lg"
            >
              <img
                // src={menu_Close}
                // onClick={closeMenu}
                className="nav-mobile-close"
                alt=""
              />
              <li>
                <AnchorLink className="anchor-link" href="#home">
                  <p onClick={() => setMenu("home")}>Home</p>
                </AnchorLink>
                {menu === "home" ? <img src={theme_pattern} alt="" /> : <></>}
              </li>
              <li>
                <AnchorLink className="anchor-link" offset={300} href="#about">
                  <p onClick={() => setMenu("about")}>About Me</p>
                </AnchorLink>
                {menu === "about" ? <img src={theme_pattern} alt="" /> : <></>}
              </li>
              <li>
                <AnchorLink
                  className="anchor-link"
                  offset={370}
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
                  offset={400}
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
                <div className="nav-connect bg-gradient-to-r from-cyan-500 to-blue-500">
                  <AnchorLink
                    className="anchor-link"
                    offset={400}
                    href="#contact"
                  >
                    Hire Me
                  </AnchorLink>
                </div>
              </div>
            </ul>
          </div>
          {/* Drawer */}
          <button
            onClick={() => isSetOpen(!isOpen)}
            className="text-4xl text-[#fea100] relative flex items-center  justify-end w-full md:w-auto md:hidden mr-10"
          >
            {isOpen ? (
              <IoCloseSharp className="text-4xl text-white" />
            ) : (
              <img
                src={menu_Open}
                // onClick={openMenu}
                alt=""
                className=""
              />
              // <FaHamburger className="text-4xl text-white" />
            )}
          </button>
        </header>
        {/* Side Menu */}
        <div
          className={` ${
            isOpen ? "top-24" : "top-[-490px]"
          } absolute md:hidden  bg-base-100 shadow-lg  w-56 overflow-y-auto top-0 left-0 transition-all duration-1000 ease-in dark:bg-[#120505] dark:text-white z-50`}
        >
          <div className="pb-4 pl-4">
            <ul className="mt-6 flex flex-col gap-4 ml-5">
              {/* li */}
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
                <div className="nav-connect bg-gradient-to-r from-cyan-500 to-blue-500">
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
        </div>
      </div>
    </div>
  );
};

export default Navbar;
