import React from "react";

import SingleHeadingMiddle from "../../pagetemplates/SingleHeadingMiddle";
import Navigation from "../../components/Navigation";

// images
import Background from "../../assets/images/effer/efferarkiv01bg.jpg";

const Page09 = () => {
  return (
    <SingleHeadingMiddle title="What we offer" backgroundImage={Background} showEfferLogo={true} >
      <Navigation backTo="/about-effer/page08" to="/about-effer/page010"/>
    </SingleHeadingMiddle>
  );
}

export default Page09;