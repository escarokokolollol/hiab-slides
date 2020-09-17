import React from "react";
import styled from "styled-components";

import StartPage from "../../pagetemplates/StartPage";
import RedArrowLink from "../../components/RedArrowLink";

const StyledDiv = styled.div`
  .hiabOrEffer{
    display: grid;
    grid-template-columns: 45% 45%;
    grid-column-gap: 10%;
  }
`;


const Start05 = () => {
  const paragraphs = [
    "If you work with HIAB, choose the “Via Emilia” to learn the story of EFFER. If you work with EFFER, take “Köpmanbergsvägen” to learn more about HIAB.",
    "Feel free to start over as often as you like, or to revisit any section using the direct links at the bottom of the page."
  ];

  return(
    <StyledDiv>
      <StartPage 
        headingText="Choose a road"
        paragraphText={paragraphs} 
        backTo="/start04"
      >
        <div className="hiabOrEffer">
          <RedArrowLink text="Via Emilia" toWhere="/start04"/>
          <RedArrowLink text="Köpmanbergsvägen" toWhere="/start03"/>
        </div>
      </StartPage>
    </StyledDiv>
  );
}

export default Start05;