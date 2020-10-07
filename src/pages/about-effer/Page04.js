import React from "react";
import styled from "styled-components";

// components
import Navigation from "../../components/Navigation";
import BackgroundImage from "../../components/styled/BackgroundImage";

// images
import Background from "../../assets/images/effer01.jpg";

const StyledDiv = styled.div`
  padding: ${props => props.theme.windowPadding};
`;

const Page04 = () => {
  return (
    <div className="page-transition">
      <BackgroundImage image={Background}>
        <StyledDiv>
          <h1>NEW “BETWEEN SECTIONS” SLIDE TO CATCH ONE’S BREATH</h1>
          <Navigation backTo="/about-effer/page03" to="/about-effer/page05"/>
        </StyledDiv>
      </BackgroundImage>
    </div>
  );
}

export default Page04;