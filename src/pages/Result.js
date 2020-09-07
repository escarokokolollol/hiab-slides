import React from "react";
import styled from "styled-components";

const Result = props => {
  const calc =
    parseInt(props.param1) +
    parseInt(props.param2) +
    parseInt(props.param3) +
    parseInt(props.param4);

  const StyledDiv = styled.div`
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 80vh;
    h2 {
      font-size: 120px;
      color: #d52b1f;
      display: inline-block;
    }
  `;
  return (
    <StyledDiv className="page-transition">
      <div>
        <h2>{calc}%</h2>
      </div>
    </StyledDiv>
  );
};

export default Result;
