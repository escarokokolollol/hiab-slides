import React from "react";
import styled from "styled-components";

const Heading = props => {
  const StyledHeadingTwo = styled.h2`
    text-transform: uppercase;
    color: ${props.color ? props.color : "#fff"};
  `;

  return <StyledHeadingTwo>{props.text}</StyledHeadingTwo>;
};

export default Heading;
