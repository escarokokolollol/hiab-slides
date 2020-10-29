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
    width: 560px;
    position: absolute;
    bottom: 60px;
    padding: 40px 60px;
    background: rgba(255,255,255, 0.8);
    color: #000;
    h1{
      margin:0;
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

const Page03 = () => {
  return (
    <div className="page-transition">
      <BackgroundImage image={Background}>
        <StyledDiv>
          <BlackBoxHeading className="BlackBoxHeading" title="Key messages" textUnder="On the next few pages you’ll find a selection of images and key messages that reflect the strengths of these two iconic brands as well as of our combined offer. Use them as inspiration whenever you need to create communication for your market." />
          <Navigation backTo="/end02" to="/end04" />
        </StyledDiv>
      </BackgroundImage>
    </div>
  );
}

export default Page03;