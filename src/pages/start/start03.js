import React from "react";

import StartPage from "../../pagetemplates/StartPage";

const Start03 = () => {
  const paragraphText = ["This tool begins with the stories of each brand – where it comes from, what makes it special and how is it perceived, both internally and by our fans. After that we look at each brand’s value proposition, the portfolio spectrum, cases and applications. We finish with a toolbox to help you in your dialogue with customers, as well as a list of additional resources."]

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