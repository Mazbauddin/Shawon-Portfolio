/* eslint-disable react/no-unescaped-entities */
import test1 from "../../assets/testimonial/hardy.png";
import test2 from "../../assets/testimonial/lady.png";
import test3 from "../../assets/testimonial/jack.png";

const Testimonial = () => {
  return (
    <div id="services" className="carousel w-full">
      <div id="slide1" className="carousel-item relative w-full">
        <section className=" dark:bg-gray-900 container mx-auto">
          <div className="max-w-6xl px-6 py-10 mx-auto">
            <main className="relative z-20 w-full mt-8 md:flex md:items-center xl:mt-12">
              <div className="absolute w-full bg-[#fea100] opacity-30 -z-10 md:h-96 rounded-2xl"></div>
              <div className="w-full p-6 bg-blue-600 md:flex md:items-center rounded-2xl md:bg-transparent md:p-0 lg:px-12 md:justify-evenly">
                <img
                  className="h-24 w-24 md:mx-6 rounded-full object-cover shadow-md md:h-[32rem] md:w-80 lg:h-[36rem] lg:w-[26rem] md:rounded-2xl border-2 border-yellow-500 small-testi"
                  src={test2}
                  alt="client photo"
                  data-aos="fade-right"
                  data-aos-duration="1000"
                  data-aos-easing="linear"
                />

                <div
                  className="mt-2 md:mx-6"
                  data-aos="fade-left"
                  data-aos-duration="1000"
                  data-aos-easing="linear"
                >
                  <div>
                    <p className="text-xl font-medium tracking-tight text-white">
                      Ema Watson
                    </p>
                    <p className="text-blue-200 ">Marketing Manager</p>
                  </div>

                  <p className="mt-4 text-lg leading-relaxed text-white md:text-xl">
                    “Meet our Marketing Team: Innovators, strategists, and
                    creators dedicated to amplifying your brand's voice and
                    connecting with audiences through impactful campaigns.”.
                  </p>

                  <div className="flex items-center justify-between mt-6 md:justify-start">
                    <button
                      title="left arrow"
                      className=" text-white transition-colors duration-300 border rounded-full rtl:-scale-x-100 hover:bg-blue-400"
                    >
                      <a
                        href="#slide4"
                        className="btn-circle btn hover:bg-[#fea100] "
                      >
                        ❮
                      </a>
                    </button>

                    <button
                      title="right arrow"
                      className="text-white transition-colors duration-300 border rounded-full rtl:-scale-x-100 md:mx-6 hover:bg-blue-400"
                    >
                      <a
                        href="#slide2"
                        className="btn-circle btn hover:bg-[#fea100]"
                      >
                        ❯
                      </a>
                    </button>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </section>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <section className=" dark:bg-gray-900 container mx-auto">
          <div className="max-w-6xl px-6 py-10 mx-auto">
            <main className="relative z-20 w-full mt-8 md:flex md:items-center xl:mt-12">
              <div className="absolute w-full bg-[#fea100] opacity-30 -z-10 md:h-96 rounded-2xl"></div>
              <div className="w-full p-6 bg-blue-600 md:flex md:items-center rounded-2xl md:bg-transparent md:p-0 lg:px-12 md:justify-evenly">
                <div
                  className="mt-2 md:mx-6"
                  data-aos="fade-right"
                  data-aos-duration="1000"
                  data-aos-easing="linear"
                >
                  <div>
                    <p className="text-xl font-medium tracking-tight text-white">
                      Lady Gaga
                    </p>
                    <p className="text-blue-200 ">Artist</p>
                  </div>

                  <p className="mt-4 text-lg leading-relaxed text-white md:text-xl">
                    “Meet our Marketing Team: Innovators, strategists, and
                    creators dedicated to amplifying your brand's voice and
                    connecting with audiences through impactful campaigns.”.
                  </p>

                  <div className="flex items-center justify-between mt-6 md:justify-start">
                    <button
                      title="left arrow"
                      className=" text-white transition-colors duration-300 border rounded-full rtl:-scale-x-100 hover:bg-blue-400"
                    >
                      <a
                        href="#slide1"
                        className="btn-circle btn hover:bg-[#fea100] "
                      >
                        ❮
                      </a>
                    </button>

                    <button
                      title="right arrow"
                      className="text-white transition-colors duration-300 border rounded-full rtl:-scale-x-100 md:mx-6 hover:bg-blue-400"
                    >
                      <a
                        href="#slide3"
                        className="btn-circle btn hover:bg-[#fea100]"
                      >
                        ❯
                      </a>
                    </button>
                  </div>
                </div>
                <img
                  className="h-24 w-24 md:mx-6 rounded-full object-cover shadow-md md:h-[32rem] md:w-80 lg:h-[36rem] lg:w-[26rem] md:rounded-2xl border-2 border-yellow-500 small-testi"
                  src={test1}
                  alt="client photo"
                  data-aos="fade-left"
                  data-aos-duration="1000"
                  data-aos-easing="linear"
                />
              </div>
            </main>
          </div>
        </section>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <section className=" dark:bg-gray-900 container mx-auto">
          <div className="max-w-6xl px-6 py-10 mx-auto">
            <main className="relative z-20 w-full mt-8 md:flex md:items-center xl:mt-12">
              <div className="absolute w-full bg-[#fea100] opacity-30 -z-10 md:h-96 rounded-2xl"></div>

              <div className="w-full p-6 bg-blue-600 md:flex md:items-center rounded-2xl md:bg-transparent md:p-0 lg:px-12 md:justify-evenly">
                <img
                  className="h-24 w-24 md:mx-6 rounded-full object-cover shadow-md md:h-[32rem] md:w-80 lg:h-[36rem] lg:w-[26rem] md:rounded-2xl border-2 border-yellow-500 small-testi"
                  src={test2}
                  alt="client photo"
                  data-aos="fade-right"
                  data-aos-duration="1000"
                  data-aos-easing="linear"
                />

                <div
                  className="mt-2 md:mx-6"
                  data-aos="fade-left"
                  data-aos-duration="1000"
                  data-aos-easing="linear"
                >
                  <div>
                    <p className="text-xl font-medium tracking-tight text-white">
                      Ema Watson
                    </p>
                    <p className="text-blue-200 ">Marketing Manager</p>
                  </div>

                  <p className="mt-4 text-lg leading-relaxed text-white md:text-xl">
                    “Meet our Marketing Team: Innovators, strategists, and
                    creators dedicated to amplifying your brand's voice and
                    connecting with audiences through impactful campaigns.”.
                  </p>

                  <div className="flex items-center justify-between mt-6 md:justify-start">
                    <button
                      title="left arrow"
                      className=" text-white transition-colors duration-300 border rounded-full rtl:-scale-x-100 hover:bg-blue-400"
                    >
                      <a
                        href="#slide2"
                        className="btn-circle btn hover:bg-[#fea100] "
                      >
                        ❮
                      </a>
                    </button>

                    <button
                      title="right arrow"
                      className="text-white transition-colors duration-300 border rounded-full rtl:-scale-x-100 md:mx-6 hover:bg-blue-400"
                    >
                      <a
                        href="#slide4"
                        className="btn-circle btn hover:bg-[#fea100]"
                      >
                        ❯
                      </a>
                    </button>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </section>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <section className=" dark:bg-gray-900 container mx-auto">
            <div className="max-w-6xl px-6 py-10 mx-auto">
              <main className="relative z-20 w-full mt-8 md:flex md:items-center xl:mt-12">
                <div className="absolute w-full bg-[#fea100] opacity-30 -z-10 md:h-96 rounded-2xl"></div>

                <div className="w-full p-6 bg-blue-600 md:flex md:items-center rounded-2xl md:bg-transparent md:p-0 lg:px-12 md:justify-evenly">
                  <div
                    className="mt-2 md:mx-6"
                    data-aos="fade-left"
                    data-aos-duration="1000"
                    data-aos-easing="linear"
                  >
                    <div>
                      <p className="text-xl font-medium tracking-tight text-white">
                        Mr. X
                      </p>
                      <p className="text-blue-200 ">Senior Chef</p>
                    </div>

                    <p className="mt-4 text-lg leading-relaxed text-white md:text-xl">
                      “Meet our Marketing Team: Innovators, strategists, and
                      creators dedicated to amplifying your brand's voice and
                      connecting with audiences through impactful campaigns.”.
                    </p>

                    <div className="flex items-center justify-between mt-6 md:justify-start">
                      <button
                        title="left arrow"
                        className=" text-white transition-colors duration-300 border rounded-full rtl:-scale-x-100 hover:bg-blue-400"
                      >
                        <a
                          href="#slide3"
                          className="btn-circle btn hover:bg-[#fea100] "
                        >
                          ❮
                        </a>
                      </button>

                      <button
                        title="right arrow"
                        className="text-white transition-colors duration-300 border rounded-full rtl:-scale-x-100 md:mx-6 hover:bg-blue-400"
                      >
                        <a
                          href="#slide1"
                          className="btn-circle btn hover:bg-[#fea100]"
                        >
                          ❯
                        </a>
                      </button>
                    </div>
                  </div>
                  <img
                    className="h-24 w-24 md:mx-6 rounded-full object-cover shadow-md md:h-[32rem] md:w-80 lg:h-[36rem] lg:w-[26rem] md:rounded-2xl border-2 border-yellow-500 small-testi"
                    src={test3}
                    alt="client photo"
                    data-aos="fade-left"
                    data-aos-duration="1000"
                    data-aos-easing="linear"
                  />
                </div>
              </main>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
