import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

export default class Contact extends Component {
  render() {
    return (
      <div className="flex-grow">
        <Helmet>
          <title>Anmol | Contact</title>
        </Helmet>
        <div>
          <div className="flex py-24  pb-10 bg-[#121212]">
            <h1
              data-aos="fade"
              className="text-3xl text-white  lg:pl-28 p-3 font-semibold"
            >
              Contact
            </h1>
          </div>

          <img
            data-aos="zoom-in"
            className=" lg:w-24 w-20 lg:mt-24 mt-12 mb-22  lg:h-24 h-20 shadow-lg rounded-full mx-auto"
            src="images/Anmol.jpeg"
            alt="Anmol Sonkar"
          />
          <div
            data-aos="fade"
            className=" mt-6 mb-12  p-1  lg:w-11/12 w-[97%]  mx-auto rounded shadow-lg
            bg-[#121212]"
          >
            <div className="lg:ml-8 mt-6 text-center text-white">
              <p className="pt-1.5 lg:w-10/12 mx-auto p-2" data-aos="fade">
                I'm currently taking on freelance work. If you are interested in
                hiring me for your project, you may contact me. Want to know how
                I work and what I can offer? Check out my
                <Link
                  to="/Projects"
                  className="hover:underline ml-1 mr-1 text-green-500"
                >
                  projects
                </Link>
                and
                <Link
                  to="/Resume"
                  className="hover:underline ml-1 text-green-500"
                >
                  resume
                </Link>
                .
              </p>

              <ul className="lg:w-4/12  mx-auto text-white">
                <a
                  data-aos="fade"
                  href="tel:+917055877416"
                  className="flex py-2 justify-center"
                >
                  <img
                    src="images/Call.svg"
                    alt=""
                    className=" w-11 pr-2 -ml-10 "
                  />
                  <li className="py-2 ml-2">Mobile number : +91 7055877416</li>
                </a>
                <a
                  data-aos="fade"
                  href="https://api.whatsapp.com/send?phone=917055877416&text=Hello"
                  className="flex py-2 justify-center"
                >
                  <img
                    src="images/Whatsapp.svg"
                    alt=""
                    className=" w-11 pr-2 -ml-4 "
                  />
                  <li className="py-2 ml-2">
                    Whatsapp number : +91 7055877416
                  </li>
                </a>
                <a
                  data-aos="fade"
                  href="mailto:anmolsonkar742@gmail.com"
                  className="flex justify-center"
                >
                  <img
                    src="images/Gmail.svg"
                    alt=""
                    className=" w-11 py-1 pr-2 "
                  />
                  <li className="py-3 ml-2">
                    Email id : anmolsonkar742@gmail.com
                  </li>
                </a>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
