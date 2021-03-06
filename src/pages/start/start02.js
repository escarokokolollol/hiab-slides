import React from "react";

import StartPage from "../../pagetemplates/StartPage";

const Start02 = () => {
  const paragraphText = ["In 2019 a long-term strategy called “Stronger Together” was introduced aimed at fulfilling customer needs and demands through an expanded product portfolio and greater service coverage. “La Sfida”, which means “The Challenge” in Italian, is a learning tool originating from that strategy. It is designed to help those of us already working with one brand to become more familiar with the other, and to make it easier for all of us to match the needs of our customers with our exceptional offer."];
  return(
    <StartPage 
      headingText="Why “la Sfida”"
      paragraphText={paragraphText} 
      to="/start03" 
      backTo="/" 
    />
  );
}

export default Start02;