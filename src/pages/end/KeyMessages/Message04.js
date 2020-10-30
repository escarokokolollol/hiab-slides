import React from "react";
import styled from "styled-components";

// components
import Navigation from "../../../components/Navigation";
import BackgroundImage from "../../../components/styled/BackgroundImage";

// images
import Background from "../../../assets/images/messages/message04.jpg";
import Logo from "../../../assets/icons/hiab-logo.svg";

const StyledDiv = styled.div`
  padding: ${props => props.theme.windowPadding};
  padding-top: 100px;
  height: 100vh;
  background: #fff;
  color: #000;

  .image-wrapper,
  .text-wrapper{
    float: left;
    width: 50%;
  }

  .text-wrapper{
    padding-right: 40px;
    h1{
      margin: 0;
    }
    p{
      margin: 10px 0;
    }
  }
  .image-wrapper{
    position: relative;
    img.big-img{
      width: 100%;
    }
    img.logo{
      width: 200px;
      position: absolute;
      left: 0px;
      top: 0px;
      padding: 16px 30px;
    }
  }
  @media ${props => props.theme.firstdBreakpoint}{
    .text-wrapper{
      h1{
        font-size: 34px;
      }
    }
  }
  @media ${props => props.theme.secondBreakpoint}{
    .text-wrapper{
      width: 40%;
      h1{
        width: 340px;
        font-size: 38px;
      }
    }
    .image-wrapper{
      width: 60%;
    }
  }
  @media ${props => props.theme.thirdBreakpoint}{
    .text-wrapper{
      h1{
        width: 500px;
        font-size: 58px;
      }
      p{
        font-size: 22px;
      }
    }
  }
`;

const Message03 = () => {
  return (
    <div className="page-transition">
      <BackgroundImage backgroundWhite={true}>
        <StyledDiv>

          <div className="text-wrapper">
            <h1>For enterprises that crave perfection</h1>
            <p>Optimise your business</p>
            <p>When reliability is everything</p>
            <p>Intelligent solutions to maximise uptime</p>
            <p>The best time of the day…UPTIME</p>
            <p>No. 1 in service</p>
          </div>

          <div className="image-wrapper">
            <img src={Background} className="big-img" alt="cool image" />
            <img src={Logo} className="logo" alt="logotype" />
          </div>

          <Navigation backTo="/end06" to="/end08" />
        </StyledDiv>
      </BackgroundImage>
    </div>
  );
}

export default Message03;