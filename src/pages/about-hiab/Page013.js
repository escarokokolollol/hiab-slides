import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import BackgroundImage from "../../components/styled/BackgroundImage";
import Navigation from "../../components/Navigation";

import HiabLogo from "../../assets/icons/hiab-logo.svg";
import Background from "../../assets/images/hiab/hiab-bg-dark.jpg";
import closeIcon from "../../assets/icons/close-menu.svg";


const StyledDiv = styled.div`
  height: 100vh;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h2{
    margin: 0;
    padding-top: 20px;
  }
  h1{
    font-size: 66px;
    letter-spacing: 20px;
    margin: 0;
    ${'' /* padding-bottom: 60px; */}
  }
  .logo{
    position: absolute;
    top: 20px;
    left: 30px;
  }

  .open-popup{
    padding: 10px 20px;
    font-weight:900;
    font-size: 22px;
    background:${props => props.theme.red}; 
    color: #fff;
    text-transform: uppercase;
    transition: all .3s ease;
  }
  .open-popup:hover{
    background: #fff;
    color: ${props => props.theme.red}; 
    cursor: pointer;
    transition: all .3s ease;
  }

  .compare{
    font-size: 22px;
    color: ${props => props.theme.red};
    position: absolute;
    bottom: 80px;
    padding: 10px 20px;
    font-weight: 900;
    transition: all .3s ease;
  }
  .compare:hover{
    background: ${props => props.theme.red};
    color: #fff;
    transition: all .3s ease;
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
        ${'' /* box-shadow: 1px 1px 12px #888; */}
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
    h2{
    }
    h1{
      font-size: 100px;
    }
  }
  @media ${props => props.theme.secondBreakpoint}{
    h2{
    }
  }
  @media ${props => props.theme.thirdBreakpoint}{
    h2{
    }
    .RedArrowLink-wrapper{
      width: 20%;
      left: 40%;
    }
  }
`;


const Page013 = props => {

  const [toggle, setToggle] = useState(false);

  return(
    <div className="page-transition">
      <BackgroundImage image={Background}>
        <StyledDiv>
          <img className="logo" alt="effer logo" src={HiabLogo} />
          
          <h2>If we could boil it down to just one word, it would be…</h2>
          <h1>SMART</h1>        

          <p className="open-popup" onClick={ () => setToggle(!toggle)}>Play video</p>

          {toggle ? 
            <div className="video-popup" onClick={ () => setToggle(!toggle)}>
              <div className="video-popup-inner">
                <iframe className="video" title="SMART" allowFullScreen width="560" height="315" src="https://www.youtube.com/embed/Nr7g_POwsYQ?autoplay=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
              </div>
              <img className="close-icon" src={closeIcon} alt="close icon" onClick={ () => setToggle(!toggle)}/> 
            </div>
          : ""}

          <Link className="compare" to="/about-effer/page018">Compare with EFFER</Link>

          <Navigation backTo="/about-hiab/page012" to="/about-hiab/page014"/>
        </StyledDiv>
      </BackgroundImage>
    </div>
  );
}

export default Page013;