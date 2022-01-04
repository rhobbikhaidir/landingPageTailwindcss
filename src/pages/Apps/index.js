import React from 'react';
import { WrapperContent, WrapperFull } from 'components/atoms/Wrapper';
import Navbar from 'components/molecules/Navbar';
import Title from 'components/atoms/Title';

const Apps = () => {
  return (
    <WrapperFull>
      <WrapperContent>
        <Navbar />
        <div className="py-28">
          <Title />
        </div>
      </WrapperContent>
    </WrapperFull>
  );
};

export default Apps;
