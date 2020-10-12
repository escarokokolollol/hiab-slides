import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  h1{
    text-align: center;
  }
  .grid{
    max-width: 1340px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 20px;
    .left{
      h3{
        margin-bottom: 0;
      }
      p{
        margin-top:0;
      }
    }
    .right{
      position: relative;
      width: 100%;
      height: 0;
      padding-bottom: 56.25%;
      .video {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }
    }
  }

  @media ${props => props.theme.firstBreakpoint}{
    h1{
      font-size: 28px;
    }
  }
  @media ${props => props.theme.secondBreakpoint}{
    .grid{
      grid-template-columns: 1fr 1fr;
    }
    h1{
      font-size: 38px;
    }
  }
  @media ${props => props.theme.thirdBreakpoint}{
    .grid{
      grid-template-columns: 1fr 2fr;
    }
    h1{
      font-size: 52px;
    }
  }
  
`;

const CroSStab = () => {
  return(
    <StyledDiv>
      <h1>CroSStab – only on EFFER!</h1>
      <div className="grid">
        <div className="left">
          <h3>A unique, patented feature</h3>
          <p>Makes it possible to work with a 360° overview </p>

          <h3>Pivoting stabilizers</h3>
          <p>Can be placed in most stable position for safest working conditions </p>

          <h3>Much more space between stabilizers</h3>
          <p>Very helpful for placing and handling the load that needs to be carried</p>
        </div>
        <div className="right">
          <iframe className="video" width="560" height="315" src="https://www.youtube.com/embed/m5xLC8FS-6k" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </div>
    </StyledDiv>
  );
}

export default CroSStab;