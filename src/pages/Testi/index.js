import { WrapperContent, WrapperFull } from "components/atoms/Wrapper";
import Navbar from "components/molecules/Navbar";
import React from "react";

function Testimonials() {
  return (
    <WrapperFull>
      <WrapperContent>
        <Navbar />
        <h1 className="py-28">Ini adalah page Testimonials</h1>
      </WrapperContent>
    </WrapperFull>
  );
}

export default Testimonials;
