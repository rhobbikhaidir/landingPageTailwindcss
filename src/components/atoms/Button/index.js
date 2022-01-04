import React from 'react';

function Button(props) {
  if (props.SecondBtn) {
    return (
      <button className="mt-4 text-brand border border-brand rounded-3xl  px-6 py-2 sm:mt-6">
        {props.titleBtn}
      </button>
    );
  }
  return (
    <button className="mt-4 text-white rounded-3xl bg-brand px-6 py-2 sm:mt-6">
      {props.titleBtn}
    </button>
  );
}

export default Button;
