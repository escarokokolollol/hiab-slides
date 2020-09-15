import React from "react";

// images
import efferImg01 from "../../assets/images/effer01.jpg";

// components
// import BackButton from "../../components/BackButton";
// import ForwardButton from "../../components/ForwardButton";
import Navigation from "../../components/Navigation";

import UnorderedList from "../../components/UnorderedList";
import BillboardHeading from "../../components/BillboardHeading";
import Paragraphs from "../../components/Paragraphs";
import ImageComponent from "../../components/ImageComponent";

const Page01 = () => {
  const listItems = [
    "Inventor of the original truck mounted crane",
    "Pioneering innovations for more than 75 years",
    "Now creating smart solutions that enable smarter business operations for our customers"
  ];

  const paragraphItems = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean mollis laoreet lobortis. Phasellus eu.",
    "Cras ipsum lorem, dignissim blandit fringilla quis, cursus imperdiet nisl. Vestibulum at tellus non savelit blandit vestibulum. Praesent ut nisl turpis. Suspendisse at nibh convallis, imperdiet tortor et, porta quam.",
    "Pellentesque volutpat, justo ac mattis scelerisque, ipsum purus euismod dui, nec sollicitudin odio masorci lobortis venenatis quis non enim."
  ];

  return (
    <div className="page-transition">
      <BillboardHeading text="Then you already know that" />
      <BillboardHeading text="At hiab, we're recognized as" color="red" />

      <UnorderedList items={listItems} />

      <Paragraphs items={paragraphItems} />

      <ImageComponent src={efferImg01} />

      <Navigation backToWhere="/work-with" forwardToWhere="/about-effer/page02"/>

    </div>
  );
};

export default Page01;
