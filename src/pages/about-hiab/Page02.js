import React from "react";

import BackButton from "../../components/BackButton";
import ForwardButton from "../../components/ForwardButton";

const Page02 = () => {
  return (
    <div className="page-transition">
      <h1>Page02</h1>
      <h2>About Hiab</h2>
      <BackButton />
      <ForwardButton />
    </div>
  );
}

export default Page02;