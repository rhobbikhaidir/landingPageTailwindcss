import React from "react";
import search from "assets/icons/Frame1.svg";
import kapsul from "assets/icons/Frame2.svg";
import form from "assets/icons/Frame3.svg";
import detail from "assets/icons/Frame4.svg";
import p3k from "assets/icons/Frame5.svg";
import track from "assets/icons/Frame3.svg";

function ContentService() {
  const dataService = {
    data1: [
      {
        img: search,
        title: "Search Doctor",
        text: "Choose your doctor from thousands of specialist, general, and trusted hospitals",
      },
      {
        img: kapsul,
        title: "Online pharmacy",
        text: "Buy  your medicines with our mobile application with a simple delivery system",
      },
      {
        img: form,
        title: "Consultation",
        text: "Free consultation with our trusted doctors and get the best recomendations",
      },
    ],
    data2: [
      {
        img: detail,
        title: "Details info",
        text: "Free consultation with our trusted doctors and get the best recomendations",
      },
      {
        img: p3k,
        title: "Emergency care",
        text: "You can get 24/7 urgent care for yourself or your children and your lovely family",
      },
      {
        img: track,
        title: "Tracking",
        text: "Free consultation with our trusted doctors and get the best recomendations",
      },
    ],
  };

  return (
    <div className="flex flex-col sm:px-4 sm:space-y-4 ">
      <div className="flex flex-col  sm:flex-row sm:text-center px-6 sm:space-x-7 sm:px-12  sm:h-80 ">
        {dataService.data1.map((res, index) => {
          // const data = res.data;
          // console.log(res);
          return (
            <div
              className=" py-8 px-8 sm:px-0 sm:py-8 shadow-shadowPrimary rounded-xl"
              key={index}
            >
              <img
                className="ml-4 sm:w-24 sm:h-24"
                src={res.img}
                alt={res.title}
              />
              <p className="text-xl text-left px-4 py-4 ">{res.title}</p>
              <p className="text-gray-400 text-left px-4 py-4">{res.text}</p>
            </div>
          );
        })}
      </div>

      <div className="flex flex-col  sm:flex-row sm:text-center px-6 sm:space-x-7 sm:px-12  sm:h-80 ">
        {dataService.data2.map((res, index) => {
          return (
            <div
              className=" py-8 px-8 sm:px-0 sm:py-8 shadow-shadowPrimary rounded-xl"
              key={index}
            >
              <img
                className="ml-4 sm:w-24 sm:h-24"
                src={res.img}
                alt={res.title}
              />
              <p className="text-xl text-left px-4 py-4 ">{res.title}</p>
              <p className="text-gray-400 text-left px-4 py-4">{res.text}</p>
            </div>
          );
        })}
      </div>
      <div className="text-center cursor-pointer">
        <button className="text-brand  mt-4 bg-transparent border-brand border rounded-3xl px-6 py-2 sm:mt-10">
          Learn More
        </button>
      </div>
    </div>
  );
}

export default ContentService;
