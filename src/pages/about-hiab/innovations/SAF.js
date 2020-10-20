import React, { useState } from "react";
import styled from "styled-components";

import safImg from "../../../assets/images/hiab/innovations-saf.png";
import playButton from "../../../assets/icons/play-button02.png";
import closeIcon from "../../../assets/icons/close-menu.svg";


const StyledDiv = styled.div`
  h1{
    text-align: center;
  }
  .wrapper{
    max-width: 840px;
    margin: 0 auto;
    .text{
      button.play-video{
        display: block;
        margin: 0 auto;
        border: none;

        padding: 10px 20px;
        font-weight:900;
        font-size: 22px;
        background:${props => props.theme.red}; 
        color: #fff;
        text-transform: uppercase;
        transition: all .3s ease;
      }
      button.play-video:hover{
        background: #fff;
        color: ${props => props.theme.red}; 
        cursor: pointer;
        transition: all .3s ease;
      }
      h3{
        margin-bottom: 0;
      }
      p{
        font-size: 22px;
        margin-top:0;
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

const SAF = () => {

  const [toggle, setToggle] = useState(false);

  return(
    <StyledDiv>
      <h1>SAM</h1>
      <div className="wrapper">
        <div className="text">
          <p>Semi Automatic Folding makes it fast and easy for any operator to park the crane in a safe and controlled way. Both folding and unfolding can now be performed with a single control lever, rather than individually operating slewing, first boom, second boom. </p>
          <button className="play-video" onClick={() => setToggle(!toggle)}>Play video</button>
        </div>
    

        {toggle ? 
          <div className="video-popup" onClick={ () => setToggle(!toggle)}>
            <div className="video-popup-inner">
               <iframe className="video" title="SAF" allowFullScreen  width="560" height="315" src="https://www.youtube.com/embed/N1lrkUklbNg?autoplay=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
            </div>
            <img className="close-icon" src={closeIcon} alt="close icon" onClick={ () => setToggle(!toggle)}/> 
          </div>
        : ""}
      </div>
    </StyledDiv>
  );
}

export default SAF;