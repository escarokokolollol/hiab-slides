import React from "react";
import styled from "styled-components";

import HamburgerMenu from "../HamburgerMenu";

const BackgroundImageDiv = styled.div`
  min-width: 100vw;
  min-height: 100vh;
  background: #fff;
  background-size: cover;
  background-attachment: fixed;
  .content{
    max-width: 1500px;
    margin: 0 auto;
  }
`;

const BackgroundImage = props => {
  const style = {
    backgroundImage: `url(${props.image})`,
  }
  return (
    <BackgroundImageDiv style={style}>
      <HamburgerMenu />
      <div className="content">
        {props.children}
      </div>
    </BackgroundImageDiv>
  );
}

export default BackgroundImage;