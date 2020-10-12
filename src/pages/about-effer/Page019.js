import React from "react";

import SingleHeadingMiddle from "../../pagetemplates/SingleHeadingMiddle";
import Navigation from "../../components/Navigation";

// images
import Background from "../../assets/images/effer_hiab-background.jpg";

const Page019 = () => {
  return (
    <SingleHeadingMiddle overTitle="So… " title="How can this knowledge help you when dealing with customers?" backgroundImage={Background} showEfferLogo={true} >
      <Navigation backTo="/about-effer/page08" to="/about-effer/page010"/>
    </SingleHeadingMiddle>
  );
}

export default Page019;