import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import HamburgerIcon from "../assets/icons/hamburger-menu.svg";
import CloseIcon from "../assets/icons/close-menu.svg";

const StyledDiv = styled.div`
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
    position: fixed;
    top:0;
    left:0;
    width: 100%;
    height: 100vh;
    background: rgba(0,0,0,0.9);
    z-index: 30;
    overflow-x: hidden;
    .menu-inner{
      max-width: 600px;
      margin: 0 auto;
      margin-top: 10vh;
      text-align: center;
      h2{
        margin-bottom:0;
        margin-top: 10px;
        color: ${props => props.theme.red};
      }
      .grid{
        display: grid;
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
          ${'' /* text-align:center; */}
        a{
          color: #fff;
          font-size: 22px;
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
        font-size: 28px;
      }
      ul{
        li{
          a{
            opacity: 1;
            font-size: 22px;
          }
        }
      }
    }
  }
  @media ${props => props.theme.thirdBreakpoint}{
    .menu{
      .menu-inner{
        h2{
          font-size: 32px;
        }
        ul{
          li{
            a{
              font-size: 28px;
            }
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
  return (
    <StyledDiv>
      <img className="hamburger-icon" alt="hamburger menu icon" onClick={() => setToggle(!toggle)} src={HamburgerIcon} />

      <div className={`menu ${toggle ? "show" : "hide"}`}  >
        <div className="menu-inner">
          <img className="close-icon" alt="hamburger menu icon" onClick={() => setToggle(!toggle)} src={CloseIcon} />
          <ul>
            <li><Link to="/">Intro</Link></li>
            <li><Link to="/start05">Choose a road</Link></li>
          </ul>

          <div className="grid">
            <div className="grid-item">
              <h2>EFFER</h2>
              <ul>
                <li><Link to="/about-effer/page01">Story</Link></li>
                <li><Link to="/about-effer/page08">Value proposition</Link></li>
              </ul>
            </div>

            <div className="grid-item">
              <h2>HIAB</h2>
              <ul>
                <li><Link to="/about-hiab/page01">Story</Link></li>
                <li><Link to="/about-hiab/page07">Value proposition</Link></li>
              </ul>
            </div>
          </div>

          <h2>A portfolio for every need</h2>
          <ul>
            <li><Link to="/one-unbeatable-offer/page01">One unbeatable offer</Link></li>
            <li><Link to="/one-unbeatable-offer/page03">Cases</Link></li>
            <li><Link to="/one-unbeatable-offer/page04">Applications</Link></li>
            <li><Link to="/end03">Key messages</Link></li>
            <li><Link to="/end09">Learn more</Link></li>
          </ul>
        </div>
      </div>

    </StyledDiv>
  );
}

export default HamburgerMenu;
