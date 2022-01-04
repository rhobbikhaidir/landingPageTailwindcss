import React from 'react';

const Title = props => {
  if (props.Service) {
    return (
      <h2 className="text-3xl py-8">
        {props.title}
        <div className=" border-b-2 border-b-black block m-auto w-16 py-4 " />
      </h2>
    );
  }
  if (props.Hero) {
    return (
      <h1 className="space-y-4 text-gray-800 px-2  font-sans font-semibold text-2xl  md:text-5xl">
        {props.title} <br /> {props.sub}
      </h1>
    );
  }
  return (
    <h1 className="space-y-4 text-gray-800 px-2 py-4  font-sans font-semibold text-2xl  md:text-5xl">
      {props.title} <br /> {props.sub}
      <div className=" border-b-2 border-b-black w-16 py-2" />
    </h1>
  );
};

export default Title;
