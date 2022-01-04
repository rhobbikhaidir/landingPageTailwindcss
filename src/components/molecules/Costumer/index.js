import React from 'react';
import People from 'assets/image/people.png';

const Costumer = () => {
  return (
    <div className="sm:px-0  lg:px-32 py-14 ">
      <div className="bg-gradient-to-tr from-brand to-brand2 py-12 rounded-3xl">
        <h1 className="text-white text-xl sm:text-4xl mb-4 text-center">
          What our customer are saying
        </h1>
        <div className="flex flex-col  sm:px-12 sm:flex-col md:flex-row sm:justify-around">
          <div className="flex flex-row ml-2">
            <img src={People} alt="people" className="w-32 h-32 rounded-full" />
            <div className="mt-10 pl-4 ">
              <p className="text-white">Edward Newgate</p>
              <p className="text-gray-300">Founder Circle</p>
            </div>
          </div>
          <p className="text-gray-300 mt-6 flex max-w-xs sm:mt-0 px-6 sm:px-0 items-center">
            “Our dedicated patient engagement app and web portal allow you to
            access information instantaneously (no tedeous form, long calls, or
            administrative hassle) and securely”
          </p>
        </div>
      </div>
    </div>
  );
};

export default Costumer;
