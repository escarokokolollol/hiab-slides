import React from "react";
import styled from "styled-components";
import waltcohead from "../assets/images/waltco-head-right.png";
const StyledHeader = styled.header`
  display: flex;
  div {
    padding-top: 2rem;
    margin-left: 2rem;
    h1 {
      font-size: 65px;
      line-height: 50px;
      color: #fff;
    }
    h1:nth-child(odd) {
      color: #d52b1f;
    }
  }

  img {
    position: absolute;
    top: 0;
    right: 0;
    width: 40vw;
    max-width: 450px;
    z-index: 50;
  }
`;
const Header = props => {
  return (
    <StyledHeader>
      <div>
        <h1>HICONNECT</h1>
        <h1>ROICALCULATOR</h1>
      </div>
      <img src={waltcohead} alt="waltco-logo" />
    </StyledHeader>
  );
};

export default Header;
