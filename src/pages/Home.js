import React from "react";
import Hero from "assets/image/hero1.png";
import illustrasi2 from "assets/image/illustrasi2.svg";
import illustrasi3 from "assets/image/illustration3.svg";
import people from "assets/image/people.png";

import borderBot from "assets/image/border.png";

import Navbar from "components/molecules/Navbar";
import ContentService from "components/organisms/ContentService";
import LastArticle from "components/organisms/LatestArticle";

function Home() {
  return (
    <div className="h-max   ">
      <div className="sm:px-20 px-6  ">
        {/* Header  */}
        <Navbar />
        {/* penutup Header */}

        {/* Hero  */}
        <div className="max-w-6xl  py-12 ">
          <div className="flex flex-col sm:flex-row-reverse justify-between ">
            <img src={Hero} alt="" className="flex-2" />
            <div className=" mt-10 sm:mt-0 flex items-center flex-1   ">
              <div className=" sm:-mt-20">
                <h1 className=" text-gray-800 text-2xl sm:text-5xl font-medium">
                  Virtual healthcare for you
                </h1>
                <p className="text-gray-500 mt-3 sm:mt-2">
                  Trafalgar provides progressive, and affordable healthcare,
                  accessible on mobile and online for everyone
                </p>
                <button className="text-white  mt-4 bg-brand rounded-3xl px-6 py-2 sm:mt-10">
                  Consult Today
                </button>
              </div>
            </div>
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
        <div className="w-full px-6 ">
          <div className="flex flex-col-reverse py-12 sm:flex-row-reverse justify-between  ">
            <div className=" mt-10 sm:mt-0 flex items-center flex-1   ">
              <div className=" sm:-mt-20">
                <h1 className=" text-gray-800 text-2xl sm:text-5xl font-medium">
                  Leading healthcare providers
                </h1>
                <p className="text-gray-500 mt-3 sm:mt-2">
                  Trafalgar provides progressive, and affordable healthcare,
                  accessible on mobile and online for everyone. To us, it’s not
                  just work. We take pride in the solutions we deliver
                </p>
                <button className=" mt-4 text-blue-400  border border-blue-400 rounded-3xl px-6 py-2 sm:mt-10">
                  Download
                </button>
              </div>
            </div>
            <img src={illustrasi2} alt="" className="flex-2 mr-8" />
          </div>
        </div>
        <div className="w-full px-6 py-12 ">
          <div className="flex flex-col sm:flex-row-reverse justify-between ">
            <img src={illustrasi3} alt="" className="flex-2" />
            <div className=" mt-10 sm:mt-0 flex items-center flex-1    ">
              <div className=" sm:-mt-20">
                <h1 className=" text-gray-800 px-2 text-2xl sm:text-5xl font-medium">
                  Download our mobile apps
                </h1>
                <p className="text-gray-500 mt-3 sm:mt-2 px-2">
                  Our dedicated patient engagement app and web portal allow you
                  to access information instantaneously (no tedeous form, long
                  calls, or administrative hassle) and securely
                </p>
                <button className="mt-4 text-brand rounded-3xl border border-brand px-6 py-2 sm:mt-10">
                  Download
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="sm:px-12 py-14">
          <div className="bg-brand py-12 rounded-3xl">
            <h1 className="text-white text-2xl sm:text-4xl mb-4 text-center">
              What our customer are saying
            </h1>
            <div className="flex flex-col sm:flex-row sm:justify-around">
              <div className="flex flex-row ml-2">
                <img
                  src={people}
                  alt="people"
                  className="w-32 h-32 rounded-full"
                />
                <div className="mt-10 sm:ml-4">
                  <p className="text-white">Edward Newgate</p>
                  <p className="text-gray-300">Founder Circle</p>
                </div>
              </div>
              <p className="text-gray-300 mt-2 flex max-w-xs sm:mt-0 px-6 sm:px-0 items-center">
                “Our dedicated patient engagement app and web portal allow you
                to access information instantaneously (no tedeous form, long
                calls, or administrative hassle) and securely”
              </p>
            </div>
          </div>
        </div>
        <LastArticle />
      </div>
      <footer className="h-28 bg-brand"></footer>
    </div>
  );
}

export default Home;
