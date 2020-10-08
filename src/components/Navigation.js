import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import NavIcon from "../assets/icons/red-nav-button.svg"

const NavigationWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 10px;
  position: fixed;
  bottom: 60px;
  right: 60px;
  div{
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

const Navigation = ({to, backTo}) => {
  return (
    <NavigationWrapper>
      <div>
        {backTo ?
          <Link to={backTo}>
            <img className="nav-button nav-button-back" src={NavIcon} alt="back-button"/>
          </Link>
        : ""}
      </div>
      <div>
        {to ?
          <Link to={to}>
            <img className="nav-button nav-button-forward" src={NavIcon} alt="forward-button" />
          </Link>
        : ""}
      </div>
    </NavigationWrapper>
  );
};

export default Navigation;