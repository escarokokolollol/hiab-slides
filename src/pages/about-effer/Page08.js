import React from "react";
import styled from "styled-components";

// components
import Navigation from "../../components/Navigation";
import BackgroundImage from "../../components/styled/BackgroundImage";
import BlackBoxHeading from "../../components/BlackBoxHeading";

// images
import Background from "../../assets/images/effer/efferasd02.jpg";


const StyledDiv = styled.div`
  padding: ${props => props.theme.windowPadding};
  .BlackBoxHeading{
    h1{
      font-size: 52px;
      line-height: 52px;
    }
    p.under{
      font-size: 28px;
      margin: 0;
    }
  }

  @media ${props => props.theme.firstBreakpoint}{
    .BlackBoxHeading{
      width: 400px;
      h1{
        font-size: 47px;
        line-height: 47px;
      }
    }
  }
  @media ${props => props.theme.secondBreakpoint}{
    .BlackBoxHeading{
      width: 600px;
      h1{
        font-size: 48px;
        line-height: 48px;
      }
    }
  }
  @media ${props => props.theme.thirdBreakpoint}{
    .BlackBoxHeading{
      width: 770px;
      h1{
        font-size: 65px;
        line-height: 65px;
      }
    }
  }
 
`;

const Page08 = () => {
  return (
    <div className="page-transition">
      <BackgroundImage image={Background}>
        <StyledDiv>
          <BlackBoxHeading className="BlackBoxHeading" showEfferLogo title="”To conquer the toughest challenges”" textUnder="Our value proposition"/>
          <Navigation backTo="/about-effer/page05" to="/about-effer/page09"/>
        </StyledDiv>
      </BackgroundImage>
    </div>
  );
}

export default Page08;