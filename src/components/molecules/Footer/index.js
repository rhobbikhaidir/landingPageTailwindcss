import React from 'react';

const Footer = () => {
  const footerData = {
    data1: ['About', 'Testimonials', 'Find a doctor', 'Apps'],
    data2: ['Indonesia', 'Singapure', 'Hongkong', 'Canada'],
    data3: ['Help center', 'Contact support', 'Instructions', 'How it works'],
  };
  return (
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
        <li className="text-white sm:px-6 text-xs sm:text-sm px-2 font-light lg:w-8/12">
          Trafalgar provides progressive, and affordable healthcare, accessible
          on mobile and online for everyone
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
          {footerData.data1.map((res, index) => (
            <li
              className="text-white font-light text-xs sm:text-sm"
              key={index}
            >
              {res}
            </li>
          ))}
        </ul>
        <ul className="sm:space-y-3">
          <li className="flex flex-row text-white font-semibold text-lg sm:text-xl">
            Region
          </li>
          {footerData.data2.map((res, index) => (
            <li
              className="text-white font-light text-xs sm:text-sm"
              key={index}
            >
              {res}
            </li>
          ))}
        </ul>{' '}
        <ul className="sm:space-y-3">
          <li className="flex flex-row text-white font-semibold text-lg sm:text-xl">
            Help
          </li>
          {footerData.data3.map((res, index) => (
            <li
              className="text-white font-light text-xs sm:text-sm"
              key={index}
            >
              {res}
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
