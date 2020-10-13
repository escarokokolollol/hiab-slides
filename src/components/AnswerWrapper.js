import React from "react";
import styled from "styled-components";

/////////////////////
//
//  PROPS:
//  text
//  title
//
/////////////////////

const StyledDiv = styled.div`
  width: 100%;
  background: #fff;
  max-width: 800px;
  padding: 1.5rem 2rem;
  display: flex;
  flex-direction: column;
  position: relative;
  h1{
    margin: 0;
    color: #000;
  }
  .info-paragraph{
    font-size: 14px;
    color: #333;
    padding-top: 10px;
  }
  .info-icon{
    width: 30px;
  }
`;
const AnswerWrapper = props => {
  return(
    <StyledDiv>
      {props.title && <h1 style={props.title.length > 40 ? { fontSize: "22px"}: {} }>{props.title}</h1>}
      {props.text && <p className="info-paragraph">{props.text}</p>}
    </StyledDiv>
  );
}

export default AnswerWrapper;