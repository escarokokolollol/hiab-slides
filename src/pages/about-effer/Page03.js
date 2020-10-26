import React, { useState, useEffect } from "react";
import styled from "styled-components";

// components
import Navigation from "../../components/Navigation";
import BackgroundImage from "../../components/styled/BackgroundImage";

// images
import ScrollArrow from "../../assets/icons/scroll-arrow.svg";
import Background from "../../assets/images/dark-background01.jpg";
import image1 from "../../assets/images/effer/timeline/1966.jpg";
import image2 from "../../assets/images/missing.jpg";
import image3 from "../../assets/images/effer/timeline/1985.jpg";
import image4 from "../../assets/images/effer/timeline/1988.jpg";
import image5 from "../../assets/images/effer/timeline/2001.jpg";
import image6 from "../../assets/images/effer/timeline/2008.jpg";
import image7 from "../../assets/images/effer/timeline/2014.jpg";
import image8 from "../../assets/images/effer/timeline/2018.jpg";

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
    margin-bottom: 0;
    margin-top: 30vh;
  }
  .under-title{
    font-size: 52px;
    text-align: center;
    margin: 0 auto;
    margin-top: 0;
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

  useEffect(() => {
    window.addEventListener('scroll', removeScrollText);
    setTimeout(() => {
      setToggle(true);
    }, 2000);
  }, []);

  return (
    <div className="page-transition">
      <BackgroundImage image={Background}>
        <StyledDiv>
          <h1 className="title">Est. 1965. </h1>
          <h1 className="under-title">Innovating ever since.</h1>
          <div className={`${toggle ? "overlay-scroll" : "overlay-scroll hide"}`}>
            <div>
              <h1>
                SCROLL TO NAVIGATE
              </h1>
              <img src={ScrollArrow} alt="scroll icon" />
            </div>
          </div>

          <div className="posts">

            <div className="post">
              <div className="image">
                <img src={image1} alt="image1" />
              </div>
              <div className="text">
                <h2>1966</h2>
                <p>Effer launches its first mechanical JIB mounted atop its E55 model</p>
              </div>
            </div>

            <div className="post">
              <div className="text text-align-right">
                <h2>1969</h2>
                <p>Just four years after its start, Effer introduces the first crane with a lifting capacity of 40 Tm – a novelty for its time</p>
              </div>
              <div className="image">
                <img src={image2} alt="image2" />
              </div>
            </div>

            <div className="post">
              <div className="image">
                <img src={image3} alt="image3" />
              </div>
              <div className="text">
                <h2>1985</h2>
                <p>This special application created for the Americas was the first-of-its kind</p>
              </div>
            </div>

            <div className="post">
              <div className="text text-align-right">
                <h2>1988</h2>
                <p>At the time of its introduction, the Effer 2200 is the largest crane truck ever built, with a lifting capacity of 200 Tm and a working height of 50 m,</p>
              </div>
              <div className="image">
                <img src={image4} alt="image4" />
              </div>
            </div>

            <div className="post">
              <div className="image">
                <img src={image5} alt="image5" />
              </div>
              <div className="text">
                <h2>2001</h2>
                <p>Effer invents the decagonal boom section achieving lighter crane weight and maximum resistance even under extreme working conditions.</p>
              </div>
            </div>

            <div className="post">
              <div className="text text-align-right">
                <h2>2008</h2>
                <p>Effer invents CroSStab, a novel and superior stabilization system that increases load capacity and stability of the crane in front of the cabin</p>
              </div>
              <div className="image">
                <img src={image6} alt="image6" />
              </div>
            </div>

            <div className="post">
              <div className="image">
                <img src={image7} alt="image7" />
              </div>
              <div className="text">
                <h2>2014</h2>
                <p>V-Stab is introduced, an Effer innovation combining exceptional stability and compactness for working in tight spaces</p>
              </div>
            </div>

            <div className="post">
              <div className="text text-align-right">
                <h2>2018</h2>
                <p>The introduction of the JIB XL makes Effer cranes among the most performing in terms of reach and load handling, enabling customers to reach where nobody else can!</p>
              </div>
              <div className="image">
                <img src={image8} alt="image8" />
              </div>
            </div>

          </div>
          <Navigation backTo="/about-effer/page02" to="/about-effer/page07" />
        </StyledDiv>
      </BackgroundImage>
    </div>
  );
}

export default Page03;