const MyProject = () => {
  return (
    <div id="work" className="container mx-auto">
      {/* My Project */}
      <div className="project-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        <div className="project-formet flex flex-col max-w-lg p-6 space-y-6 overflow-hidden rounded-lg shadow-md dark:bg-gray-50 dark:text-gray-800 border-2">
          <div className="flex space-x-4">
            <img
              alt=""
              src="https://media.licdn.com/dms/image/D5603AQFNKG0SvF5dPg/profile-displayphoto-shrink_200_200/0/1719836196777?e=1725494400&v=beta&t=uCgpRC5ZOUu2IkFySCXbKkJhwqckcPacYajZ6FE7_lc"
              className="object-cover w-12 h-12 rounded-full shadow dark:bg-gray-500"
            />
            <div className="flex flex-col space-y-1">
              <a
                rel="noopener noreferrer"
                href="#"
                className="text-sm font-semibold"
              >
                Md. Mazba Uddin Shawon
              </a>
              <span className="text-xs dark:text-gray-600 text-left">
                Published Date: 10/05/2024
              </span>
            </div>
          </div>
          <div>
            <img
              src="https://i.ibb.co/K6JYfK9/p2.png"
              alt=""
              className="object-cover w-full mb-4 h-40 sm:h-60 dark:bg-gray-500"
            />
            <h2 className="mb-1 text-xl font-semibold">Gravity</h2>
            <p className="text-sm dark:text-gray-600 text-left mt-5">
              Web development is the process of building, programming...
            </p>
            <div className="text-sm dark:text-gray-600 mt-5 text-left">
              <p>01. Eye Catching Testimonial</p>
              <p>02. Login Page</p>
              <p>03. Sticky Menu</p>
            </div>
            <div>
              <div className="mt-5">
                <p>Technology Used:</p>
              </div>
              <p className="text-sm dark:text-gray-600 grid grid-cols-3 gap-5">
                {/* {project.technology} */}
                <button className="project-btn"># HTML</button>
                <button className="project-btn"># CSS</button>
                <button className="project-btn"># JavaScript</button>
                <button className="project-btn"># React</button>
                <button className="project-btn"># Tailwind CSS</button>
                <button className="project-btn"># Firebase</button>
                <button className="project-btn"># Node js</button>
                <button className="project-btn"># Express js</button>
                <button className="project-btn"># MongoDB</button>
              </p>
            </div>
            {/* Project live */}
            <div className="flex flex-col gap-5 mt-8">
              <a
                href="https://github.com/Mazbauddin/Gravity-Client-Side"
                target="_blank"
                className="text-sm font-semibold hover:text-blue-500 dark:text-blue-300"
              >
                Github: Source Code client
              </a>
              <a
                href="https://github.com/Mazbauddin/Gravity-Server-Side"
                target="_blank"
                className="text-sm font-semibold hover:text-blue-500 dark:text-blue-300"
              >
                Github: Source Code Server
              </a>
            </div>

            <div className="mt-10 live-project">
              <a
                href="https://gravity-96df3.web.app/"
                target="_blank"
                className="live-btn bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-sm font-semibold hover:text-black "
              >
                Live Preview
              </a>
            </div>
          </div>
        </div>
        <div className="project-formet flex flex-col max-w-lg p-6 space-y-6 overflow-hidden rounded-lg shadow-md dark:bg-gray-50 dark:text-gray-800 border-2">
          <div className="flex space-x-4">
            <img
              alt=""
              src="https://media.licdn.com/dms/image/D5603AQFNKG0SvF5dPg/profile-displayphoto-shrink_200_200/0/1719836196777?e=1725494400&v=beta&t=uCgpRC5ZOUu2IkFySCXbKkJhwqckcPacYajZ6FE7_lc"
              className="object-cover w-12 h-12 rounded-full shadow dark:bg-gray-500"
            />
            <div className="flex flex-col space-y-1">
              <a
                rel="noopener noreferrer"
                href="#"
                className="text-sm font-semibold"
              >
                Md. Mazba Uddin Shawon
              </a>
              <span className="text-xs dark:text-gray-600 text-left">
                Published Date: 27/03/2024
              </span>
            </div>
          </div>
          <div>
            <img
              src="https://i.ibb.co/DL0Vv7s/p1.png"
              alt=""
              className="object-cover w-full mb-4 h-40 sm:h-60 dark:bg-gray-500"
            />
            <h2 className="mb-1 text-xl font-semibold">Luxury</h2>
            <p className="text-sm dark:text-gray-600 mt-5 text-left">
              Web development is the process of building, programming...
            </p>
            <div className="text-sm dark:text-gray-600 mt-5 text-left">
              <p>01. Eye Catching Testimonial</p>
              <p>02. Login Page</p>
              <p>03. Sticky Menu</p>
            </div>
            <div>
              <div className="mt-5">
                <p>Technology Used:</p>
              </div>
              <p className="text-sm dark:text-gray-600 grid grid-cols-3 gap-5">
                {/* {project.technology} */}
                <button className="project-btn"># HTML</button>
                <button className="project-btn"># CSS</button>
                <button className="project-btn"># JavaScript</button>
                <button className="project-btn"># React</button>
                <button className="project-btn"># Tailwind CSS</button>
                <button className="project-btn"># Firebase</button>
                <button className="project-btn"># Node js</button>
                <button className="project-btn"># Express js</button>
                <button className="project-btn"># MongoDB</button>
              </p>
            </div>

            {/* Project live */}
            <div className="flex flex-col gap-5 mt-8">
              <a
                href="https://github.com/Mazbauddin/Luxury-Restaurant"
                target="_blank"
                className="text-sm font-semibold hover:text-blue-500 dark:text-blue-300"
              >
                Github: Source Code client
              </a>
              <a
                href="https://github.com/Mazbauddin/Luxury-Restaurant-server"
                target="_blank"
                className="text-sm font-semibold hover:text-blue-500 dark:text-blue-300"
              >
                Github: Source Code Server
              </a>
            </div>

            <div className="mt-10 live-project">
              <a
                href="https://luxury-restaurants.web.app/"
                target="_blank"
                className="live-btn bg-gradient-to-r from-cyan-500 to-blue-500  text-white text-sm font-semibold hover:text-black "
              >
                Live Preview
              </a>
            </div>
          </div>
        </div>
        <div className="project-formet flex flex-col max-w-lg p-6 space-y-6 overflow-hidden rounded-lg shadow-md dark:bg-gray-50 dark:text-gray-800 border-2">
          <div className="flex space-x-4">
            <img
              alt=""
              src="https://media.licdn.com/dms/image/D5603AQFNKG0SvF5dPg/profile-displayphoto-shrink_200_200/0/1719836196777?e=1725494400&v=beta&t=uCgpRC5ZOUu2IkFySCXbKkJhwqckcPacYajZ6FE7_lc"
              className="object-cover w-12 h-12 rounded-full shadow dark:bg-gray-500"
            />
            <div className="flex flex-col space-y-1">
              <a
                rel="noopener noreferrer"
                href="#"
                className="text-sm font-semibold"
              >
                Md. Mazba Uddin Shawon
              </a>
              <span className="text-xs dark:text-gray-600 text-left">
                Published Date: 22/04/2024
              </span>
            </div>
          </div>
          <div>
            <img
              src="https://i.ibb.co/4SZcZh2/p3.png"
              alt=""
              className="object-cover w-full mb-4 h-40 sm:h-60 dark:bg-gray-500"
            />
            <h2 className="mb-1 text-xl font-semibold">Heaven</h2>
            <p className="text-sm dark:text-gray-600 mt-5 text-left">
              Web development is the process of building, programming...
            </p>
            <div className="text-sm dark:text-gray-600 mt-5 text-left">
              <p>01. Eye Catching Testimonial</p>
              <p>02. Login Page</p>
              <p>03. Sticky Menu</p>
            </div>
            <div>
              <div className="mt-5">
                <p>Technology Used:</p>
              </div>
              <p className="text-sm dark:text-gray-600 grid grid-cols-3 gap-5">
                {/* {project.technology} */}
                <button className="project-btn"># HTML</button>
                <button className="project-btn"># CSS</button>
                <button className="project-btn"># JavaScript</button>
                <button className="project-btn"># React</button>
                <button className="project-btn"># Tailwind CSS</button>
                <button className="project-btn"># Firebase</button>
                <button className="project-btn"># Node js</button>
                <button className="project-btn"># Express js</button>
                <button className="project-btn"># MongoDB</button>
              </p>
            </div>

            {/* Project live */}
            <div className="flex flex-col gap-5 mt-8">
              <a
                href="https://github.com/Mazbauddin/Heaven-Tourism-Client"
                target="_blank"
                className="text-sm font-semibold hover:text-blue-500 dark:text-blue-300"
              >
                Github: Source Code client
              </a>
              <a
                href="https://github.com/Mazbauddin/Heaven-Tourism-Server"
                target="_blank"
                className="text-sm font-semibold hover:text-blue-500 dark:text-blue-300"
              >
                Github: Source Code Server
              </a>
            </div>

            <div className="mt-10 live-project">
              <a
                href="https://heaven-tourism-management-site.web.app/"
                target="_blank"
                className="live-btn bg-gradient-to-r from-cyan-500 to-blue-500  text-white text-sm font-semibold hover:text-black "
              >
                Live Preview
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProject;
