import React from "react";
import styled from "styled-components";

// components
import Navigation from "../../components/Navigation";
import BackgroundImage from "../../components/styled/BackgroundImage";

// images
import Background from "../../assets/images/hiab/hiab-bg.png";

const StyledDiv = styled.div`
  padding: ${props => props.theme.windowPadding};
  }
`;

const Page05 = () => {
  return (
    <div className="page-transition">
      <BackgroundImage image={Background}>
        <StyledDiv>
          <h1>Testamonials 1</h1>
          <h1>Testamonials 2</h1>
          <h1>Testamonials 3</h1>
          <p>HIAB ej färdig, kanske blir  filmer, kanske blir något annat</p>
          <Navigation backTo="/about-hiab/page06" to="/about-hiab/page07" />
        </StyledDiv>
      </BackgroundImage>
    </div>
  );
}

export default Page05;