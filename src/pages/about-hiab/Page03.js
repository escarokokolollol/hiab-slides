import React, { useState, useEffect } from "react";
import styled from "styled-components";

// components
import Navigation from "../../components/Navigation";
import BackgroundImage from "../../components/styled/BackgroundImage";

// images
import ScrollArrow from "../../assets/icons/scroll-arrow.svg";
import Background from "../../assets/images/hiab/hiab-forestbg.jpg";
import image1 from "../../assets/images/hiab/hiab-192.jpg";
import image2 from "../../assets/images/hiab/hiab-elefant.jpg";
import image3 from "../../assets/images/hiab/hiab-million01.jpg";
import image4 from "../../assets/images/hiab/hiabcool02.jpg";

const StyledDiv = styled.div`
  padding: ${props => props.theme.windowPadding};
  padding: 3% 9%;
  h1{
    margin-top:10px;
    text-align: center;
  }
  .title{
    font-size:42px;
    text-align: center;
    margin-top: 30vh;
  }
  .under-title{
    font-size: 22px;
    text-align: center;
    margin: 0 auto;
    max-width: 900px;
    margin-bottom: 30px;
  }
  
  .posts{
    padding: 20px 0;
    .post{
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 6fr 1fr;
      column-gap: 20px;
      grid-row-gap: 2px;
      div.image{
        img{
          width: 100%;
        }
      }
      h2{
        margin: 0;
      }
      .text{
        max-width:400px;
      }
      .text-align-right{
        justify-self: end;
        text-align: right;
      }
      .text p{
        margin-top:0;
      }
    }
  }

  @media ${props => props.theme.firstBreakpoint}{
    h1{
      font-size: 36px;
    }
    h2{
      font-size: 26px;
    }
    .text{
        width: 70%;
    }
  }
  @media ${props => props.theme.secondBreakpoint}{
    .title{
      font-size:48px;
    }
    h1{
      font-size: 46px;
    }
    h2{
      font-size: 52px;
    }
    .text{
      font-size: 18px;
    }
  }
  @media ${props => props.theme.thirdBreakpoint}{
    h1{
      font-size: 66px;
    }
    h2{
      font-size: 78px;
    }
    .text{
      font-size: 24px;
    }
  }
  .overlay-scroll{
    height: 100%;
    background: rgba(0,0,0, 0.8);
    opacity: 1;
    transition: opacity 2s ease;
    display:flex;
    justify-content: center;
    background: transparent;
    margin-bottom: 10vh;
    h1{
      margin: 0 0 10px 0;
      font-size: 22px;
    }
    img{
      width: 30px;
      margin: 0 auto;
      display: inherit;
    }
  }
  .hide{
    opacity: 0;
    pointer-events: none;
    transition: opacity 2s ease;
  }
`;

const Page03 = () => {

  const [toggle, setToggle] = useState(false);

  
  const removeScrollText = () => {
    setToggle(false);
  }
  
  useEffect( () => {
    window.addEventListener('scroll', removeScrollText);
    setTimeout( () => {
      setToggle(true);
    },4000);
  },[]);

  return (
    <div className="page-transition">
      <BackgroundImage image={Background}>
        <StyledDiv>

          <h1 className="title">And the rest is history</h1>
          <p className="under-title">Not only did Eric’s new hydraulics company become more successful than his original business, but the method he came up revolutionised load handling forever. </p>

          <div className={`${toggle ? "overlay-scroll" : "overlay-scroll hide"}`}>
            <div>
              <h1>
                SCROLL TO NAVIGATE
              </h1>
              <img src={ScrollArrow} alt="image1"/>
            </div>
          </div>

          <div className="posts">
            <div className="post">
              <div className="image">
                <img src={image1} alt="image1"/>
              </div>
              <div className="text">
                <h2>192</h2>
                <p>The name of the first HIAB model powered by the truck’s own engine. It was a huge success, with nearly 13,000 units sold up until 1964.</p>
              </div>
            </div>

            <div className="post">
              <div className="text text-align-right">
                <h2>1956</h2>
                <p>The year that Hiab launched the “Elefant” loader crane. It was an engineering breakthrough that introduced the “knuckleboom” crane – the standard ever since.</p>
              </div>
              <div className="image">
                <img src={image2} alt="image2"/>
              </div>
            </div>

            <div className="post">
              <div className="image">
                <img src={image3} alt="image3"/>
              </div>
              <div className="text">
                <h2>Half a million</h2>
                <p>The number of HIAB loader cranes that have been delivered to customers in over 120 countries since 1944!</p>
              </div>
            </div>

            <div className="post">
              <div className="text text-align-right">
                <h2>75+</h2>
                <p>Our age. And we’re proud of it. Today the HIAB brand is synonymous with loader cranes. And our parent company, Hiab, with leading brands like LOGLIFT, MOFFET, MULTILIFT, ZEPRO, DEL, WALTCO and of course, EFFER, is considered the premier brand in the global load handling industry.</p>
              </div>
              <div className="image">
                <img src={image4} alt="image4"/>
              </div>
            </div>

          </div>
          <Navigation backTo="/about-hiab/page02" to="/about-hiab/page04"/>
        </StyledDiv>
      </BackgroundImage>
    </div>
  );
}

export default Page03;