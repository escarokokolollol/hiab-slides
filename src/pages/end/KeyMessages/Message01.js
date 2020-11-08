import React from "react";
import styled from "styled-components";

// components
import Navigation from "../../../components/Navigation";
import BackgroundImage from "../../../components/styled/BackgroundImage";

// images
import Background from "../../../assets/images/messages/message01.jpg";

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
    position: relative;
    h2.brand-name{
      color: ${props => props.theme.red};
      font-size: 32px;
      margin: 0 0 20px;
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
        font-size: 40px;
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

const Message01 = () => {
  return (
    <div className="page-transition">
      <BackgroundImage backgroundWhite={true}>
        <StyledDiv>
          <div className="text-wrapper">
            <h2 className="brand-name">EFFER</h2>
            <h1>For people passionate about the challenge</h1>
            <p>"Reach what others can’t"</p>
            <p>"Conquer the toughest challenges"</p>
            <p>"Extreme reach. Extreme satisfaction."</p>
            <p>"Tough challenges. Tougher solutions."</p>
          </div>
          <div className="image-wrapper">
            <img src={Background} className="big-img" alt="cool" />
          </div>
          <Navigation backTo="/end03" to="/end05" />
        </StyledDiv>
      </BackgroundImage>
    </div>
  );
}

export default Message01;