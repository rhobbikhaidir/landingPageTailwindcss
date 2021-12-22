import React from "react";
import Hero from "assets/image/hero1.png";
import illustrasi2 from "assets/image/illustration2.png";
import illustrasi3 from "assets/image/illustration3.png";
import people from "assets/image/people.png";

import borderBot from "assets/image/border.png";

import Navbar from "components/molecules/Navbar";
import ContentService from "components/organisms/ContentService";
import LastArticle from "components/organisms/LatestArticle";
import { WrapperContent, WrapperFull } from "components/atoms/Wrapper";

function Home() {
  return (
    <WrapperFull>
      <WrapperContent>
        {/* Header  */}
        <Navbar />
        {/* penutup Header */}

        {/* Hero  */}
        <div className="w-full px-6 py-16 ">
          <div className=" mt-10 sm:mt-0 flex flex-col-reverse sm:flex-row  items-center sm:space-x-14">
            <div className="">
              <h1 className="space-y-4 text-gray-800 px-2 text-2xl sm:text-xl md:text-5xl">
                Virtual healthcare <br /> for you
              </h1>
              <p className="text-gray-500 mt-3 sm:px-2 sm:w-9/12">
                Trafalgar provides progressive, and affordable healthcare,
                accessible on mobile and online for everyone
              </p>
              <button className="mt-4 text-white rounded-3xl bg-brand px-6 py-2 sm:mt-6">
                Download
              </button>
            </div>
            <img src={Hero} alt="" className="sm:w-6/12 sm:h-2/4 sm:pl-5" />
          </div>
        </div>

        {/* content */}
        <div className="text-center cursor-pointer py-8 ">
          <h2 className="text-3xl  ">Our service</h2>
          <img src={borderBot} alt="" className="block m-auto w-16 py-8" />
          <p className="text-gray-400 text-lg px-12 sm:px-28 ">
            We provide to you the best choiches for you. Adjust it to your
            health needs and make sure your undergo treatment with our highly
            qualified doctors you can consult with us which type of service is
            suitable for your health
          </p>
        </div>

        <ContentService />
        <div className="w-full px-6  sm:py-16 ">
          <div className=" mt-10 sm:mt-0 flex flex-col sm:flex-row  justify-between  ">
            <img src={illustrasi2} alt="" className="sm:w-6/12 sm:h-2/4 " />
            <div className="pt-10 sm:pt-20  sm:pl-32">
              <h1 className="space-y-4 text-gray-800 px-2 text-2xl sm:text-5xl ">
                Virtual healthcare <br /> for you
              </h1>
              <p className="text-gray-500 mt-3 sm:px-2 sm:w-9/12">
                Trafalgar provides progressive, and affordable healthcare,
                accessible on mobile and online for everyone
              </p>
              <button className="mt-4 text-brand border border-brand rounded-3xl  px-6 py-2 sm:mt-6">
                Learn more
              </button>
            </div>
          </div>
        </div>
        <div className="w-full px-6 py-16 ">
          <div className=" mt-10 sm:mt-0 flex items-center flex-col-reverse sm:flex-row   sm:space-x-14">
            <div>
              <h1 className="space-y-4 text-gray-800 px-2 text-2xl sm:text-5xl font-medium">
                Download our <br /> mobile apps
              </h1>
              <p className="text-gray-500 mt-3 sm:px-2 sm:w-9/12">
                Our dedicated patient engagement app and web portal allow you to
                access information instantaneously (no tedeous form, long calls,
                or administrative hassle) and securely
              </p>
              <button className="mt-4 text-brand border border-brand rounded-3xl  px-6 py-2 sm:mt-6">
                Download
              </button>
            </div>
            <img
              src={illustrasi3}
              alt=""
              className="sm:w-6/12 sm:h-2/4 sm:pl-5"
            />
          </div>
        </div>
        <div className="sm:px-12 py-14">
          <div className="bg-gradient-to-tr from-brand to-brand2 py-12 rounded-3xl">
            <h1 className="text-white text-xl sm:text-4xl mb-4 text-center">
              What our customer are saying
            </h1>
            <div className="flex flex-col sm:flex-row sm:justify-around">
              <div className="flex flex-row ml-2">
                <img
                  src={people}
                  alt="people"
                  className="w-32 h-32 rounded-full"
                />
                <div className="mt-10 pl-4 ">
                  <p className="text-white">Edward Newgate</p>
                  <p className="text-gray-300">Founder Circle</p>
                </div>
              </div>
              <p className="text-gray-300 mt-6 flex max-w-xs sm:mt-0 px-6 sm:px-0 items-center">
                “Our dedicated patient engagement app and web portal allow you
                to access information instantaneously (no tedeous form, long
                calls, or administrative hassle) and securely”
              </p>
            </div>
          </div>
        </div>
        <LastArticle />
        {/* penutup WrapperContent */}
      </WrapperContent>
      <footer className=" sm:px-32 py-14 bg-gradient-to-t from-brand to-brand2 flex flex-row sm:pace-x-6">
        <ul className=" sm:space-y-4 flex-1 space-y-2">
          <li className="flex flex-row sm:px-3">
            <div className="bg-white sm:h-10 sm:w-10 h-8 w-8 rounded-full ">
              <p className="text-center text-brand text-xl sm:text-2xl font-bold pt-1">
                T
              </p>
            </div>
            <p className="text-white text-xl sm:text-2xl pl:0.5 pt:0.5 sm:pl-1.5 sm:py-1">
              Trafalgar
            </p>
          </li>
          <li className="text-white sm:px-6 text-xs sm:text-sm px-2 font-light sm:w-8/12">
            Trafalgar provides progressive, and affordable healthcare,
            accessible on mobile and online for everyone
          </li>
          <li className="text-white px-2 text-xs sm:text-sm  sm:px-6 font-light">
            ©Trafalgar PTY LTD 2020. All rights reserved
          </li>
        </ul>
        <div className="flex justify-between sm:space-x-16 space-x-1 flex-1">
          <ul className="sm:space-y-3">
            <li className="flex flex-row text-white font-semibold text-lg sm:text-xl">
              Company
            </li>
            <li className="text-white font-light text-xs sm:text-sm">About</li>
            <li className="text-white font-light text-xs sm:text-sm">
              Testimonials
            </li>
            <li className="text-white font-light text-xs sm:text-sm">
              Find a Doctor
            </li>
            <li className="text-white font-light text-xs sm:text-sm">Apps</li>
          </ul>
          <ul className="sm:space-y-3">
            <li className="flex flex-row text-white font-semibold text-lg sm:text-xl">
              Region
            </li>
            <li className="text-white font-light text-xs sm:text-sm">
              Indonesia
            </li>
            <li className="text-white font-light text-xs sm:text-sm">
              Singapure
            </li>
            <li className="text-white font-light text-xs sm:text-sm">
              Hongkong
            </li>
            <li className="text-white font-light text-xs sm:text-sm">Canada</li>
          </ul>{" "}
          <ul className="sm:space-y-3">
            <li className="flex flex-row text-white font-semibold text-lg sm:text-xl">
              Help
            </li>
            <li className="text-white font-light text-xs sm:text-sm">
              Help Center
            </li>
            <li className="text-white font-light text-xs sm:text-sm">
              Contact support
            </li>
            <li className="text-white font-light text-xs sm:text-sm">
              Instructions
            </li>
            <li className="text-white font-light text-xs sm:text-sm">
              How it works
            </li>
          </ul>
        </div>
      </footer>
    </WrapperFull>
  );
}

export default Home;
