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

const Page07 = () => {
  return (
    <div className="page-transition">
      <BackgroundImage image={Background}>
        <StyledDiv>
          <div className="BlackBoxHeading-wrapper">
            <BlackBoxHeading title="How we see ourselves" textUnder="is very much a reflection of the image created by our customers’ experiences. In their eyes, we are the company that provides specialised cranes that enable them to conquer the toughest challenges. In the next section we’ll see how this forms the basis of EFFER’s value proposition."/>
          </div>
          <Navigation backTo="/about-effer/page06" to="/about-effer/page08"/>
        </StyledDiv>
      </BackgroundImage>
    </div>
  );
}

export default Page07;