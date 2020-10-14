import React from "react";
import styled from "styled-components";

// components
import Navigation from "../../components/Navigation";
import BackgroundImage from "../../components/styled/BackgroundImage";

import Background from "../../assets/images/background01.jpg";
import WordCloud from "../../assets/images/effer/wordcloud-effer.svg";


const StyledDiv = styled.div`
  padding: ${props => props.theme.windowPadding};
  .grid{
    width: 400px;
    padding: 60px;
    background: rgba(10,10,10, 0.9);
    display: grid;
    grid-template-columns: 1fr;
    .grid-item{
      .wordcloud{
        width: 200px;
      }
    }
  }
  @media ${props => props.theme.firstBreakpoint}{
    .grid{
      width: 600px;
      grid-template-columns: 2fr 1fr;
      h1{
        font-size: 32px;
        line-height: 32px;
      }
      .wordcloud-wrapper{
        display: flex;
        align-items: center;
        justify-content: center;
        .wordcloud{
          width: 200px;
        }
      }
    }
  }
  @media ${props => props.theme.secondBreakpoint}{
    .grid{
      width: 800px;
      grid-template-columns: 1fr 1fr;
      h1{
        font-size: 34px;
        line-height: 34px;
      }
      .wordcloud-wrapper{
        .wordcloud{
          padding-left: 40px;
          width: 400px;
        }
      }
    }
  }
  @media ${props => props.theme.secondBreakpoint}{
    .grid{
      width: 900px;
      grid-template-columns: 1fr 1fr;
      h1{
        font-size: 55px;
        line-height: 55px;
      }
      .wordcloud-wrapper{
        .wordcloud{
          padding-left: 80px;
          width: 400px;
        }
      }
    }
  }
`;

const Page02 = () => {
  return (
    <div className="page-transition">
      <BackgroundImage image={Background}> 
        <StyledDiv>
          <div className="grid">
            <div className="grid-item">
              <h1>To understand EFFER you need to know where we come from.</h1>
              <p>The “Terra dei Motori”, or “Motor Valley” is home to some of the world’s most legendary and innovative motor companies including Ferrari, Lamborghini, Maserati and Ducati. No wonder EFFER is passionate about engineering.</p>
            </div>
            <div className="grid-item wordcloud-wrapper">
              <img className="wordcloud" src={WordCloud} />
            </div>
          </div>
          <Navigation backTo="/about-effer/page01" to="/about-effer/page03"/>
        </StyledDiv>
        
      </BackgroundImage>
    </div>
  );
};

export default Page02;
