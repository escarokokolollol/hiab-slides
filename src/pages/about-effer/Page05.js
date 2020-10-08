import React from "react";
import styled from "styled-components";

// components
import Navigation from "../../components/Navigation";
import BackgroundImage from "../../components/styled/BackgroundImage";

// images
import Background from "../../assets/images/effer/effer-big-05.jpg";

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
          <p>ej färdig, kanske blir  filmer, kanske blir något annat</p>
          <Navigation backTo="/about-effer/page04" to="/about-effer/page06"/>
        </StyledDiv>
      </BackgroundImage>
    </div>
  );
}

export default Page05;