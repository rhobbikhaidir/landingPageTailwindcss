import React from "react";
import Hero from "assets/image/hero1.png";
import borderBot from "assets/image/border.png";

import search from "assets/icons/Frame1.svg";

function Home() {
  return (
    <div className="h-max px-6 sm:px-20  ">
      {/* Header  */}
      <nav className="w-full  px-8 bg-transparent  flex flex-row justify-between h-20 ">
        <a href="/" className="flex focus:outline-none flex-row py-4 b">
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full ">
            <p className="text-center text-lg text-white sm:text-2xl bg-brand rounded-full font-bold font-sans pt-1">
              T{" "}
            </p>
          </div>
          <p className="text-lg sm:text-2xl px-1 pt-1">Trafalgar</p>
        </a>
        <ul className="list-none hidden  w-full px-4  sm:flex sm:flex-row sm:space-x-8  py-6 sm:justify-end">
          <li className="hover:text-black text-gray-500 cursor-pointer text-base">
            Home
          </li>
          <li className="hover:text-black text-gray-500 cursor-pointer text-base">
            Find a doctor
          </li>
          <li className="hover:text-black text-gray-500 cursor-pointer text-base">
            Apps
          </li>
          <li className="hover:text-black text-gray-500 cursor-pointer text-base">
            Testimonials
          </li>
          <li className="hover:text-black text-gray-500 cursor-pointer text-base">
            About us
          </li>
        </ul>
      </nav>
      {/* penutup Header */}

      {/* Hero  */}
      <div className="w-full px-6 mb-10">
        <div className="flex flex-col sm:flex-row-reverse justify-between ">
          <img src={Hero} alt="" className="flex-2" />
          <div className=" mt-10 sm:mt-0 flex items-center flex-1    ">
            <div className=" sm:-mt-20">
              <h1 className=" text-gray-800 text-2xl sm:text-5xl font-medium">
                Virtual healthcare for you
              </h1>
              <p className="text-gray-500 mt-3 sm:mt-2">
                Trafalgar provides progressive, and affordable healthcare,
                accessible on mobile and online for everyone
              </p>
              <button className="text-white  mt-4 bg-blue-500 rounded-3xl px-6 py-2 sm:mt-10">
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
          We provide to you the best choiches for you. Adjust it to your health
          needs and make sure your undergo treatment with our highly qualified
          doctors you can consult with us which type of service is suitable for
          your health
        </p>
      </div>

      <div className="flex flex-col sm:px-4 sm:space-y-4 ">
        <div className="flex flex-col  sm:flex-row sm:text-center px-6 sm:space-x-7 sm:px-12  sm:h-80 ">
          <div className=" py-8 px-8 sm:px-0 sm:py-8 shadow-lg rounded-xl">
            <img className="ml-8 sm:w-24 sm:h-24" src={search} alt="" />
            <p className="text-xl ">Search doctor</p>
            <p className="text-gray-400 ">
              Choose your doctor from thousands of specialist, general, and
              trusted hospitals
            </p>
          </div>
          <div className=" py-8  px-8 my-8 sm:my-0 sm:px-0 sm:py-8 shadow-lg rounded-xl">
            <img className="ml-8 sm:w-24 sm:h-24" src={search} alt="" />
            <p className="text-xl ">Search doctor</p>
            <p className="text-gray-400 ">
              Choose your doctor from thousands of specialist, general, and
              trusted hospitals
            </p>
          </div>
          <div className=" py-8  px-8 sm:px-0 sm:py-8 shadow-lg rounded-xl">
            <img className="ml-8 sm:w-24 sm:h-24" src={search} alt="" />
            <p className="text-xl ">Search doctor</p>
            <p className="text-gray-400 ">
              Choose your doctor from thousands of specialist, general, and
              trusted hospitals
            </p>
          </div>
        </div>

        <div className="flex flex-col  sm:flex-row sm:text-center px-6 sm:space-x-7 sm:px-12  sm:h-80 ">
          <div className=" py-8  px-8 sm:px-0 sm:py-8 shadow-lg rounded-xl">
            <img className="ml-8 sm:w-24 sm:h-24" src={search} alt="" />
            <p className="text-xl ">Search doctor</p>
            <p className="text-gray-400 ">
              Choose your doctor from thousands of specialist, general, and
              trusted hospitals
            </p>
          </div>
          <div className=" py-8 my-8 sm:my-0  px-8 sm:px-0 sm:py-8 shadow-lg rounded-xl">
            <img className="ml-8 sm:w-24 sm:h-24" src={search} alt="" />
            <p className="text-xl ">Search doctor</p>
            <p className="text-gray-400 ">
              Choose your doctor from thousands of specialist, general, and
              trusted hospitals
            </p>
          </div>
          <div className=" py-8  px-8 sm:px-0 sm:py-8 shadow-lg rounded-xl">
            <img className="ml-8 sm:w-24 sm:h-24" src={search} alt="" />
            <p className="text-xl ">Search doctor</p>
            <p className="text-gray-400 ">
              Choose your doctor from thousands of specialist, general, and
              trusted hospitals
            </p>
          </div>
        </div>
        <div className="text-center cursor-pointer">
          <button className="text-blue-400  mt-4 bg-transparent border-blue-400 border rounded-3xl px-6 py-2 sm:mt-10">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
