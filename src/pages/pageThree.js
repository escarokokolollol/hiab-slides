import React from "react";
import styled from "styled-components";
import InputRange from "../components/InputRange";
import { Link } from "react-router-dom";

const InputWrapper = styled.div``;
const StyledDiv = styled.div``;

const PageTwo = props => {
  return (
    <StyledDiv className="page-transition">
      <h1>Expected Improvements using HiConnect</h1>
      <InputWrapper className="input-wrapper">
        <InputRange
          name="Reduction in unplanned downtime"
          number={props.param1}
          setParam={props.setParam1}
        />
        <InputRange
          name="Reduction in battery replacement"
          number={props.param2}
          setParam={props.setParam2}
        />
        <InputRange
          name="Reduction in asset location time"
          number={props.param3}
          setParam={props.setParam3}
        />
        <InputRange
          name="Reduction in dwell time"
          number={props.param4}
          setParam={props.setParam4}
        />
        <InputRange
          name="Increase in lifecycle (Service & Asset Utilization)"
          number={props.param5}
          setParam={props.setParam5}
        />
      </InputWrapper>
    </StyledDiv>
  );
};

export default PageTwo;
