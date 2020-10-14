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
    background: rgba(0,0,0,0.9);
    z-index: 30;
    overflow: scroll;
    overflow-x: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    .menu-inner{
      max-width: 600px;
      margin: 0 auto;
      align-self: center;
      h2{
        margin-bottom:0;
        color: ${props => props.theme.red};
        text-align: center;
      }
      .grid{
        display: grid;
        grid-gap: 40px;
        grid-template-columns: 1fr 1fr;
        .grid-item{

        }
      }
    }
    ul{
      list-style: none;
      margin-top:0;
      padding:0;
      li{
          text-align:center;
        a{
          color: #fff;
          font-size: 24px;
          font-weight: 800;
          ${'' /* text-transform: uppercase; */}
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
  @media ${props => props.theme.secondBreakpoint}{
    .menu{
      h2{
        font-size: 38px;
      }
      ul{
        li{
          a{
            opacity: 1;
            font-size: 32px;
          }
        }
      }
    }
  }

  ${'' /* transition */}
  .hide{
    opacity: 0;
    z-index: -10;
    transition: opacity .3s ease;
  }
  .show{
    opacity: 1;
    z-index: 30;
    transition: opacity .3s ease;
  }
`;

const HamburgerMenu = () => {
  const [toggle, setToggle] = useState(false);
  return(
    <StyledDiv>
      <img className="hamburger-icon" alt="hamburger menu icon" onClick={() => setToggle(!toggle)}src={HamburgerIcon} />
     
      <div className={`menu ${toggle ? "show" : "hide"}`}  >
       <div className="menu-inner">
          <img className="close-icon" alt="hamburger menu icon" onClick={() => setToggle(!toggle)}src={CloseIcon} />
          <ul>
            <li><Link to="/">Start</Link></li>
          </ul>

          <div className="grid">
            <div className="grid-item">
              <h2>EFFER</h2>
              <ul>
                <li><Link to="/about-effer/page01">Story</Link></li>
                <li><Link to="/about-effer/page06">Value proposition</Link></li>
                <li><Link to="/about-effer/page016">Innovations</Link></li>
                <li><Link to="/about-effer/page018">Video: EXTREME</Link></li>
              </ul>
            </div>

            <div className="grid-item">
              <h2>HIAB</h2>
              <ul>
                <li><Link>Story</Link></li>
                <li><Link>Value proposition</Link></li>
                <li><Link>Innovations</Link></li>
                <li><Link>Video: EXTREME</Link></li>
              </ul>
            </div>
          </div>

          <h2>One unbeatable offer</h2>
          <ul>
            <li><Link to="/one-unbeatable-offer/page01">Cases</Link></li>
            <li><Link>Applications</Link></li>
          </ul>

          <ul>
            <li><Link>Key messages</Link></li>
            <li><Link>Find out more</Link></li>
          </ul>
        </div>
      </div>

    </StyledDiv>
  );
}

export default HamburgerMenu;