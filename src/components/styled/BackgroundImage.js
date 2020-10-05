import React from "react";
import styled from "styled-components";

const BackgroundImageDiv = styled.div`
  width: 100vw;
  height: 100vh;
  background-size: cover;
`;

const BackgroundImage = props => {
  const style = {
    backgroundImage: `url(${props.image})`,
  }
  return(
    <BackgroundImageDiv style={style}>
      {props.children}
    </BackgroundImageDiv>
  );
}

export default BackgroundImage;