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
  .BlackBoxHeading{
    width: 560px;
    position: absolute;
    bottom: 60px;
    h1{
      font-size: 44px;
      line-height: 44px;
    }
  }
  @media ${props => props.theme.secondBreakpoint}{
    .BlackBoxHeading{
      width: 760px;
      h1{
        font-size: 64px;
        line-height: 64px;
      }
    }
  }
  @media ${props => props.theme.thirdBreakpoint}{
    .BlackBoxHeading{
      width: 1200px;
      h1{
        font-size:70px;
        line-height:70px;
      }
    }
  }
`;

const Page01 = () => {
  return (
    <div className="page-transition">
      <BackgroundImage image={Background}>
        <StyledDiv>
          <BlackBoxHeading className="BlackBoxHeading" title="You’re almost there!" />
          <Navigation backTo="/one-unbeatable-offer/page05" to="/end02" />
        </StyledDiv>
      </BackgroundImage>
    </div>
  );
}

export default Page01;