import React from 'react';
import dummy1 from 'assets/image/dummy1.png';
import dummy2 from 'assets/image/dummy2.png';
import dummy3 from 'assets/image/dummy3.png';
import Title from 'components/atoms/Title';

function LastArticle() {
  const dataArticle = [
    {
      img: dummy1,
      title: 'Disease detection, check up in the laboratory',
      text: 'In this case, the role of the health laboratory is very important to do a disease detection...',
      btn: 'Read more',
    },
    {
      img: dummy2,
      title: 'Herbal medicines that are safe for consumption',
      text: 'Herbal medicine is very widely used at this time because of its very good for your health...',
      btn: 'Read more',
    },
    {
      img: dummy3,
      title: 'Natural care for healthy facial skin',
      text: 'A healthy lifestyle should start from now and also for your skin health. There are some...',
      btn: 'Read more',
    },
  ];

  return (
    <div className="px-6 sm:px-12 py-12">
      <div className="text-center cursor-pointer py-8 ">
        {/* <h2 className="text-3xl  ">Check out our latest article</h2> */}
        <Title Service title="Check out our latest article" />
      </div>
      <div className="flex flex-col lg:flex-row sm:space-x-8">
        {dataArticle.map((res, index) => {
          return (
            <div
              className="shadow-shadowPrimary rounded-2xl mt-4 sm:mt-0 py-4 space-y-2 "
              key={index}
            >
              <img src={res.img} alt={res.img} />
              <h2 className="text-lg font-semibold px-6  ">{res.title}</h2>
              <p className="text-gray-500 px-6 ">{res.text}</p>
              <button className="text-brand border-none px-6 pt-4">
                Read More
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default LastArticle;
