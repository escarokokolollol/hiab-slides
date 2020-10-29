import React from "react";
import styled from "styled-components";

import BackgroundImage from "../../components/styled/BackgroundImage";
import Navigation from "../../components/Navigation";

import Background from "../../assets/images/hiab/hiab-bg-dark.jpg";

const StyledDiv = styled.div`
  height: 100vh;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
 
  .video-popup{
    ${'' /* z-index: 110; */}
    position: absolute;
    top:0 ;
    left : 0;
    height: 100vh;
    width: 100vw;
    background: rgba(0,0,0, 0.8);
    padding: 100px;
    .close-icon{
      position: absolute;
      top: 40px;
      right: 40px;
      width: 40px;
      height: 40px;
      transition: all .2s ease;
    }
    .close-icon:hover{
      cursor: pointer;
      transform: scale(1.2);
      transition: all .2s ease;
    }
    .video-popup-inner{
      display:flex;
      justify-content: center;
      align-items: center;
      position: relative;
      height: 100%;
      .video {
        background: #fff;
        ${'' /* box-shadow: 1px 1px 12px #888; */}
        border-radius: 8px;
        padding: 10px;
        
        width: 544px;
        height: 315px;
      }
    }
  }

  @media ${props => props.theme.secondBreakpoint}{
    .video-popup{
      .video-popup-inner{
        .video{
          width: 700px;
          height: 403px;
        }
      }
    }
  }
  @media ${props => props.theme.thirdBreakpoint}{
    .video-popup{
      .video-popup-inner{
        .video{
          width: 800px;
          height: 459px;
        }
      }
    }
  }
  @media (min-width: 1660px){
    .video-popup{
      .video-popup-inner{
        .video{
          width: 1000px;
          height: 572px;
        }
      }
    }
  }
`;


const BrandMovie = props => {
  return (
    <div className="page-transition">
      <BackgroundImage image={Background}>
        <StyledDiv>
          <div className="video-popup" >
            <div className="video-popup-inner">
              <iframe className="video" title="SMART" allowFullScreen width="560" height="315" src="https://www.youtube.com/embed/Nr7g_POwsYQ?autoplay=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
            </div>
          </div>
          <Navigation backTo="/about-hiab/page04" to="/about-hiab/page06" />
        </StyledDiv>
      </BackgroundImage>
    </div>
  );
}

export default BrandMovie;