import React, { useState } from "react";

const InputRange = props => {
  const [value, setValue] = useState(props.number);

  const styledDiv = {
    borderRadius: "4px",
    padding: "2rem",
    margin: "1em",
    textAlign: "center"
  };

  const styledHeader = {
    fontSize: "42px",
    textTransform: "uppercase"
  };

  const handleChange = e => {
    setValue(e.target.value);
    props.setParam(e.target.value);
  };
  return (
    <div style={styledDiv}>
      <h3 style={styledHeader}>{props.name}</h3>
      <input
        type="range"
        className="range-slider"
        min={0}
        max={100}
        value={value}
        onChange={e => handleChange(e)}
      />
      <span className="value">{value}</span>
    </div>
  );
};

export default InputRange;
