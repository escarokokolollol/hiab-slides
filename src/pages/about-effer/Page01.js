import React from "react";

import BackButton from "../../components/BackButton";
import ForwardButton from "../../components/ForwardButton";

const Page01 = () => {
  return (
    <div className="page-transition">
      <h1>THEN YOU ALREADY KNOW THAT</h1>
      <h1>AT HIAB, WE’RE RECOGNISED AS</h1>
      <ul>
        <li>Inventor of the original truck mounted crane</li>
        <li>Pioneering innovations for more than 75 years</li>
        <li>Now creating smart solutions that enable smarter business operations for our customers</li>
      </ul>
      <BackButton toWhere="/work-with"/>
      <ForwardButton toWhere="/about-effer/page02"/>
    </div>
  );
}

export default Page01;