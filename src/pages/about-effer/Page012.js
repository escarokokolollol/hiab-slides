import React from "react";

import SingleHeadingMiddle from "../../pagetemplates/SingleHeadingMiddle";
import Navigation from "../../components/Navigation";

// images
import Background from "../../assets/images/effer_hiab-background.jpg";

const Page012 = () => {
  return (
    <SingleHeadingMiddle title="What sets us apart " backgroundImage={Background} showEfferLogo={true} >
      <Navigation backTo="/about-effer/page011" to="/about-effer/page013"/>
    </SingleHeadingMiddle>
  );
}

export default Page012;