import React from "react";
import styled from "styled-components";

// components
import Navigation from "../../components/Navigation";
import BackgroundImage from "../../components/styled/BackgroundImage";
import BlackBoxHeading from "../../components/BlackBoxHeading";

// images
import Background from "../../assets/images/effer/effer-bg03.jpg";
const StyledDiv = styled.div`
  padding: ${props => props.theme.windowPadding};
  .BlackBoxHeading-wrapper{
    width: 90%;
    position: absolute;
    bottom: 60px;
    div{
    }
  }
  @media ${props => props.theme.thirdBreakpoint}{
    .BlackBoxHeading-wrapper{
      h1{
        font-size:80px;
        line-height:80px;
      }
    }
  }
`;

const Page04 = () => {
  return (
    <div className="page-transition">
      <BackgroundImage image={Background}>
        <StyledDiv>
          <div className="BlackBoxHeading-wrapper">
            <BlackBoxHeading title="Solutions for different applications"/>
          </div>
          <Navigation backTo="/one-unbeatable-offer/page03" to="/one-unbeatable-offer/page05"/>
        </StyledDiv>
      </BackgroundImage>
    </div>
  );
}

export default Page04;