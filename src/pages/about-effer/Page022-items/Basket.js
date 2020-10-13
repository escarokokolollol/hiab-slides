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
        title="Case 4: Basket"
        text="“Our guys need to be able to work from an elevated platform.”"

        efferAnswerTitle="Both brands have baskets, but EFFER’s offer is a better starting point. "
        efferAnswerText="EFFER has many models, varying in size and capacity, that are capable of managing a Mobile Elevated Work Platform (MEWP). What makes working with EFFER’s solution special is that it has been designed for use also in situations where it is not possible to fully extend the stabilisers. This makes it possible to work in challenging tight spots, expanding the customer’s business opportunities. HIAB’s offer is more limited when it comes to this particular accessory."


        hiabAnswerTitle="HIAB’S offer is actually more limited for this particular accessory."
        hiabAnswerText="EFFER has many models, varying in size and capacity, that are capable of managing a Mobile Elevated Work Platform (MEWP). What makes working with EFFER’s solution special is that it has been designed for use also in situations where it is not possible to fully extend the stabilisers. This makes it possible to work in challenging tight spots, expanding the customer’s business opportunities."
      />
    </StyledDiv>
  );
}

export default Simplicity;