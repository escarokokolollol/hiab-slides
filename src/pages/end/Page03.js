import React, { useState } from "react";
import styled from "styled-components";

// components
import BackgroundImage from "../../components/styled/BackgroundImage.js";
import Navigation from "../../components/Navigation";
import KeyMessages from "./Page03Views/KeyMessages";
import Links from "./Page03Views/Links";

// images
import Background from "../../assets/images/effer_hiab-background.jpg";

const StyledDiv = styled.div`
  h1{
    margin: 0;
  }

  .menu{
    padding-top: 90px;
    ul{
      padding: 0;
      margin: 0 auto;
      width: 90%;
      max-width: 600px;
      display: flex;
      justify-content: space-around;
      li{
        padding: 4px 8px;
        font-size: 28px;
        font-weight: 900;
        text-transform: uppercase;
        list-style: none;
        marign: 0 auto;
        color: #fff;
        transition: all .3s ease;
      }
      li:hover{
        color: ${props => props.theme.red};
        cursor: pointer;
      }
      li.active-menu-item{
        color: #fff;
        background: ${props => props.theme.red};
        transition: all .3s ease;
      }
    }
  }

  .content{
    max-width: 800px;
    margin: 0 auto;
  }


`;

const Page03 = () => {

  const [toggleMessages, setToggleMessages] = useState(true);
  const [toggleLinks, setToggleLinks] = useState(false);

  const toggleMenu = (val) => {
    switch (val) {
      case "messages":
        setToggleLinks(false)
        setToggleMessages(true);
        break;
      case "links":
        setToggleMessages(false);
        setToggleLinks(true)
        break;
      default:
        setToggleLinks(false)
        setToggleMessages(false);
        break;
    }
  }

  return (
    <div className="page-transition">
      <BackgroundImage image={Background}>
        <StyledDiv>
          <div className="menu">
            <ul>
              <li className={`${toggleMessages && "active-menu-item"}`} onClick={() => toggleMenu("messages")}>Key Messages</li>
              <li className={`${toggleLinks && "active-menu-item"}`} onClick={() => toggleMenu("links")}>Links</li>
            </ul>
          </div>

          <div className="content">
            {toggleMessages &&
              <KeyMessages />
            }
            {toggleLinks &&
              <Links />
            }
          </div>

          <Navigation backTo="/end02" to="/end04"/>

        </StyledDiv>
      </BackgroundImage>
    </div>
  );

}

export default Page03;
