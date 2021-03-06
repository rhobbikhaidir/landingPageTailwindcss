import React from 'react';
import search from 'assets/icons/Frame1.svg';
import kapsul from 'assets/icons/Frame2.svg';
import form from 'assets/icons/Frame3.svg';
import detail from 'assets/icons/Frame4.svg';
import p3k from 'assets/icons/Frame5.svg';
import track from 'assets/icons/Frame6.svg';

function ContentService() {
  const dataService = {
    data: [
      {
        img: search,
        title: 'Search Doctor',
        text: 'Choose your doctor from thousands of specialist, general, and trusted hospitals',
      },
      {
        img: kapsul,
        title: 'Online pharmacy',
        text: 'Buy  your medicines with our mobile application with a simple delivery system',
      },
      {
        img: form,
        title: 'Consultation',
        text: 'Free consultation with our trusted doctors and get the best recomendations',
      },
      {
        img: detail,
        title: 'Details info',
        text: 'Free consultation with our trusted doctors and get the best recomendations',
      },
      {
        img: p3k,
        title: 'Emergency care',
        text: 'You can get 24/7 urgent care for yourself or your children and your lovely family',
      },
      {
        img: track,
        title: 'Tracking',
        text: 'Free consultation with our trusted doctors and get the best recomendations',
      },
    ],
  };

  return (
    <div className="text-center px-2 lg:px-10 md:max-w-full">
      <div className="grid grid-cols-1 gap-7  sm:grid-cols-2 sm:gap-2 lg:grid-cols-3 lg:gap-5">
        {dataService.data.map((res, index) => {
          return (
            <div
              className=" py-8 row-span-3 sm:px-0 shadow-shadowPrimary w-11/12 md:w-full   rounded-xl "
              key={index}
            >
              <img
                className="ml-4 sm:w-24 sm:h-24"
                src={res.img}
                alt={res.title}
              />
              <p className="text-xl text-left px-4 py-4 ">{res.title}</p>
              <p className="text-gray-400 w-full text-left px-4  py-4 max-w-xs">
                {res.text}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ContentService;
