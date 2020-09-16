import React from "react";
import styled from "styled-components";

const StyledHeadingTwo = styled.h2`
  text-transform: uppercase;
`;

const Heading = props => {
  const style = {
    color: props.color ? props.color : "#fff",
  }

  return <StyledHeadingTwo style={style}>{props.text}</StyledHeadingTwo>;
};

export default Heading;
