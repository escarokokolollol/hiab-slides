
import React from "react";
import styled from "styled-components";

// page template
import Cases from "../../../pagetemplates/Cases";

const StyledDiv = styled.div`
  
`;

const Repetition = () => {
  return(
    <StyledDiv>
      <Cases 
        title="Case 3: Repetition"
        text="“What we mostly need is a crane that will carry out the same, repetitive tasks over and over again as efficiently as possible. Like picking brick and blocks, or emptying recycling bins in metro areas.”"

        efferAnswerTitle="This is actually a very strong argument for choosing HIAB."
        efferAnswerText="Why? Because when it comes to performing highly repetitive cycles safely and efficiently, HIAB loader cranes are hard to beat. That’s because of unique features like Semi Automatic Motion (SAM) and Load Stability System for vertical movements (LSS-V), which simplifiy and speed up repetitive movements with the assistance of the control system, without sacrificing safety."


        hiabAnswerTitle="Good choice. This is another of HIAB’s strengths."
        hiabAnswerText="When it comes to performing highly repetitive cycles safely and efficiently, HIAB loader cranes are hard to beat. That’s because of unique features like Semi Automatic Motion (SAM) and Load Stability System for vertical movements (LSS-V), which simplifiy and speed up repetitive movements with the assistance of the control system, without sacrificing safety."
      />
    </StyledDiv>
  );
}

export default Repetition;