import React from "react";

import BackButton from "../../components/BackButton";
import ForwardButton from "../../components/ForwardButton";

const Page02 = () => {
  return (
    <div className="page-transition">
      <h1>BUT WHAT DO YOU KNOW ABOUT EFFER?</h1>
      <BackButton toWhere="/about-effer/page01"/>
      <ForwardButton />
    </div>
  );
}

export default Page02;