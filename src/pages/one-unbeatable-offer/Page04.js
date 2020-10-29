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
  .wrapper{
    width: 400px;
    position: absolute;
    bottom: 60px;
    padding: 40px 60px;
    background: rgba(255,255,255, 0.8);
    color: #000;
    h1{
      margin: 0;
      font-size: 47px;
    }
  }
  @media ${props => props.theme.secondBreakpoint}{
    .wrapper{
      width: 700px;
      h1{
        font-size: 57px;
      }
    }

  }
`;

const Page04 = () => {
  return (
    <div className="page-transition">
      <BackgroundImage image={Background}>
        <StyledDiv>
          <div className="wrapper">
            <h1>Solutions for different applications</h1>
            <p>Another way to look at providing customers with the best solutions to meet their specific needs is to think in terms of applications.</p>
          </div>
          <Navigation backTo="/one-unbeatable-offer/page03" to="/one-unbeatable-offer/page05" />
        </StyledDiv>
      </BackgroundImage>
    </div>
  );
}

export default Page04;
