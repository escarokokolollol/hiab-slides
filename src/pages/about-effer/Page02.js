import React from "react";
import styled from "styled-components";

// components
import Navigation from "../../components/Navigation";
import BackgroundImage from "../../components/styled/BackgroundImage";

import Background from "../../assets/images/motor.png";
import WordCloud from "../../assets/images/effer/wordcloud_white.svg";


const StyledDiv = styled.div`
  padding: ${props => props.theme.windowPadding};
  display: grid;
  grid-template-columns: 1fr 1fr;
  .text{
    padding: 20px;
    background: rgba(10,10,10, 0.9);
    h1{
      margin:0;
      font-size: 24px;
    }
  }
  .wordcloud-wrapper{
    padding: 60px 40px;
    img{
      width: 200px;
      -webkit-filter: drop-shadow( 10px 10px 10px rgba(0, 0, 0, .7));
        filter: drop-shadow( 10px 10px 10px rgba(0, 0, 0, .7));
    }
  }
  @media ${props => props.theme.firstBreakpoint}{
    .text{
      h1{
        font-size: 32px;
        line-height: 32px;
      }
    }
    .wordcloud-wrapper{
      img{
        width: 300px;
      }
    }
  }
  @media ${props => props.theme.secondBreakpoint}{
    .text{
      padding: 60px;
      width: 480px;
      h1{
        font-size: 45px;
        line-height: 45px;
      }
    }
    .wordcloud-wrapper{
      margin-top: 80px;
      img{
        width:440px;
      }
    }
  }
  @media ${props => props.theme.thirdBreakpoint}{
    .text{
      padding: 60px;
      width: 580px;
      h1{
        font-size: 58px;
        line-height: 58px;
      }
      p{
        font-size: 20px;
      }
    }
    .wordcloud-wrapper{
      img{
        width: 560px;
      }
    }
  }
`;

const Page02 = () => {
  return (
    <div className="page-transition">
      <BackgroundImage image={Background}>
        <StyledDiv>
          <div className="text">
            <h1>To understand EFFER you need to know where we come from.</h1>
            <p>The “Terra dei Motori”, or “Motor Valley” is home to some of the world’s most legendary and innovative motor companies including Ferrari, Lamborghini, Maserati and Ducati. No wonder EFFER is passionate about engineering.</p>
          </div>
          <div className="wordcloud-wrapper">
            <img className="wordcloud" src={WordCloud} alt="wordcloud" />
          </div>
          <Navigation backTo="/about-effer/page01" to="/about-effer/page03" />
        </StyledDiv>

      </BackgroundImage>
    </div>
  );
};

export default Page02;
