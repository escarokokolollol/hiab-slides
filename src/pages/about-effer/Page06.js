import React from "react";
import styled from "styled-components";

// components
import Navigation from "../../components/Navigation";
import BackgroundImage from "../../components/styled/BackgroundImage";
import BlackBoxHeading from "../../components/BlackBoxHeading";

// images
import Background from "../../assets/images/effer/effer-big-05.jpg";

const StyledDiv = styled.div`
  padding: ${props => props.theme.windowPadding};
 
`;

const Page06 = () => {
  return (
    <div className="page-transition">
      <BackgroundImage image={Background}>
        <StyledDiv>
          <BlackBoxHeading showEfferLogo title="Finally, do you know how people working at EFFER feel about the importance of what they do?"/>
          <Navigation backTo="/about-effer/page05" to="/about-effer/page07"/>
        </StyledDiv>
      </BackgroundImage>
    </div>
  );
}

export default Page06;