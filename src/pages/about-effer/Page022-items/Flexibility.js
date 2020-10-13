import React from "react";
import styled from "styled-components";

// page template
import Cases from "../../../pagetemplates/Cases";

const StyledDiv = styled.div`
  
`;

const Flexibility = () => {
  return(
    <StyledDiv>
      <Cases 
        title="Case 1: Flexibility"
        text="“We don’t need the huge lifting capabilities that some companies in the construction sector do. But we still need something very durable that can carry out lots of different types of jobs in little time. So it has to be highly flexible.”"

        efferAnswerTitle="Good."
        efferAnswerText="EFFER medium size cranes like the E215 and 265 are unique in the marketplace, with very few other offers from competitors in such segments. The solution is usually found in bigger equipment and provides not only the possibility to be adaptable to the situation and reduce movement timing according to specific needs, but also excellent durability thanks to forefront materials and technological solutions."


        hiabAnswerTitle="Because the customer here is looking for exceptional durability and flexibility …"
        hiabAnswerText="… a better match would be EFFER medium size cranes like the E215 and 265. They are unique in the marketplace, with very few other offers from competitors in such segments. The solution is usually found in bigger equipment and provides not only the possibility to be adaptable to the situation and reduce movement timing according to specific needs, but also excellent durability thanks to forefront materials and technological solutions."
      />
    </StyledDiv>
  );
}

export default Flexibility;