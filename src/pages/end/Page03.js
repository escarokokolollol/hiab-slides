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

const Page03 = () => {

  return (
    <div className="page-transition">
      <BackgroundImage image={Background}>
        <StyledDiv>
          <h1>Key messages</h1>
          <Navigation backTo="/end02" to="/end04" />

        </StyledDiv>
      </BackgroundImage>
    </div>
  );

}

export default Page03;
