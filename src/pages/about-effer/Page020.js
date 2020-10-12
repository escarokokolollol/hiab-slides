import React from "react";
import styled from "styled-components";

// components
import Navigation from "../../components/Navigation";
import BackgroundImage from "../../components/styled/BackgroundImage";
import BlackBoxHeading from "../../components/BlackBoxHeading";

// images
import Background from "../../assets/images/effer/effer-big-05.jpg";

const StyledDiv = styled.div`
  padding: ${props => props.theme.windowPadding};
  h1{
    ${'' /* font-size: 56px !important;
    line-height: 56px !important; */}
  }
  .BlackBoxHeading-wrapper{
    width: 100%;
    position: absolute;
    bottom: 18%;
    left: 20%;
    .logo{
      width:100px;
    }
  }
  @media ${props => props.theme.firstBreakpoint}{
    .BlackBoxHeading-wrapper{
      .logo{
        width: 120px;
      }
      h1{
        font-size: 22px;
        line-height: 22px;
      }
    }
  }
  @media ${props => props.theme.secondBreakpoint}{
    .BlackBoxHeading-wrapper{
      h1{
        font-size:36px;
        line-height:36px;
      }
    }
  }
  @media ${props => props.theme.thirdBreakpoint}{
    .BlackBoxHeading-wrapper{
      h1{
        font-size: 56px;
        line-height: 56px;
      }
    }
  }
`;

const Page020 = () => {
  return (
    <div className="page-transition">
      <BackgroundImage image={Background}>
        <StyledDiv>
          <div className="BlackBoxHeading-wrapper">
            <BlackBoxHeading 
              showEfferLogo
              showHiabLogo
              title="Two remarkable brands" 
              titleUnder="One unbeatable offer"
            />
          </div>
          <Navigation backTo="/about-effer/page019" to="/about-effer/page021"/>
        </StyledDiv>
      </BackgroundImage>
    </div>
  );
}

export default Page020;