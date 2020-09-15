import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import NavIcon from "../assets/icons/red-nav-button.svg"

const Navigation = ({to, backTo}) => {
  const NavigationWrapper = styled.div`
    display: grid;
    grid-template-columns: 50% 50%;
    grid-column-gap: 10px;
    position: fixed;
    bottom: 40px;
    right: 40px;
    div{
      background: #333;
      *{ 
        color: #fff;
      }
    }

    .nav-button{
      width: 70px;
    }
    .nav-button-forward{
      transform: rotate(180deg);
    }
  `;
  return (
    <NavigationWrapper>
      <Link to={backTo}>
        <img className="nav-button nav-button-back" src={NavIcon} />
      </Link>
      <Link to={to}>
        <img className="nav-button nav-button-forward" src={NavIcon} />
      </Link>
    </NavigationWrapper>
  );
};

export default Navigation;