import React from "react";

// takes array and formats multiple <p> tags

const Paragraphs = props => {
  return (
    <div>
      {props.items.map(item => (
        <p>{item}</p>
      ))}
    </div>
  );
};

export default Paragraphs;
