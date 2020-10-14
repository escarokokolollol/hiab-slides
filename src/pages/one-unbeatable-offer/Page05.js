import React, { useState } from "react";
import styled from "styled-components";

// components
import Navigation from "../../components/Navigation";
import BackgroundImage from "../../components/styled/BackgroundImage";

// images
import Background from "../../assets/images/effer_hiab-background.jpg";

const StyledDiv = styled.div`
  
`;

const Page05 = () => {
  return (
    <div className="page-transition">
      <BackgroundImage image={Background}>
        <StyledDiv>
        <h1>one unbeatable offer 05</h1>
         
          <Navigation backTo="/one-unbeatable-offer/page02" to="/one-unbeatable-offer/page04"/>
        </StyledDiv>
      </BackgroundImage>
    </div>
  );
}

export default Page05;