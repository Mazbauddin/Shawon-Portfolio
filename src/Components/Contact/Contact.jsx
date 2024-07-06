import React from "react";
import toast, { Toaster } from "react-hot-toast";
import {
  FaFacebookF,
  FaGithub,
  FaLinkedinIn,
  FaPhoneAlt,
} from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { IoLocation } from "react-icons/io5";

/* eslint-disable react/no-unescaped-entities */
const Contact = () => {
  const [result, setResult] = React.useState("");
  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "fc07317f-481b-4f5b-ba35-b9f8304ba46a");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("");
      toast.success("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div id="contact" className="container mx-auto mb-20">
      <div className="contact-section grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-20">
        <div className="contact-left col-span-1">
          <h1>Let's talk</h1>
          <p className="text-left">
            I'm currently avaliable to take on new projects, so feel free to
            send me a message about anything that you want me to work on. You
            can contact anytime.
          </p>
          <div>
            <div className="contact-details">
              <p className="contact-detail">
                <IoIosMail className="text-4xl" />
                <span>mazbauddin2010@gmail.com</span>
              </p>
              <p className="contact-detail">
                <FaPhoneAlt className="text-4xl" /> <span>+8801787769270</span>
              </p>
              <p className="contact-detail">
                <IoLocation className="text-4xl" />{" "}
                <span>Dhaka, Bangladesh</span>
              </p>
            </div>
            <div className="flex gap-10 mt-10">
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
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right col-span-1">
          <label htmlFor="">Your Name:</label>
          <input type="text" placeholder="Enter Your Name" name="name" id="" />
          <label htmlFor="">Your Email:</label>
          <input
            type="email"
            placeholder="Enter Your Name"
            name="email"
            id=""
          />
          <label htmlFor="">Write Your message here:</label>
          <textarea
            name="message"
            rows="10"
            placeholder="Enter Your Message Here"
          ></textarea>
          <button
            type="submit"
            className="contact-submit text-white  mx-auto bg-gradient-to-r from-cyan-500 to-blue-500"
          >
            Submit Now
          </button>
        </form>
        <span>{result}</span>
      </div>
      <Toaster
        toastOptions={{
          duration: 3000,
        }}
      />
    </div>
  );
};

export default Contact;
