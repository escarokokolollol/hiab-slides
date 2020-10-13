import React from "react";
import styled from "styled-components";

// page template
import Cases from "../../../pagetemplates/Cases";

const StyledDiv = styled.div`
  
`;

const Simplicity = () => {
  return(
    <StyledDiv>
      <Cases 
        title="Case 2: Simplicity"
        text="“We need to reduce the complexity of the use of the crane, especially if thinking about the next generation of drivers.”"

        efferAnswerTitle="Actually, this is an area where HIAB truly excels."
        efferAnswerText="HIAB cranes offer many functions enabled by the control system that take ease of use to a new level. By providing more assistance to operators, both the risk of damage and the time it takes to get things done are thus reduced. Examples include Semi Automatic Motion (SAM), Semi Automatic Folding (SAF) and Crane Tip Control (CTC) and others. Many are unique to the HIAB brand, and give businesses an additional edge in efficiency."


        hiabAnswerTitle="Good."
        hiabAnswerText="HIAB cranes offer many functions enabled by the control system that take ease of use to a new level. By providing more assistance to operators, both the risk of damage and the time it takes to get things done are thus reduced. Examples include Semi Automatic Motion (SAM), Semi Automatic Folding (SAF) and Crane Tip Control (CTC) and others. Many are unique to the HIAB brand, and give businesses an additional edge in efficiency."
      />
    </StyledDiv>
  );
}

export default Simplicity;