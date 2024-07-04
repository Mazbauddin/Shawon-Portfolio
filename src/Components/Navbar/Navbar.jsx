import "./Navbar.css";
import logo from "../../assets/logo.svg";
const Navbar = () => {
  return (
    <div className="container mx-auto">
      <div className="navbar flex items-center justify-between ">
        <img src={logo} alt="" />
        <ul className="nav-menu flex items-center gap-16 text-xl">
          <li>Home</li>
          <li>About Me</li>
          <li>Services</li>
          <li>Portfolio</li>
          <li>Contact</li>
        </ul>
        <div className="nav-connect">Connect With Me</div>
      </div>
    </div>
  );
};

export default Navbar;
