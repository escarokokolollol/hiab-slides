import React from "react";

import StartPage from "../../pagetemplates/StartPage";
import UnorderedList from "../../components/UnorderedList";

const Start04 = () => {
  const items = [
    "be more familiar with the brand you have least experience of",
    "understand each brand’s value proposition",
    "have a better understanding of how our portfolio, from Low to Super Heavy, can be matched to different customer needs and applications",
    "know which key messages to impress upon customers"
  ];
  return(
    <StartPage 
      headingText="Learn what you need to know"
      paragraphText="After going through this learning tool you will" 
      to="/start05" 
      backTo="/start03" 
    >
    <UnorderedList items={items}/>
    </StartPage>
  );
}

export default Start04;