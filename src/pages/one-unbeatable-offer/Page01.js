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
    .BlackBoxHeading{
      max-width: 1370px;
      width:60%;
    }
  }
  @media ${props => props.theme.firstBreakpoint}{
    .BlackBoxHeading-wrapper{
      .logo{
        width: 120px;
      }
      h1{
        font-size: 32px;
        line-height:32px;
      }
    }
  }
  @media ${props => props.theme.secondBreakpoint}{
    .BlackBoxHeading-wrapper{
      h1{
        font-size:46px;
        line-height:46px;
      }
    }
  }
  @media ${props => props.theme.thirdBreakpoint}{
    .BlackBoxHeading-wrapper{
      h1{
        font-size: 66px;
        line-height: 66px;
      }
    }
  }
`;

const Page01 = () => {
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
          <Navigation backTo="/about-effer/page019" to="/one-unbeatable-offer/page02"/>
        </StyledDiv>
      </BackgroundImage>
    </div>
  );
}

export default Page01;