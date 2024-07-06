import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="bg-[#111827] dark:bg-[#111827] text-white">
      <div className="container p-6 mx-auto">
        <div className="lg:flex">
          <div className="w-full -mx-6 lg:w-2/5">
            <div className="px-6">
              <a className="text-4xl text-white" href="/">
                Mazba Uddin
              </a>
              <p className="max-w-sm mt-2 text-gray-500 dark:text-gray-400">
                Please Contact Me.
              </p>

              <div className="flex gap-5 mt-10">
                <a
                  className="social-link bg-[#0966ff] hover:text-[#0966ff] hover:bg-white text-white border-2 border-[#0966ff] hover:border-transparent"
                  href="https://www.facebook.com/mazbashawon"
                >
                  <FaFacebookF />
                </a>
                <a
                  className="social-link bg-[#0a66c2] hover:text-[#0a66c2] hover:bg-white text-white border-2 border-[#0a66c2] hover:border-transparent"
                  href="https://www.linkedin.com/in/mazba-uddin-shawon/"
                >
                  <FaLinkedinIn />
                </a>
                <a
                  className="social-link bg-[#1f2328] hover:text-[#1f2328] hover:bg-white text-white border-2 border-[#1f2328] hover:border-transparent"
                  href="https://github.com/Mazbauddin"
                >
                  <FaGithub />
                </a>
                <a
                  href="mailto: mazbauddin2010@gmail.com"
                  className="social-link bg-[#ff0000] hover:text-[#ff0000] hover:bg-white text-white border-2 border-[#1f2328] hover:border-transparent"
                >
                  <SiGmail />
                </a>
              </div>
            </div>
          </div>

          <div className="mt-6 lg:mt-0 lg:flex-1">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              <div>
                <h3 className="text-gray-700 uppercase dark:text-white">
                  About
                </h3>
                <a
                  href="#"
                  className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"
                >
                  Portfolio
                </a>
                <a
                  href="#"
                  className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"
                >
                  My Project
                </a>
                <a
                  href="#"
                  className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"
                >
                  Testimonails
                </a>
              </div>

              <div>
                <h3 className="text-gray-700 uppercase dark:text-white">
                  Blog
                </h3>
                <a
                  href="#"
                  className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"
                >
                  Latest Posts
                </a>
                <a
                  href="#"
                  className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"
                >
                  Archives
                </a>
                <a
                  href="#"
                  className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"
                >
                  Categories
                </a>
              </div>

              <div>
                <h3 className="text-gray-700 uppercase dark:text-white">
                  Services
                </h3>
                <a
                  href="#"
                  className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"
                >
                  Web Design
                </a>
                <a
                  href="#"
                  className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"
                >
                  Web Development
                </a>
                <a
                  href="#"
                  className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"
                >
                  Responsive Design
                </a>
              </div>

              <div>
                <h3 className="text-gray-700 uppercase dark:text-white">
                  Contact
                </h3>
                <span className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">
                  +8801787769270
                </span>
                <span className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">
                  mazbauddin2010@email.com
                </span>
              </div>
            </div>
          </div>
        </div>

        <hr className="h-px my-6 bg-gray-200 border-none dark:bg-gray-700" />

        <div>
          <p className="text-center text-gray-500 dark:text-gray-400">
            © Mazba Uddin Shawon 2024 - All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
