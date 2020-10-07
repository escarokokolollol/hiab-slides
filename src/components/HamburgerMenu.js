import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import HamburgerIcon from "../assets/icons/hamburger-menu.svg";
import CloseIcon from "../assets/icons/close-menu.svg";

const StyledDiv= styled.div`
  width: 100%;
  z-index: 9999999;
  img{
    position:fixed;
    display: inline-block;
    top: 40px;
    right: 40px;
    width:50px;
  }
  img:hover{
    cursor: pointer;
  }

  img.hamburger-icon{
    z-index: 1;
  }
  img.close-icon{
    z-index: 40;
  }
  .menu{
    position: absolute;
    top:0;
    left:0;
    width: 100%;
    height: 100vh;
    background: #222;
    background: rgba(0,0,0,0.9);
    z-index: 30;
    overflow: scroll;
    overflow-x: hidden;
    ul{
      padding:0;
      li{
          text-align:center;
        a{
          color: #fff;
          font-size: 24px;
          font-weight: 800;
          text-transform: uppercase;
          margin: 4px 0;
          transition: color .2s linear;
        }
        a:hover{
          color: ${props => props.theme.red};
          transition: color .2s linear;
        }
      }
    }
  }
`;

const HamburgerMenu = () => {
  const [toggle, setToggle] = useState(false);
  const showOrHide = {
    display: toggle ? "inline-block" : "none",
  }
  return(
    <StyledDiv>
      <img className="hamburger-icon" onClick={() => setToggle(!toggle)}src={HamburgerIcon} />

      <div className="menu" style={showOrHide}>
        <img className="close-icon" onClick={() => setToggle(!toggle)}src={CloseIcon} />
        <ul>
          <li><Link to="/">Start</Link></li>
          <li><Link to="/start05">Choose a road</Link></li>
        </ul>
      </div>
    </StyledDiv>
  );
}

export default HamburgerMenu;