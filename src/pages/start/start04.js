import React from "react";
import styled from "styled-components";

import StartPage from "../../pagetemplates/StartPage";
import UnorderedList from "../../components/UnorderedList";

const StyledDiv = styled.div`
  h1{
    margin-bottom: 60px;
    font-size: 60px !important;
  }
  p{
    margin-bottom: 40px;
  }
`;

const Start04 = () => {
  const paragraphText = ["After going through this learning tool you will"]
  
  const items = [
    "be more familiar with the brand you have least experience of",
    "understand each brand’s value proposition",
    "have a better understanding of how our portfolio, from Low to Super Heavy, can be matched to different customer needs and applications",
    "know which key messages to impress upon customers"
  ];

  return(
    <StyledDiv>
      <StartPage 
        headingText="Learn what you need to know"
        paragraphText={paragraphText}
        to="/start05" 
        backTo="/start03" 
      >
      <div>
        <UnorderedList items={items}/>
      </div>
      </StartPage>
    </StyledDiv>
  );
}

export default Start04;