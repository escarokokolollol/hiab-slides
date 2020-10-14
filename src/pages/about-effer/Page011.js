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

const Page011 = () => {
  return (
    <ParagraphMiddle title="We do this by passionately building and configuring cranes to meet these customers’ tough demands for extreme performance and durability." backgroundImage={Background} showEfferLogo={true} >
      <StyledDiv>
        <div className="RedArrowLink-wrapper">
          <RedArrowLink text="Compare with HIAB" toWhere="dont now yet"/>
        </div>
        <Navigation backTo="/about-effer/page010" to="/about-effer/page012"/>
      </StyledDiv>
    </ParagraphMiddle>
  );
}

export default Page011;