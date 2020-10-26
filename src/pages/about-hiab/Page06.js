import React from "react";
import styled from "styled-components";

// components
import Navigation from "../../components/Navigation";
import BackgroundImage from "../../components/styled/BackgroundImage";
import BlackBoxHeading from "../../components/BlackBoxHeading";

// images
import Background from "../../assets/images/hiab/hiab-bg.png";

const StyledDiv = styled.div`
  padding: ${props => props.theme.windowPadding};
 
`;

const Page06 = () => {
  return (
    <div className="page-transition">
      <BackgroundImage image={Background}>
        <StyledDiv>
          <BlackBoxHeading title="The smart choice" textUnder=" That’s how many customers see us. In their eyes, we are the company that provides intelligent solutions that enable them to optimise their business. In the next section we’ll see how this forms the basis of HIAB’s value proposition." />
          <Navigation backTo="/about-hiab/brand-movie" to="/about-hiab/page05" />
        </StyledDiv>
      </BackgroundImage>
    </div>
  );
}

export default Page06;