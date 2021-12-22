import { WrapperContent, WrapperFull } from "components/atoms/Wrapper";
import Navbar from "components/molecules/Navbar";
import React from "react";

function Doctor() {
  return (
    <WrapperFull>
      <WrapperContent>
        <Navbar />
        <h1 className="py-28">Ini adalah page Find a Doctor</h1>
      </WrapperContent>
    </WrapperFull>
  );
}

export default Doctor;
