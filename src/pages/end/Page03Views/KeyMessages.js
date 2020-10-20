import React from "react";
import styled from "styled-components";

import HiabLogo from "../../../assets/icons/hiab-logo.svg";
import EfferLogo from "../../../assets/icons/effer-logo.svg";

const StyledDiv = styled.div`

`;

const KeyMessages = () =>{
  return (
    <StyledDiv>
      <div className="wrapper">

        <div className="hiab">
          <img className="logo" src={HiabLogo} alt="hiab logo"/>
          <p>some hiab text some hiab text some hiab text some hiab text some hiab text some hiab text some hiab text some hiab text some hiab text </p>
        </div>

        <div className="effer">
          <img className="logo" src={EfferLogo} alt="effer logo"/>
          <p> some effer text some effer text some effer text some effer text some effer text some effer text some effer text some effer text some effer text </p>
        </div>

      </div>

    </StyledDiv>
  );
}

export default KeyMessages;