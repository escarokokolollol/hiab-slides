import React, { useState, useEffect } from "react";
import styled from "styled-components";

// components
import Navigation from "../../components/Navigation";
import BackgroundImage from "../../components/styled/BackgroundImage";

// images
import ScrollArrow from "../../assets/icons/scroll-arrow.svg";
import Background from "../../assets/images/dark-background01.jpg";
import image1 from "../../assets/images/effer/effer-inovation01.jpg";
import image2 from "../../assets/images/effer/effer-inovation02.jpg";
import image3 from "../../assets/images/effer/effer-inovation03.jpg";
import image4 from "../../assets/images/effer/effer-inovation04.jpg";

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
    position: absolute;
    top: 0;
    left:0;
    width: 100vw;
    height: 100%;
    background: rgba(0,0,0, 0.8);
    opacity: 1;
    transition: opacity 2s ease;
    display:flex;
    justify-content: center;
    h1{
      margin-top: 30vh;
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

  const [toggle, setToggle] = useState(true);
  
  useEffect( () => {
    setTimeout(() => {
      setToggle(false);
    }, 2000);
  });

  return (
    <div className="page-transition">
      <BackgroundImage image={Background}>
        <StyledDiv>
          <div className={`${toggle ? "overlay-scroll" : "overlay-scroll hide"}`}>
            <div>
              <h1>
                SCROLL TO NAVIGATE
              </h1>
              <img src={ScrollArrow} alt="image1"/>
            </div>
          </div>
          <h1 className="title">Est. 1965. Innovating ever since.</h1>
          <div className="posts">

            <div className="post">
              <div className="image">
                <img src={image1} alt="image1"/>
              </div>
              <div className="text">
                <h2>1969</h2>
                <p>Just four years after its start, EFFER introduced the first crane with a lifting capacity of 40 Tm – a novelty for its time</p>
              </div>
            </div>

            <div className="post">
              <div className="text text-align-right">
                <h2>1988</h2>
                <p>Exhibited largest crane truck ever built at SAIE; lifting capacity of 200 Tm and working height of 50 m</p>
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
                <h2>2001</h2>
                <p>Launched decagonal-profile section boom with patented solution taking full advantage of high-tensile strength steel to reduce crane weight</p>
              </div>
            </div>

            <div className="post">
              <div className="text text-align-right">
                <h2>2008</h2>
                <p>Patented the CroSStab stabilization system that increases load capacity and stability of the crane in front of the cabin</p>
              </div>
              <div className="image">
                <img src={image4} alt="image4"/>
              </div>
            </div>

          </div>
          <Navigation backTo="/about-effer/page02" to="/about-effer/page04"/>
        </StyledDiv>
      </BackgroundImage>
    </div>
  );
}

export default Page03;