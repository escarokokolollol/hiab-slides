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

const Page013 = () => {
  return (
    <ParagraphMiddle title="Unlike other manufacturers, EFFER offers customised loader cranes with exceptional reach and power-to-weight ratio in order to reach and carry what others can’t. Innovations such as CroSStab, V-Stab, continuous slewing and the use of second jibs all demonstrate technologies that make this possible." backgroundImage={Background} showEfferLogo={true} >
      <StyledDiv>
        <div className="RedArrowLink-wrapper">
          <RedArrowLink text="Compare with HIAB" toWhere="dont now yet"/>
        </div>
        <Navigation backTo="/about-effer/page012" to="/about-effer/page014"/>
      </StyledDiv>
    </ParagraphMiddle>
  );
}

export default Page013;