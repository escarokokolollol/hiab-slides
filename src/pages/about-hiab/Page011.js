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

  .BlackBoxHeading{
    width: 500px;
    h1{
      font-size: 56px;
      line-height: 56px;
    }
  }

  @media ${props => props.theme.secondBreakpoint}{
    .BlackBoxHeading{
      width: 740px;
      h1{
        font-size: 90px;
        line-height: 90px;
      }
    }
  }
 
`;

const Page011 = () => {
  return (
    <div className="page-transition">
      <BackgroundImage image={Background}>
        <StyledDiv>
          <BlackBoxHeading className="BlackBoxHeading" showHiabLogo title="INNOVATIONS"/>
          <Navigation backTo="/about-hiab/page010" to="/about-hiab/page012"/>
        </StyledDiv>
      </BackgroundImage>
    </div>
  );
}

export default Page011;