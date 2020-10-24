import React from "react";
import styled from "styled-components";

import StartPage from "../../pagetemplates/StartPage";
import UnorderedList from "../../components/UnorderedList";

const StyledDiv = styled.div`
  h1{
    margin-bottom: 0px;
    font-size: 60px !important;
  }
  p{
    margin-bottom: 0px;
  }
`;

const Start04 = () => {
  
  const items = [
    "be more familiar with the brand you have least experience of",
    "understand each brand’s value proposition",
    "feel better equipped to match our portfolio to different customer needs",
    "know which key messages to impress upon customers"
  ];

  return(



    <StyledDiv>
      <StartPage
        headingText="When done you should"
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
