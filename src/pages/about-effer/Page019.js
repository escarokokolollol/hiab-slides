import React from "react";
import styled from "styled-components";

import SingleHeadingMiddle from "../../pagetemplates/SingleHeadingMiddle";
import Navigation from "../../components/Navigation";

// images
import Background from "../../assets/images/effer/effer-bg-dark04.jpg";

const StyledDiv = styled.div`
  h1{
    font-size:26px;
    width:600px;
  }

  @media ${props => props.theme.secondBreakpoint}{
    h1{
      font-size:42px;
      width:800px;
    }
  }
  @media ${props => props.theme.thirdBreakpoint}{
    h1{
      font-size:52px;
      width: 1000px;
    }
  }
`;

const Page019 = () => {
  return (
    <StyledDiv>
      <SingleHeadingMiddle overTitle="So… " title="How can this knowledge help you when dealing with customers?" backgroundImage={Background} showEfferLogo={true} >
        <Navigation backTo="/about-effer/page018" to="/one-unbeatable-offer/page01"/>
      </SingleHeadingMiddle>
    </StyledDiv>
  );
}

export default Page019;