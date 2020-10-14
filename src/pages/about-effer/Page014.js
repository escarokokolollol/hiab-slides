import React from "react";
import styled from "styled-components";

// components 
import RedArrowLink from "../../components/RedArrowLink";
import Navigation from "../../components/Navigation";
// page template
import ParagraphMiddle from "../../pagetemplates/ParagraphMiddle";
// images
import Background from "../../assets/images/effer_hiab-background.jpg";

const StyledDiv = styled.div`
  .RedArrowLink-wrapper{
    display: inline;
    position: absolute;
    bottom: 50px;
    width: 40%;
    left: 30%;
  }
  @media ${props => props.theme.firstBreakpoint}{
  
  }
  @media ${props => props.theme.secondBreakpoint}{
    .RedArrowLink-wrapper{
      width: 30%;
      left: 35%;
    }
  }
  @media ${props => props.theme.thirdBreakpoint}{
    .RedArrowLink-wrapper{
      width: 20%;
      left: 40%;
    }
  }
`;

const Page014 = () => {
  return (
    <ParagraphMiddle title="More than that, we are known for providing the industry’s highest level of crane customisation and personal attention, two of the most cited reasons why customers continue to make EFFER their number one choice." backgroundImage={Background} showEfferLogo={true} >
      <StyledDiv>
        <div className="RedArrowLink-wrapper">
          <RedArrowLink text="Compare with HIAB" toWhere="dont now yet"/>
        </div>
        <Navigation backTo="/about-effer/page013" to="/about-effer/page015"/>
      </StyledDiv>
    </ParagraphMiddle>
  );
}

export default Page014;