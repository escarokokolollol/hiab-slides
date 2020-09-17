import React from "react";
import styled from "styled-components"

const StyledDiv = styled.div`
  height: 100vh;
  display:flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h2, h3 {
    margin: 0;
    text-transform: uppercase;
  }
  h2{
    font-size: 47px;
  }
  h3{
    color: #E21117;
    font-size: 39px;
  }
`;

const PortraitModeMessage = () => {
  return (
    <StyledDiv>
      <h2>Please tilt your screen to continue</h2>
      <h3 >This site is made to be viewed horizontally</h3>
    </StyledDiv>
  );
}

export default PortraitModeMessage;