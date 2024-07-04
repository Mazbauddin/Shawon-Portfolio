import "./Navbar.css";

import { useState } from "react";
const Navbar = () => {
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
              <li>Home</li>
              <li>About Me</li>
              <li>Services</li>
              <li>Portfolio</li>
              <li>Contact</li>
              <div className=" flex items-center  justify-end w-full md:w-auto ">
                <div className="nav-connect">Hire Me</div>
              </div>
            </ul>
          </div>
        </header>
      </div>
    </div>
  );
};

export default Navbar;
