import React from "react";

import BackButton from "../../components/BackButton";
import ForwardButton from "../../components/ForwardButton";

const Page01 = () => {
  return (
    <div className="page-transition">
      <h1>Page01</h1>
      <h2>About Hiab</h2>
      <BackButton toWhere="/work-with"/>
      <ForwardButton toWhere="/about-hiab/page02"/>
    </div>
  );
}

export default Page01;