import React from "react";
import styled from "styled-components";

// components
import Navigation from "../../../components/Navigation";
import BackgroundImage from "../../../components/styled/BackgroundImage";

// images
import Background from "../../../assets/images/messages/message04.jpg";

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
    h2.brand-name{
      color: ${props => props.theme.red};
      font-size: 32px;
      margin: 0 0 20px;
      span.cat{
        color: #000;
        margin:0;
        font-size: 22px;
        padding-bottom: 20px;
        font-family: Open sans;
      }
    }
    h1{
      margin: 0;
      margin-bottom: 20px;
    }
    p{
      margin: 0;
      margin-bottom: 34px; 
      font-size: 20px;
      font-style: italic;
    }
  }
  .image-wrapper{
    img.big-img{
      width: 100%;
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
        font-size: 37px;
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
        font-size: 50px;
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
            <h2 className="brand-name">HIAB <span className="cat">Key messages</span></h2>
            <h1>For enterprises that crave perfection</h1>
            <p>"Optimise your business"</p>
            <p>"When reliability is everything"</p>
            <p>"Intelligent solutions to maximise uptime"</p>
            <p>"The best time of the day…UPTIME"</p>
            <p>"No. 1 in service"</p>
          </div>

          <div className="image-wrapper">
            <img src={Background} className="big-img" alt="cool" />
          </div>

          <Navigation backTo="/end06" to="/end08" />
        </StyledDiv>
      </BackgroundImage>
    </div>
  );
}

export default Message03;