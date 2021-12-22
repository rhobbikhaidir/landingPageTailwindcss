import React from "react";
import { WrapperContent, WrapperFull } from "components/atoms/Wrapper";
import Navbar from "components/molecules/Navbar";

const Apps = () => {
  return (
    <WrapperFull>
      <WrapperContent>
        <Navbar />
        <h1 className="py-28">Ini adalah page Apps</h1>
      </WrapperContent>
    </WrapperFull>
  );
};

export default Apps;
