import React, { useState } from "react";
import styled from "styled-components";

import secondJib from "../../../assets/images/effer/secondJib.png";
import playButton from "../../../assets/icons/play-button02.png";
import closeIcon from "../../../assets/icons/close-menu.svg";

const StyledDiv = styled.div`
  h1{
    text-align: center;
  }
  .grid{
    max-width: 1340px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 20px;
    .left{
      h3{
        margin-bottom: 0;
      }
      p{
        margin-top:0;
      }
    }
    .right{
      position: relative;
      
      img.video-image{
        width: 100%;
      }
      img.video-image:hover{
        opacity: 0.5;
        cursor: pointer;
      }
      img.play-icon{
        pointer-events: none;
        width: 100px;
        position: absolute;
        top: 50%;
        right: 50%;
        transform: translate(50%, -50%);
        background: transparent;

      }
    }
  }

  .video-popup{
    z-index: 110;
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
        border-radius: 8px;
        padding: 10px;
        position: absolute;
        top: 50%;
        right: 50%;
        transform: translate(50%, -50%);
        width: 70%;
        height: 100%;
      }
    }
  }

  @media ${props => props.theme.firstBreakpoint}{
    h1{
      font-size: 28px;
    }
  }
  @media ${props => props.theme.secondBreakpoint}{
    .grid{
      padding: 0 80px;
      grid-template-columns: 1fr 1fr;
    }
    h1{
      font-size: 38px;
    }
  }
  @media ${props => props.theme.thirdBreakpoint}{
    h1{
      font-size: 52px;
    }
  }
  
`;

const ContinuouSlewing = () => {

  const [toggle, setToggle] = useState(false);

  return(
    <StyledDiv>
      <h1>Second jib</h1>
      <div className="grid">
        <div className="left">
          <p>no text yet no text yet no text yet no text yet no text yet no text yet no text yet no text yet </p>
        </div>

        <div className="right" onClick={() => setToggle(!toggle)}>
          <img className="video-image" src={secondJib}  alt="video placeholder"/>
          <img className="play-icon" src={playButton} alt="play video"/>
        </div>

        {toggle ? 
          <div className="video-popup" onClick={ () => setToggle(!toggle)}>
            <div className="video-popup-inner">
            <iframe className="video" title="secondjib" allowFullScreen width="560" height="315" src="https://www.youtube.com/embed/wbNNpnZ7BuU" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
            </div>
            <img className="close-icon" src={closeIcon} alt="close icon" onClick={ () => setToggle(!toggle)}/> 
          </div>
        : ""}
      </div>
    </StyledDiv>
  );
}

export default ContinuouSlewing;