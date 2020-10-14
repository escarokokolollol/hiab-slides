import React from "react";
import styled from "styled-components";

// components
import Navigation from "../../components/Navigation";
import BackgroundImage from "../../components/styled/BackgroundImage";
import BlackBoxHeading from "../../components/BlackBoxHeading";

// images
import Background from "../../assets/images/effer/efferarkiv01.jpg";


const StyledDiv = styled.div`
  padding: ${props => props.theme.windowPadding};

  @media ${props => props.theme.firstBreakpoint}{
    .BlackBoxHeading{
      h1{
        font-size: 52px;
        line-height: 52px;
      }
    }
  }
  @media ${props => props.theme.secondBreakpoint}{
    .BlackBoxHeading{
      h1{
        font-size: 72px;
        line-height: 72px;
      }
    }
  }
  @media ${props => props.theme.thirdBreakpoint}{
    .BlackBoxHeading{
      width: 670px;
      h1{
        font-size: 90px;
        line-height: 90px;
      }
    }
  }
 
`;

const Page08 = () => {
  return (
    <div className="page-transition">
      <BackgroundImage image={Background}>
        <StyledDiv>
          <BlackBoxHeading className="BlackBoxHeading" showEfferLogo title="”To conquer the toughest challenges”"/>
          <Navigation backTo="/about-effer/page07" to="/about-effer/page09"/>
        </StyledDiv>
      </BackgroundImage>
    </div>
  );
}

export default Page08;