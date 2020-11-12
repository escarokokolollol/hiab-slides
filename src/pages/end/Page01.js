import React from "react";
import styled from "styled-components";

// components
import Navigation from "../../components/Navigation";
import BackgroundImage from "../../components/styled/BackgroundImage";
import BlackBoxHeading from "../../components/BlackBoxHeading";

// images
import Background from "../../assets/images/hiabeffer222.jpg";

const StyledDiv = styled.div`
  padding: ${props => props.theme.windowPadding};
  .BlackBoxHeading{
    padding: 40px;
    width: 560px;
    position: absolute;
    bottom: 60px;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    background: rgba(255,255,255, 0.8);
    color: #000;
    h1{
      font-size: 50px;
      line-height: 50px;
    }
  }
  @media ${props => props.theme.thirdBreakpoint}{
    .BlackBoxHeading{
      width: 750px;
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