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
    width:  500px;
      h1{
        font-size: 52px;
        line-height: 52px;
      }
    }
  }

  @media ${props => props.theme.secondBreakpoint}{
    .BlackBoxHeading{
      width:  700px;
      h1{
        font-size: 80px;
        line-height: 80px;
      }
    }
  }
  @media ${props => props.theme.thirdBreakpoint}{
    .BlackBoxHeading{
      width:  800px;
      h1{
        font-size: 90px;
        line-height: 90px;
      }
    }
  }
 
`;

const Page07 = () => {
  return (
    <div className="page-transition">
      <BackgroundImage image={Background}>
        <StyledDiv>
          <div className="BlackBoxHeading-wrapper">
            <BlackBoxHeading className="BlackBoxHeading" showHiabLogo title="”To optimise your business”" />
          </div>
          <Navigation backTo="/about-hiab/page05" to="/about-hiab/page08" />
        </StyledDiv>
      </BackgroundImage>
    </div>
  );
}

export default Page07;