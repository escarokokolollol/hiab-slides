import React from "react";
import styled from "styled-components";

// components
import Navigation from "../../components/Navigation";
import BackgroundImage from "../../components/styled/BackgroundImage";
import BlackBoxHeading from "../../components/BlackBoxHeading";

// images
import Background from "../../assets/images/effer/efferinsta03.jpg";


const StyledDiv = styled.div`
  padding: ${props => props.theme.windowPadding};

  @media ${props => props.theme.thirdBreakpoint}{
    h1{
      font-size: 90px;
      line-height: 90px;
    }
  }
 
`;

const Page08 = () => {
  return (
    <div className="page-transition">
      <BackgroundImage image={Background}>
        <StyledDiv>
          <BlackBoxHeading showEfferLogo title="”To conquer the toughest challenges”"/>
          <Navigation backTo="/about-effer/page07" to="/about-effer/page09"/>
        </StyledDiv>
      </BackgroundImage>
    </div>
  );
}

export default Page08;