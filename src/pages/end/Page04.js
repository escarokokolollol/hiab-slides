import React from "react";
import styled from "styled-components";

// components
import BackgroundImage from "../../components/styled/BackgroundImage.js";
import Navigation from "../../components/Navigation";

// images
import Background from "../../assets/images/effer_hiab-background.jpg";

const StyledDiv = styled.div`
  h1{
    margin: 0;
  }
`;

const Page04 = () => {

  return (
    <div className="page-transition">
      <BackgroundImage image={Background}>
        <StyledDiv>
          <h1>Links</h1>
          <Navigation backTo="/end03" to="/end05" />

        </StyledDiv>
      </BackgroundImage>
    </div>
  );

}

export default Page04;
