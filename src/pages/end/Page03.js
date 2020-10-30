import React from "react";
import styled from "styled-components";

// components
import Navigation from "../../components/Navigation";
import BackgroundImage from "../../components/styled/BackgroundImage";

// images
import Background from "../../assets/images/messages/posters.jpg";

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
    height: 80vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: end;
    padding-right: 40px;
    h1{
      margin: 0;
    }
    p{
      margin: 10px 0;
      font-size: 20px;
    }
  }
  .image-wrapper{
    position: relative;
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
        font-size: 44px;
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

const Page03 = () => {
  return (
    <div className="page-transition">
      <BackgroundImage backgroundWhite={true}>
        <StyledDiv>

          <div className="text-wrapper">
            <h1>Key messages</h1>
            <p>On the next few pages we present some of the key messages that reflect the strengths of these two iconic brands as well as our combined offer. Use them as inspiration whenever you need to create communication for your market.</p>
          </div>

          <div className="image-wrapper">
            <img src={Background} className="big-img" alt="cool image" />
          </div>

          <Navigation backTo="/end02" to="/end04" />
        </StyledDiv>
      </BackgroundImage>
    </div>
  );
}

export default Page03;