import React from "react";
import styled from "styled-components";

// images
import efferImg01 from "../../assets/images/effer01.jpg";

// components
import Navigation from "../../components/Navigation";

import UnorderedList from "../../components/UnorderedList";
import BillboardHeading from "../../components/BillboardHeading";
import Paragraphs from "../../components/Paragraphs";
import ImageComponent from "../../components/ImageComponent";



const StyledDiv = styled.div`
  ${'' /* background: red; */}
`;

const Page01 = () => {
  return (
    <div className="page-transition">
      <StyledDiv>
        <div className="content">
          <Navigation to="/about-effer/page02"/>
        </div>
      </StyledDiv>
    </div>
  );
};

export default Page01;
