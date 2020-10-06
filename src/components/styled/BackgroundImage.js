import React from "react";
import styled from "styled-components";

const BackgroundImageDiv = styled.div`
  min-width: 100vw;
  min-height: 100vh;
  background-size: cover;
  background-attachment: fixed;
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