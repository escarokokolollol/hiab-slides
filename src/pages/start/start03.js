import React from "react";

import StartPage from "../../pagetemplates/StartPage";

const Start03 = () => {
  const paragraphText = ["This tool begins with the stories of each brand – where it comes from, what makes it special and how it is perceived. We compare each brand’s value proposition, then look at a number of cases and applications to see how the brands complement each other. At the end of the day, everything you find here is to help you in your dialogue with customers."]

  return(
    <StartPage 
      headingText="What to expect"
      paragraphText={paragraphText}
      to="/start04" 
      backTo="/start02" 
    />
  );
}

export default Start03;