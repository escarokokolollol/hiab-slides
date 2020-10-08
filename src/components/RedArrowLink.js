import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import arrowIconSvg from "../assets/icons/arrow-icon.svg"

const StyledDiv = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  background: #E21117;
  width: 100%;
  height: 70px;
  position: relative; 
  margin-bottom: 20px;
  img {
    position: absolute; 
    right:20px;
  }
  p {
    font-size: 22px;
    color: #fff;
    text-transform: none;
  }
`;

const RedArrowLink = (props) => {
  return(
    <Link to={props.toWhere}>
      <StyledDiv>
        <p>{props.text}</p>
        <img src={arrowIconSvg} alt="lol"/>
      </StyledDiv>
    </Link>
  );
}

export default RedArrowLink;