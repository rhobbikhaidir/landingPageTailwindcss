import React from 'react';

const Text = props => {
  if (props.TextService) {
    return (
      <p className="text-gray-600 text-lg px-12 lg:px-28 ">{props.text}</p>
    );
  }
  return <p className="text-gray-500 mt-3  sm:px-2 md:w-9/12">{props.text}</p>;
};

export default Text;
