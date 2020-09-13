import React from "react";

const Paragraphs = props => {
  console.log(props.items);
  return (
    <div>
      {props.items.map(item => (
        <p>{item}</p>
      ))}
    </div>
  );
};

export default Paragraphs;
