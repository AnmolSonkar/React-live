import React, { Component } from "react";
import { AiOutlineLink } from "react-icons/ai";
import { Helmet } from "react-helmet";

export default class Project extends Component {
  render() {
    return (
      <div className="flex-grow">
        <Helmet>
          <title>Anmol | Projects</title>
        </Helmet>

        <div className="p-lg:0 p-3  py-24  lg:pb-10 pb-7 bg-[#121212]">
          <h1
            className=" text-3xl text-white  lg:pl-28 font-semibold"
            data-aos="fade"
          >
            Projects
          </h1>
          <p className="text-xl py-4 text-white  lg:pl-28 " data-aos="fade">
            In-depth Case Studies to show you what I can offer and how I work
          </p>
        </div>
        <div className="grid lg:grid-cols-3 gap-9 mt-10 mb-5 lg:pr-24 lg:pl-24 lg:p-10 p-4">
          <div
            className="zoom rounded text-gray-200 hover:text-white  shadow-lg flex flex-col mx-auto bg-[#121212]"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <video
              id="inlineVideo"
              className="rounded"
              width="100%"
              controls="controls"
              poster="images/PPSVMIC.png"
            >
              <source src="videos/PPSVMIC.mp4" type="video/mp4" />
            </video>
            <div className="mx-auto m-2">
              <div className="flex  flex-col text-center ">
                My School Site
                <p className="text-sm ">P.P.S.V.M.Inter College Nanakmatta</p>
              </div>
            </div>
            <div className="py-1.5  mx-auto pb-5 text-sm">
              <span className="shadow-lg focus:outline-none bg-[#1e1e1e] text-white  rounded-2xl p-3  py-1.5 pb-1.5">
                Bootstrap
              </span>
              <span className="shadow-lg   focus:outline-none text-white bg-[#1e1e1e]  rounded-2xl p-3 ml-1 py-1.5 pb-1.5">
                PHP
              </span>
              <span className="shadow-lg   focus:outline-none text-white bg-[#1e1e1e]  rounded-2xl p-3 ml-1 py-1.5 pb-1.5">
                javascript
              </span>
            </div>
            <div className="mx-auto p-2 pb-4">
              <a
                className="flex hover:underline text-sm"
                target="_blank"
                rel="noreferrer"
                href="https://github.com/AnmolSonkar/Keshav-Mahavidyalaya.git"
              >
                <AiOutlineLink className="text-lg text-white"></AiOutlineLink>
                Github Repo Link
              </a>
            </div>
          </div>

          <div
            className="zoom rounded text-gray-200 hover:text-white bg-[#121212] shadow-lg flex flex-col mx-auto"
            data-aos="zoom-in"
            data-aos-delay="400"
          >
            <video
              id="inlineVideo"
              className="rounded"
              width="100%"
              controls="controls"
              poster="images/KeshavMahavidyalaya.png"
            >
              <source src="videos/KeshavMahavidyalaya.mp4" type="video/mp4" />
            </video>

            <div className="mx-auto m-2">
              <div className="flex  flex-col text-center ">
                My College Site
                <p className="text-sm ">Keshav Mahavidyalaya</p>
              </div>
            </div>
            <div className="py-1.5 mx-auto  pb-5 text-sm">
              <span className="shadow-lg focus:outline-none text-white bg-[#1e1e1e]  rounded-2xl p-3  py-1.5 pb-1.5">
                Bootstrap
              </span>
              <span className="shadow-lg focus:outline-none text-white bg-[#1e1e1e]  rounded-2xl p-3 ml-1 py-1.5 pb-1.5">
                PHP
              </span>
              <span className="shadow-lg focus:outline-none text-white bg-[#1e1e1e]  rounded-2xl p-3 ml-1 py-1.5 pb-1.5">
                javascript
              </span>
            </div>
            <div className="flex justify-center p-2 pb-4">
              <a
                className="flex hover:underline text-sm pr-2"
                target="_blank"
                rel="noreferrer"
                href="https://keshav.great-site.net/"
              >
                <AiOutlineLink className="text-lg text-white"></AiOutlineLink>
                Hosted Project Link
              </a>
              <a
                className="flex hover:underline text-sm"
                target="_blank"
                rel="noreferrer"
                href="https://github.com/AnmolSonkar/Keshav-Mahavidyalaya.git"
              >
                <AiOutlineLink className="text-lg text-white"></AiOutlineLink>
                Github Repo Link
              </a>
            </div>
          </div>

          <div
            className="zoom rounded text-gray-200 hover:text-white  bg-[#121212] shadow-lg flex flex-col mx-auto"
            data-aos="zoom-in"
            data-aos-delay="600"
          >
            <video
              id="inlineVideo"
              className="rounded"
              width="100%"
              controls="controls"
              poster="images/Photoshoto.png"
            >
              <source src="videos/Photoshoto.mp4" type="video/mp4" />
            </video>

            <div className="mx-auto m-2">
              <div className="flex  flex-col text-center ">
                Social Media Site
                <p className="text-sm "> Photoshoto</p>
              </div>
            </div>
            <div className="py-1.5 mx-auto pb-5 text-sm">
              <span className="shadow-lg focus:outline-none text-white bg-[#1e1e1e]  rounded-2xl p-3  py-1.5 pb-1.5">
                Tailwindcss
              </span>
              <span className="shadow-lg focus:outline-none text-white bg-[#1e1e1e]  rounded-2xl p-3 ml-1 py-1.5 pb-1.5">
                Javascript
              </span>
              <span className="shadow-lg focus:outline-none text-white bg-[#1e1e1e]  rounded-2xl p-3 ml-1  py-1.5 pb-1.5">
                Alpinejs
              </span>
              <div className="lg:hidden">
                <br />
              </div>
              <span className="shadow-lg focus:outline-none text-white bg-[#1e1e1e]  rounded-2xl p-3 ml-1 py-1.5 pb-1.5">
                Laravel Livewire
              </span>
            </div>
            <div className="mx-auto p-2 pb-4">
              <a
                className="flex hover:underline text-sm"
                target="_blank"
                rel="noreferrer"
                href="."
              >
                <AiOutlineLink className="text-lg text-white"></AiOutlineLink>
                Github Repo Link
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
