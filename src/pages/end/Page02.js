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
  @media ${props => props.theme.thirdBreakpoint}{
      h1{
        font-size: 72px !important;
      }
  }
`;

const Start02 = () => {
  const items = [
    "be more familiar with the brand that you have least experience of ",
    "understand each brand’s value proposition",
    "have a better understanding of how our portfolio, from Light to Super Heavy, can be matched to different customer needs and applications"
  ];

  return (
    <StyledDiv>
      <StartPage
        className="StartPage"
        headingText="By this point you should"
        backTo="/end01"
        to="/end03"
      >
        <div>
          <UnorderedList items={items} />
        </div>
        <p>Now have a look at what’s available on the next couple of pages before you finish.</p>
      </StartPage>
    </StyledDiv>
  );
}

export default Start02;